import React from 'react';
import RadioInput from './RadioInput';

const RadioList = ({ values }) => {
  const radioOptions = [
    { value: 'van', label: 'Van', icon: '🚐' },
    { value: 'fully-integrated', label: 'Fully Integrated', icon: '🚘' },
    { value: 'alcove', label: 'Alcove', icon: '🚔' },
  ];

  return (
    <div className="radio-wrapper">
      <h2 className="radio-title">Vehicle type</h2>
      <hr className="hr" />
      <ul className="radio-list">
        {radioOptions.map(option => (
          <li
            className={`checkbox-item ${values[option.value] && 'checked'}`}
            key={option.value}
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
