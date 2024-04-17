import React, { useState } from 'react';

const Input = ({ inputProps = {} }) => {
  const {
    label = '',
    type = 'text',
    id = '',
    placeholder = '',
    icon = null,
    className = '',
    name = '',
    required = false,
    title = '',
    pattern = '',
  } = inputProps;
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const isChecked = type === 'checkbox' && inputValue;

  return (
    <div className="input-wrapper">
      {icon}
      <label className="input-label">
        {label && label}
        <input
          className={`input ${className}`}
          type={type}
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          name={name}
          checked={isChecked}
          required={required}
          title={title}
          pattern={pattern}
        />
      </label>
    </div>
  );
};

export default Input;
