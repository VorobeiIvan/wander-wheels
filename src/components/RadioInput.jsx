import React from 'react';

const RadioInput = ({ label, value, name, icon }) => {
  return (
    <>
      {icon}
      <label className="radio-label">
        {label}
        <input className="radio" type="radio" name={name} value={value} />
      </label>
    </>
  );
};

export default RadioInput;
