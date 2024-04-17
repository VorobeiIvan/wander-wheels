import Button from './Button';

const Form = ({ className, buttonProps, children }) => {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      console.log('Form submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${className}`}>
      {children}
      <Button {...buttonProps} />
    </form>
  );
};

export default Form;
