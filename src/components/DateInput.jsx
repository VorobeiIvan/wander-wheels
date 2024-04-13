import React, { useState } from 'react';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  return (
    <input
      type="date"
      className="booking-form-input"
      placeholder="Booking date"
      required
      title="Enter booking date (2025-01-01)"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DateInput;
