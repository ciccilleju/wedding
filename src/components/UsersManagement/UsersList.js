import React from 'react';

const UserList = ({ users, handleUpdateUser, handleDeleteUser }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {users.map(user => (
          <div key={user._id} className="w-full mx-auto bg-white rounded-xl overflow-hidden shadow-lg border rounded-lg   bg-white">
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{user.username}</h3>
              <p className="text-gray-600 mb-4">{user.firstName} {user.lastName}</p>
              <p className="text-gray-600 mb-2">Language: {user.language}</p>
              <p className="text-gray-600 mb-2">Role: {user.role}</p>
              {user.attendance && (
                <>
                  <p className="text-gray-600 mb-2">Attendance: {user.attendance ? 'Yes' : 'No'}</p>
                  <p className="text-gray-600 mb-2">Adults: {user.guests}</p>
                  <p className="text-gray-600 mb-2">Children: {user.guests_children}</p>
                  <p className="text-gray-600 mb-2">Intollerances: {user.notes}</p>
                </>
              )}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                  onClick={() => handleUpdateUser(user)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDeleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
