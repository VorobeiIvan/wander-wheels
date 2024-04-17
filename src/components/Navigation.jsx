import { NavLink } from 'react-router-dom';
const Navigation = ({ navigationProps }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {navigationProps.map(({ path, name }) => (
          <li className="navigation-item" key={name}>
            <NavLink className="navigation-link" to={path}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
