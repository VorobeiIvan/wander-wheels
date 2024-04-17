import { NavLink } from 'react-router-dom';
const Navigation = ({ path, name }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <NavLink className="navigation-link" to={path}>
            {name}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
