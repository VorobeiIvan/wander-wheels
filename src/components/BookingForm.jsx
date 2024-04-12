const BookingForm = () => {
  return (
    <form className="booking-form">
      <h2 className="booking-form-title">Book your campervan now</h2>
      <p className="booking-form-text">
        Stay connected! We are always ready to help you.
      </p>
      <input
        className="booking-form-input"
        type="text"
        placeholder="Name"
        required
        title="Enter your name (Obi-Wan Kenobi)"
      />
      <input
        className="booking-form-input"
        type="text"
        placeholder="Email"
        required
        title="Enter your email ( Obi-Wan_Kenobi@example.com)"
      />
      <input
        className="booking-form-input"
        type="select"
        placeholder="Booking date"
        required
        title="Enter booking date (2025-01-01)"
      />
      <textarea
        className="booking-form-input booking-form-textarea"
        name="comment"
        placeholder="Comment"
        title="Enter your comment"
      />
      <button className="booking-form-button button" type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
