import React from 'react';

const UserList = ({ users, handleUpdateUser, handleDeleteUser }) => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-md bg-white">
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-semibold">Username: {user.username}</p>
              <p className="text-gray-600">Language: {user.language}</p>
              <p className="text-gray-600">Role: {user.role}</p>
            </div>
            <div className="mt-4 md:mt-0 flex  flex-col">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleUpdateUser(user)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
