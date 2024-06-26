import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmationDialog from '../UI/Dialog';
import UserList from './UsersList';
import Button from '../Button';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: '', password: '', role: 'guest_italy', language: 'it' });
  const [editUser, setEditUser] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users', {
        params: { page: currentPage, limit: 5 }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    };
    console.log(totalPages);
    fetchUsers();
  }, []);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post('/api/users', formData);
      setUsers([...users, response.data]);
      //  setFormData({ username: '', password: '', role: 'guest', language: 'it' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async () => {
    debugger
    try {
      const response = await axios.put(`/api/users/${selectedUser._id}`, formData);
      const updatedUsers = users.map(user => (user._id === selectedUser._id ? response.data : user));
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async () => {
    try {
      setShowConfirmation(false); // Hide dialog after delete
      await axios.delete(`/api/users/${selectedUser._id}`);
      const updatedUsers = users.filter((user) => user._id !== selectedUser._id);
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdateUser = async (user) => {
    setEditUser('update');
    setSelectedUser(user);
    const userToUpdate = user;
    setFormData({ username: userToUpdate.username, password: userToUpdate.password, role: userToUpdate.role, language: userToUpdate.language });
  }
  const handleDeleteUser = async (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  }

  const confirmDeleteUser = () => {
    if (selectedUser) {
      deleteUser(selectedUser._id);
    }
  };

  const cancelDeleteUser = () => {
    setSelectedUser(null);
    setShowConfirmation(false);
  };



  return (
    <div>
      <h2 className="text-3xl font-bold underline">User Management</h2>
      {editUser !== 'update' && <Button type="button" variant={editUser === 'add' ? 'secondary' : 'primary'} onClick={() => setEditUser(editUser === 'add' ? '' : 'add')}>
        {editUser === 'add' ? 'Chiudi' : 'Aggiungi Utente'}
      </Button>}
      {editUser === 'update' && <Button onClick={() => setEditUser('')} type="button" variant="secondary" > Chiudi </Button>
      }
      {editUser && <>

        <form onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}>

          <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          <input className='hidden' type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
            <option value="guest_italy">Guest Italy</option>
            <option value="guest">Ospite in zona</option>
            <option value="guest_hungary">Guest Hungary</option>
            <option value="admin">Admin</option>
          </select>
          <select value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })}>
            <option value="it">Italiano</option>
            <option value="hu">Ungherese</option>
            <option value="en">Inglese</option>
          </select>
          {editUser === 'add' && <Button variant="primary" type="submit">Create User</Button>}
          {editUser === 'update' && <Button variant="primary" type="button" onClick={() => updateUser(selectedUser?._id)}>Update User</Button>}
        </form>
      </>}
      <h2 className="text-3xl font-bold my-4 text-center">Lista utenti registrati</h2>
      <UserList users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to delete this user?"
          onConfirm={confirmDeleteUser}
          onCancel={cancelDeleteUser}
        />
      )}
    </div>
  );
};

export default UserManagement;
