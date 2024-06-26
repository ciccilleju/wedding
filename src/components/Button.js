// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, disabled, variant = 'primary', classes }) => {
  const baseClasses = "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " + classes;
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    disabled: "bg-gray-200",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700"
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
};

export default Button;
