// NavLink est une version spéciale du composant Link qui peut être utilisée pour ajouter des styles ou des classes à l'élément de lien actif.
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        {/* On crée un NavLink qui pointe vers la racine du site ("/"). Si le chemin actuel correspond à la propriété "to", alors NavLink ajoute automatiquement la classe "active" à l'élément, et la fonction fléchée attribue la classe 'nav-active' si le lien est actif. */}
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
