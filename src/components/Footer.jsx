import "../styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
