import { useEffect, useState } from "react";
import { useAppInfo } from "../hooks/useAppInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartModal() {
  const { cart, setCart } = useAppInfo();
  const [cartVisibility, setCartVisibility] = useState(false);
  const handleCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };
  useEffect(() => {
    handleCartVisibility();
  }, [cart]);

  return (
    <div>
      <button
        onClick={() => {
          handleCartVisibility();
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      {cartVisibility ? (
        <div>
          {Object.entries(cart).map(([key, value]) => (
            <div key={key}>
              <h2>{key.toUpperCase()}</h2>{" "}
              {/* This is the header for each item */}
              <p>Name: {value.name}</p>
              <p>Price: ${value.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default CartModal;
