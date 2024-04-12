
const Radio = ({ values }) => {
  const radioOptions = [
    { value: 'van', label: 'Van' },
    { value: 'fully-integrated', label: 'Fully Integrated' },
    { value: 'alcove', label: 'Alcove' },
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
            <label className="radio-label">
              {option.label}
              <input
                className="radio"
                type="radio"
                name="radio"
                value={option.value}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Radio;
