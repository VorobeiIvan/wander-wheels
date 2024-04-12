import '../styles/index.css';
import Icons from './Icons';


const Logo = (id) => {
  return (
    <div className="logo">
      <Icons id={id} />
      <p className="logo-text">WanderWheels</p>
    </div>
  );
};
export default Logo;
