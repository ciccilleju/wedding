import React from 'react';

const ErrorDialog = ({ errorMessage, closeDialog }) => {

  const handleCloseDialog = () => {
    closeDialog();
  }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleCloseDialog}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <p className="text-lg font-semibold text-center mb-4">{errorMessage}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCloseDialog}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            OK
          </button>

        </div>
      </div>
    </div>
  );
};

export default ErrorDialog;
