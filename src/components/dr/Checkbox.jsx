const Checkbox = ({ values }) => {
  const checkboxOptions = [
    { name: 'ac', label: 'AC' },
    { name: 'automatic', label: 'Automatic' },
    { name: 'kitchen', label: 'Kitchen' },
    { name: 'tv', label: 'TV' },
    { name: 'shower-wc', label: 'Shower/WC' },
  ];

  return (
    <div className="checkbox-wrapper">
      <h2 className="checkbox-title">Vehicle equipment</h2>
      <hr className="hr" />
      <ul className="checkbox-list">
        {checkboxOptions.map(option => (
          <li
            className={`checkbox-item ${values[option.name] && 'checked'}`}
            key={option.name}
          >
            <label className="checkbox-label">
              {option.label}
              <input className="checkbox" type="checkbox" name={option.name} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkbox;
