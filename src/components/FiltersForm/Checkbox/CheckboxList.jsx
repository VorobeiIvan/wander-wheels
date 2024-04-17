import React, { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import checkboxOptions from 'utils/checkboxOptions';

const CheckboxList = () => {
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = name => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      {checkboxOptions.map(option => (
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
    </>
  );
};

export default CheckboxList;
