import React from 'react';
import Modal from 'react-modal';
import Button from '../Button';

// Make sure to set the app root element for accessibility
Modal.setAppElement('#root');

const UserFormModal = ({ isOpen, onClose, formData, setFormData, editUser, createUser, updateUser }) => {

  const handleModalClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser === 'add' ? createUser() : updateUser();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="User Form Modal"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      className="bg-white overflow-hidden rounded-lg text-left outline-none sm:max-w-lg sm:w-full"
    >
      <div className="p-6 relative">


        <form onSubmit={handleSubmit} className="space-y-4">
          <span className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer" onClick={onClose}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {editUser !== 'update' && (
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Guest Type</label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="guest_italy">Guest Italy</option>
              <option value="guest">Ospite in zona</option>
              <option value="guest_hungary">Guest Hungary</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="language" className="block text-gray-700 text-sm font-bold mb-2">Language</label>
            <select
              id="language"
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="it">Italiano</option>
              <option value="hu">Ungherese</option>
              <option value="en">Inglese</option>
            </select>
          </div>

          {editUser === 'update' && (
            <div className="mb-4">
              <label htmlFor="attendance" className="block text-gray-700 text-sm font-bold mb-2">Attendance</label>
              <select
                id="attendance"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value === 'true' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value={true}>Sì</option>
                <option value={false}>No</option>
              </select>

              {formData.attendance && (
                <>
                  <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Guests</label>
                  <input
                    id="guests"
                    type="number"
                    placeholder="Number of guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <label htmlFor="guests_children" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Quanti Bambini</label>
                  <input
                    id="guests_children"
                    type="number"
                    placeholder="Number of children"
                    value={formData.guests_children}
                    onChange={(e) => setFormData({ ...formData, guests_children: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Intollerances and Notes:</label>
                  <textarea
                    id="notes"
                    placeholder="Intollerances and Notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </>
              )}
            </div>
          )}

          <div className="flex justify-end">
            {editUser === 'add' && <Button variant="primary" type="submit">Create User</Button>}
            {editUser === 'update' && <Button variant="primary" type="submit">Update User</Button>}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UserFormModal;
