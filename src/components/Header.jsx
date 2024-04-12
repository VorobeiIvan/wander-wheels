import '../styles/index.css';
import { Link, Outlet } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
      <header className="header ">
        <Link className="header-logo-link" to="/">
          <Logo />
        </Link>
        <Navigation />
        <Link className="header-button" to="tel:+15555555555">
          Call us now
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
