import { NavLink } from 'react-router-dom';
import '../styles/index.css';
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <NavLink className="navigation-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink className="navigation-link" to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink className="navigation-link" to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
