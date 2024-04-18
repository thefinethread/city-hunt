import React from 'react';

const Button = ({ text, disabled = false, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-blue-700 text-white  px-10 py-3 mb-5 rounded-xl font-bold tracking-widest text-lg transition-colors ${
        disabled ? 'cursor-not-allowed bg-zinc-600' : 'hover:bg-blue-500'
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
