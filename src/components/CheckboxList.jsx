import React, { useState } from 'react';
import CheckboxInput from './CheckboxInput';
import {
  ACIcon,
  AutomaticIcon,
  KitchenIcon,
  ShowerWCIcon,
  TVIcon,
} from './Icons';

const CheckboxList = () => {
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = name => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const checkboxOptions = [
    { name: 'ac', label: 'AC', icon: <ACIcon /> },
    { name: 'automatic', label: 'Automatic', icon: <AutomaticIcon /> },
    { name: 'kitchen', label: 'Kitchen', icon: <KitchenIcon /> },
    { name: 'tv', label: 'TV', icon: <TVIcon /> },
    { name: 'shower-wc', label: 'Shower/WC', icon: <ShowerWCIcon /> },
  ];
  return (
    <div className="checkbox-container">
      <h2 className="checkbox-title">Vehicle equipment</h2>
      <hr className="hr" />
      <ul className="checkbox-list">
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
      </ul>
    </div>
  );
};

export default CheckboxList;
