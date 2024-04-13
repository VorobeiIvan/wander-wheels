import Button from './Button';
import DateInput from './DateInput';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import TextareaInput from './TextareaInput';

const BookingForm = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };
  return (
    <form className="booking-form">
      <h2 className="booking-form-title">Book your campervan now</h2>
      <p className="booking-form-text">
        Stay connected! We are always ready to help you.
      </p>
      <NameInput />
      <EmailInput />
      <DateInput />
      <TextareaInput />
      <Button type={'submit'} onClick={handleSubmit}>
        Send
      </Button>
    </form>
  );
};

export default BookingForm;
