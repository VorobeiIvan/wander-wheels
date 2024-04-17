const Logo = ({ logoProps }) => {
  const { icon, text } = logoProps;
  return (
    <div className="logo">
      {icon}
      <p className="logo-text">{text}</p>
    </div>
  );
};
export default Logo;
