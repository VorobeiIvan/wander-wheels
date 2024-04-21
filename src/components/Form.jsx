import Button from './Button';

const Form = ({ className, buttonProps, children }) => {
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Form submitted`);
    const inputs = event.target.getElementsByTagName('input');
    for (let input of inputs) {
      input.value = '';
    }
    const textarea = event.target.getElementsByTagName('textarea')[0];
    if (textarea) {
      textarea.value = '';
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
