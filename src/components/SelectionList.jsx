import React, { useState } from 'react';
import Input from './Input';

const SelectionList = ({ title, options, type }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectionChange = value => {
    setSelectedValue(value);
  };

  return (
    <div className="selection-container">
      <h2 className="selection-title">{title}</h2>
      <hr className="hr" />
      <ul className="selection-list">
        {options.map(option => (
          <li
            className={`${type}-item ${
              selectedValue === option.value ? 'checked' : ''
            }`}
            key={option.label}
            onClick={() => handleSelectionChange(option.value)}
          >
            <Input
              icon={option.icon}
              label={option.label}
              value={option.value}
              name={option.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectionList;
