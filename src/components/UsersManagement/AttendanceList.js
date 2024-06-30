import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Button';

const AttendanceList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [users, setUsers] = useState([]);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get('/api/users', {
        params: { page, limit: 16 }
      });
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  useEffect(() => {
    let totalAdults = 0;
    let totalChildren = 0;

    users.forEach(user => {
      if (user.attendance) {
        totalAdults += user.guests;
        totalChildren += user.guests_children;
      }
    });

    setAdults(totalAdults);
    setChildren(totalChildren);
  }, [users]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Total Confirmed Guests: {adults + children} <br /> Adults: {adults} - Children: {children}</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map(user => (
          <div key={user._id} className="w-full mx-auto bg-white rounded-xl overflow-hidden shadow-lg border rounded-lg bg-white">
            <div className="p-2">
              <h3 className="font-bold text-xl mb-2">{user.username}</h3>
              <p className="text-gray-600 mb-2">{user.firstName} {user.lastName}</p>
              {user.attendance && (
                <>
                  <p className="text-gray-600 mb-2">Adults: {user.guests} - Children: {user.guests_children}</p>
                  <p className="text-gray-600 mb-2">Intolerances: {user.notes}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default AttendanceList;
