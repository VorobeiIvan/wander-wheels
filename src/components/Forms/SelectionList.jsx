import React, { useState } from 'react';
import Input from './Input';

const SelectionList = ({ title, options, type }) => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleRadioChange = value => {
    setSelectedRadio(value);
  };

  const handleCheckboxChange = name => {
    const updatedCheckboxes = [...selectedCheckboxes];

    if (updatedCheckboxes.includes(name)) {
      const index = updatedCheckboxes.indexOf(name);
      updatedCheckboxes.splice(index, 1);
    } else {
      updatedCheckboxes.push(name);
    }

    setSelectedCheckboxes(updatedCheckboxes);
  };

  return (
    <div className={`${type}-container `}>
      <h2 className={`${type}-title`}>{`${title}`}</h2>
      <hr className="hr" />
      <ul className={`${type}-list`}>
        {options.map(option => (
          <li
            className={`${type}-item ${
              (type === 'radio' && selectedRadio === option.value) ||
              (type === 'checkbox' && selectedCheckboxes.includes(option.name))
                ? `checked-${type}`
                : ''
            }`}
            key={option.label}
            onClick={() =>
              type === 'radio'
                ? handleRadioChange(option.value)
                : handleCheckboxChange(option.name)
            }
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
