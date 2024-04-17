import React, { useState } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  return (
    <input
      className="input booking-form-input"
      type="text"
      placeholder="Name"
      required
      title="Enter your name (Obi-Wan Kenobi)"
      value={name}
      onChange={handleNameChange}
    />
  );
};

export default NameInput;
