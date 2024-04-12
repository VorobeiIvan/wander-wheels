import { Link } from 'react-router-dom';
import '../styles/index.css';

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <ul className="contacts-list">
        <li className="contacts-item">
          <p className="contact-title">Phone:</p>
          <Link className="contact-link" to={'tel:+15555555555'}>
            +1 (555) 555-5555
          </Link>
        </li>
        <li className="contacts-item">
          <p className="contact-title">Email:</p>
          <Link className="contact-link" to={'mailto:5yqKX@example.com'}>
            5yqKX@example.com
          </Link>
        </li>
      </ul>

      <address className="address">
        <p className="contact-title">Address:</p>
        <Link
          className="contact-link"
          to="https://www.google.com/maps/place/123+Main+St,+Anytown,+USA"
          target="_blank"
          rel="noopener noreferrer"
        >
          123 Main St, Anytown, USA
        </Link>
      </address>
    </div>
  );
};

export default Contacts;
