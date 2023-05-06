import logo from '../../assets/logo-footer.png';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
