import React from 'react';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <p className="text-lg font-semibold text-center mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
