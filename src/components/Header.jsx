import Navbar from "./navigation/Navbar";
import CartModal from "./CartModal";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="header">
        <button className="heart-button">
          <FontAwesomeIcon icon={faHeart} />{" "}
        </button>
        <Navbar />
        <CartModal />
      </div>
    </header>
  );
};

export default Header;
