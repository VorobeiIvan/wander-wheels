import Contacts from './Contacts';
import Logo from '../Header/Logo';
import Navigation from '../Header/Navigation';
import SocialMedia from './SocialMedia';
import socialMediaProps from 'utils/socialMediaProps';
import logoProps from 'utils/logoProps';
import navigationProps from 'utils/navigationProps';

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="top-footer">
          <Contacts />
          <div className="footer-logo-social">
            <Logo logoProps={logoProps} />
            <SocialMedia socialMediaProps={socialMediaProps} />
          </div>
          <Navigation navigationProps={navigationProps} />
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
