import React from 'react';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} type={type} className="button">
      {text}
    </button>
  );
};

export default Button;
