import Logo from './../../assets/logo.png';
import Navigation from '../navigation/Navigation';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="Logo Kasa" />
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
