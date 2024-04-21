import Button from './Button';

const Form = ({ className, buttonProps, children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={`form ${className}`}>
      {children}
      <Button {...buttonProps} />
    </form>
  );
};

export default Form;
