import React, { useState } from 'react';
import { MapPinIcon } from './Icons';

const LocationInput = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <MapPinIcon />
      <label className="input-label">
        Enter your location:
        <input
          className="input-location input"
          type="text"
          id="locationInput"
          placeholder="City"
          value={location}
          onChange={handleLocationChange}
        />
      </label>
    </div>
  );
};

export default LocationInput;
