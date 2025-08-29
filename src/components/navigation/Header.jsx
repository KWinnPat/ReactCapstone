import { Link } from "react-router-dom";
import CartModal from "../CartModal";
import logo from "../../assets/Logo.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowSize from "../../helpers/hooks/useWindowSize";

const Header = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(true);
  const { width, height } = useWindowSize();
  const handleNavbarVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
  };

  useEffect(() => {
    if (window.innerWidth < 431) {
      setNavbarVisibility(false);
    }
  }, []);
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Rosé Logo"></img>
          </Link>
        </div>
        <div className="navbar">
          {navbarVisibility || window.innerWidth > 429 ? (
            <nav>
              <ul className="nav">
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
          ) : (
            <div></div>
          )}
          <div className="hamburger-menu">
            <button
              onClick={() => {
                handleNavbarVisibility();
              }}
            >
              {" "}
              {navbarVisibility ? (
                <FontAwesomeIcon icon={["fas", "xmark"]} />
              ) : (
                <FontAwesomeIcon icon={["fas", "bars"]} />
              )}
            </button>
          </div>
        </div>

        <CartModal />
      </div>
    </header>
  );
};

export default Header;
