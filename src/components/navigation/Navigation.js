import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
