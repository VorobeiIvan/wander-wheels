const Button = ({ onClick, children, type, className }) => {
  return (
    <button onClick={onClick} type={type} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
