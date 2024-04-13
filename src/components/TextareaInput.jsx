import React, { useState } from 'react';

const TextareaInput = () => {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value);
  };

  return (
    <textarea
      className="booking-form-input booking-form-textarea"
      name="comment"
      placeholder="Comment"
      title="Enter your comment"
      value={text}
      onChange={handleTextChange}
      rows={4}
      cols={50}
    />
  );
};

export default TextareaInput;
