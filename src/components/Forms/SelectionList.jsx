import React, { useState } from 'react';
import Input from './Input';

const SelectionList = ({ title, options, type }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectionChange = value => {
    setSelectedValue(value);
  };

  return (
    <div className={`${type}-container `}>
      <h2 className={`${type}-title`}>{`${title}`}</h2>
      <hr className="hr" />
      <ul className={`${type}-list`}>
        {options.map(option => (
          <li
            className={`${type}-item ${
              selectedValue === option.value ? 'checked' : ''
            }`}
            key={option.label}
            onClick={() => handleSelectionChange(option.value)}
          >
            <Input
              inputProps={{
                icon: option.icon,
                label: option.label,
                value: option.value,
                name: option.name,
                type: type,
                className: `${type}-input`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectionList;
