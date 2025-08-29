import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="business-info">
        <div className="logo-slogan">
          <img src={logo} alt="Rosé Logo" />
          <h2 className="slogan">L'Élégance Naturelle.</h2>
        </div>
        <div className="contact-info">
          <div className="mailing-address">
            <h1>Rosé la mode SARL</h1>
            <p>20 Rue de la Roquette</p>
            <p>75011 Paris</p>
            <p>France</p>
          </div>
          <div className="phone-number">
            <p>01 58 30 90 33</p>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <h1>Links</h1>
        <nav>
          <ul className="navbar">
            <li className="home-link">
              <Link to="/">Home</Link>
            </li>
            <li className="products-link">
              <Link to="/products">Shop</Link>
            </li>
            <li className="about-link">
              <Link to="/about">About</Link>
            </li>
            <li className="contact-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        <h5>© 2025 Kai Winn - All Rights Reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
