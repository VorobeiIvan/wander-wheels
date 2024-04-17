import React from 'react';

const RadioInput = ({ label, value, name, icon }) => {
  return (
    <div className="radio-wrapper">
      {icon}
      <label className="radio-label">
        {label}
        <input
          className="radio visible"
          type="radio"
          name={name}
          value={value}
        />
      </label>
    </div>
  );
};

export default RadioInput;
