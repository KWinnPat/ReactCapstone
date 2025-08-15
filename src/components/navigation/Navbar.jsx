import RouteController from "./RouteController";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="products-link">
          <Link to="/products">Shop</Link>
        </li>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="Rosé Logo"></img>
          </Link>
        </li>
        <li className="about-link">
          <Link to="/about">About</Link>
        </li>
        <li className="contact-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
