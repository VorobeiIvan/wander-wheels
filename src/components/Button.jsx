const Button = ({ onClick, children, type }) => {
  return (
    <button onClick={onClick} type={type} className="button">
      {children}
    </button>
  );
};

export default Button;
