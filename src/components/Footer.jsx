import Contacts from './Contacts';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import '../styles/index.css';

const Footer = () => {
  return (
    <>
      {/* <Outlet /> */}
      <footer className="footer ">
        <div className="top-footer">
          <Contacts />
          <div className="footer-logo-social">
            <Logo />
            <SocialMedia />
          </div>
          <Navigation />
        </div>

        <div className="bottom-footer">
          <p className="footer-text">
            © April 2024. All rights reserved.Test task by: @IvanVorobei
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
