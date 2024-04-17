import { Link } from 'react-router-dom';

const SocialMedia = ({ socialMediaProps }) => {
  return (
    <ul className="social-media-list">
      {socialMediaProps.map(({ id, link, icon }) => (
        <li className="social-media-item" key={id}>
          <Link
            className="social-media-link"
            id={id}
            to={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
