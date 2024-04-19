import {
  dateInputProps,
  emailInputProps,
  nameInputProps,
} from 'utils/inputProps';

import Input from './Input';
import TextareaInput from './TextareaInput';
import Form from './Form';
import { FormButtonProps } from 'utils/buttonProps';

const BookingForm = () => {
  return (
    <Form className="booking-form" buttonProps={FormButtonProps}>
      <h2 className="booking-form-title">Book your campervan now</h2>
      <p className="booking-form-text">
        Stay connected! We are always ready to help you.
      </p>

      <Input inputProps={nameInputProps} />
      <Input inputProps={emailInputProps} />
      <Input inputProps={dateInputProps} />
      <TextareaInput />
    </Form>
  );
};

export default BookingForm;
