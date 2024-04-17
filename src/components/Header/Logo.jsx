const Logo = ({ icon, text }) => {
  return (
    <div className="logo">
      {icon}
      <p className="logo-text">{text}</p>
    </div>
  );
};
export default Logo;
