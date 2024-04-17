import React, { useState } from 'react';
import RadioInput from './RadioInput';
import radioOptions from 'utils/radioOptions';

const RadioList = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  return (
    <>
      {radioOptions.map(option => (
        <li
          className={`radio-item ${
            selectedValue === option.value ? 'checked' : ''
          }`}
          key={option.label}
          onClick={() => handleRadioChange(option.value)}
        >
          <RadioInput
            icon={option.icon}
            label={option.label}
            value={option.value}
            name="radio"
          />
        </li>
      ))}
    </>
  );
};

export default RadioList;
