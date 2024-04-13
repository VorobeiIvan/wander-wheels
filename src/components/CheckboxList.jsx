import React, { useState } from 'react';
import CheckboxInput from './CheckboxInput';

const CheckboxList = ({ checkboxArr }) => {
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = name => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="checkbox-wrapper">
      <h2 className="checkbox-title">Vehicle equipment</h2>
      <hr className="hr" />
      <ul className="checkbox-list">
        {checkboxArr.map(option => (
          <li
            className={`checkbox-item ${
              checkboxStates[option.name] && 'checked'
            }`}
            key={option.name}
          >
            <CheckboxInput
              icon={option.icon}
              label={option.label}
              isChecked={checkboxStates[option.name] || false}
              onChange={() => handleCheckboxChange(option.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;
