import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-700 text-white  px-10 py-3 rounded-xl font-bold tracking-widest text-lg transition-colors ${
        disabled ? 'cursor-not-allowed bg-zinc-600' : 'hover:bg-blue-500'
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
