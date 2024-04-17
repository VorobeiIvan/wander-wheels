const CheckboxInput = ({ icon, label, isChecked, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      {icon}
      <label className="checkbox-label">
        {label}
        <input
          className="checkbox visible"
          type="checkbox"
          id="checkboxInput"
          checked={isChecked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default CheckboxInput;
