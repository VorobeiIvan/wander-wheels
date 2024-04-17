import { Link } from 'react-router-dom';
import {
  contactsProps as contacts,
  addressProps as address,
} from 'utils/contactsProps';

const Contacts = ({ title, link, linkText }) => {
  return (
    <div className="contacts" id="contacts">
      <ul className="contacts-list">
        {contacts.map(item => (
          <li className="contacts-item">
            <p className="contact-title">{title}:</p>
            <Link className="contact-link" to={link}>
              {linkText}
            </Link>
          </li>
        ))}
      </ul>

      <address className="address">
        <p className="contact-title">{address.title}:</p>
        <Link
          className="contact-link"
          to={address.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {address.linkText}
        </Link>
      </address>
    </div>
  );
};

export default Contacts;
