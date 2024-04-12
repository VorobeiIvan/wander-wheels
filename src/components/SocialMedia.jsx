import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons';
import '../styles/index.css';

const SocialMedia = () => {
  return (
    <ul className="social-media-list">
      <li className="social-media-item">
        <Link
          className="social-media-link"
          to={'https://www.facebook.com/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </Link>
      </li>
      <li className="social-media-item">
        <Link
          className="social-media-link"
          to="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </Link>
      </li>
      <li className="social-media-item">
        <Link
          className="social-media-link"
          to="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
