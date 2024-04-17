import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  return (
    <input
      className="input booking-form-input"
      type="text"
      placeholder="Email"
      required
      title="Enter your email ( Obi-Wan_Kenobi@example.com)"
      value={email}
      onChange={handleEmailChange}
    />
  );
};

export default EmailInput;
