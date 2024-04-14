import React, { useState } from 'react';
import RadioInput from './RadioInput';
import { AlcoveIcon, FullyIntegratedIcon, VanIcon } from './Icons';

const RadioList = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const radioOptions = [
    { value: 'van', label: 'Van', icon: <VanIcon /> },
    {
      value: 'fully-integrated',
      label: 'Fully Integrated',
      icon: <FullyIntegratedIcon />,
    },
    { value: 'alcove', label: 'Alcove', icon: <AlcoveIcon /> },
  ];

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  return (
    <div className="radio-container">
      <h2 className="radio-title">Vehicle type</h2>
      <hr className="hr" />
      <ul className="radio-list">
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
      </ul>
    </div>
  );
};

export default RadioList;
