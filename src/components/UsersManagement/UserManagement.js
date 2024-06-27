import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmationDialog from '../UI/Dialog';
import UserList from './UsersList';
import Button from '../Button';
import UserFormModal from './UserFormModal';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: '', firstName: '', lastName: '', password: '', role: 'guest_italy', language: 'it', attendance: false, guests: 0, guests_children: 0, notes: '' });
  const [editUser, setEditUser] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users', {
        params: { page: currentPage, limit: 3 }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    };
    fetchUsers();
  }, [currentPage, users.length]);

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
      setFormData({ username: '', password: '', role: 'guest_italy', language: 'it', attendance: false, guests: 0, guests_children: 0, notes: '' });
      setIsModalOpen(false);

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(`/api/users/${selectedUser._id}`, formData);
      const updatedUsers = users.map(user => (user._id === selectedUser._id ? response.data : user));
      setUsers(updatedUsers);
      setSelectedUser(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleUpdateUser = (user) => {
    setEditUser('update');
    setSelectedUser(user);
    setFormData({ username: user.username, firstName: user.firstName, lastName: user.lastName, role: user.role, language: user.language, attendance: user.attendance, guests: user.guests, guests_children: user.guests_children, notes: user.notes });
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };

  const confirmDeleteUser = async () => {
    if (selectedUser) {
      try {
        await axios.delete(`/api/users/${selectedUser._id}`);
        const updatedUsers = users.filter((user) => user._id !== selectedUser._id);
        setUsers(updatedUsers);
        setSelectedUser(null);
        setShowConfirmation(false);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const cancelDeleteUser = () => {
    setSelectedUser(null);
    setShowConfirmation(false);
  };

  return (
    <>
      <h2 className="text-3xl font-bold underline">User Management</h2>
      <div className="flex justify-end">
        <div className="w-full sm:w-1/6">
          <Button type="button" variant={editUser === 'add' ? 'secondary' : 'primary'} onClick={() => { setIsModalOpen(true); setEditUser(editUser === 'add' ? '' : 'add') }}>
            Aggiungi Utente
          </Button>
        </div>
      </div>
      {isModalOpen && (<UserFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false); // Close the modal
          setEditUser('');
          setFormData({ username: '', password: '', firstName: '', lastName: '', role: 'guest_italy', language: 'it', attendance: false, guests: 0, guests_children: 0, notes: '' });
        }}
        formData={formData}
        setFormData={setFormData}
        editUser={editUser}
        createUser={createUser}
        updateUser={updateUser}
      />)}
      <h2 className="text-3xl font-bold my-4 text-center">Lista utenti registrati</h2>
      <UserList users={users} handleUpdateUser={handleUpdateUser} handleDeleteUser={handleDeleteUser} />
      <div className="flex justify-between mt-4">
        <Button
          classes="w-1/3 mr-2"
          variant={currentPage === 1 ? 'disabled' : 'primary'}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className='w-1/3 text-center'>
          Page {currentPage} of {totalPages}
        </div>
        <Button
          classes="w-1/3 mr-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          variant={currentPage === totalPages ? 'disabled' : 'primary'}
        >
          Next
        </Button>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to delete this user?"
          onConfirm={confirmDeleteUser}
          onCancel={cancelDeleteUser}
        />
      )}
    </>
  );
};

export default UserManagement;
