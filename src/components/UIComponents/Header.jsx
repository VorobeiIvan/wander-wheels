import { Link, Outlet } from 'react-router-dom';
import Logo from './Logo';
import Navigation from './Navigation';
import navigationProps from 'utils/navigationProps';
import logoProps from 'utils/logoProps';
import { contactsProps } from 'utils/contactsProps';

const Header = () => {
  return (
    <>
      <header className="header ">
        <Link className="header-logo-link" to="/">
          <Logo logoProps={logoProps} />
        </Link>
        <Navigation navigationProps={navigationProps} />
        <Link className="header-button" to={contactsProps.link}>
          Call us now
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
