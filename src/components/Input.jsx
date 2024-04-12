import { MapPinIcon } from './Icons';

const Input = () => {
  return (
    <label className="input-label">
      Location
      <MapPinIcon />
      <input
        className="input"
        type="text"
        placeholder="City"
        pattern="/^([a-zA-Z]+\s)*[a-zA-Z]+$/"
        required
        title="Please enter a valid city"
        name="location"
      />
    </label>
  );
};

export default Input;
