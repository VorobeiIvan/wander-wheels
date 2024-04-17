import RadioList from './RadioList';

const RadioButtons = () => {
  return (
    <div className="radio-container">
      <h2 className="radio-title">Vehicle type</h2>
      <hr className="hr" />
      <ul className="radio-list">
        <RadioList />
      </ul>
    </div>
  );
};

export default RadioButtons;
