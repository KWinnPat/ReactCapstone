import Navbar from "./navigation/Navbar";
import CartModal from "./CartModal";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faHeart} />
      <Navbar />
      <CartModal />
    </header>
  );
};

export default Header;
