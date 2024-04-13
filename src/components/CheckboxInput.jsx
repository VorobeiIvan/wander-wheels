const CheckboxInput = ({ icon, label, isChecked, onChange }) => {
  return (
    <>
      {icon}
      <label className="checkbox-label">
        {label}
        <input
          className="checkbox"
          type="checkbox"
          id="checkboxInput"
          checked={isChecked}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default CheckboxInput;
