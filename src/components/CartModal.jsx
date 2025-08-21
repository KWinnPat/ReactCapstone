import { useEffect, useState } from "react";
import { useAppInfo } from "../hooks/useAppInfo";
import { useCart } from "../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/CartModal.css";
import QuantityController from "./QuantityController";

function CartModal() {
  const { removeFromCart, clearCart } = useCart();
  const { cart, setCart } = useAppInfo();
  const [cartVisibility, setCartVisibility] = useState(false);
  const [total, setTotal] = useState(0);
  const handleCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };
  const handleTotal = () => {
    let total = 0;
    cart.forEach((obj) => {
      total += obj.price * obj.quantity;
    });
    setTotal(total.toFixed(2));
  };
  useEffect(() => {
    handleTotal(cart);
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
        <div className="behind-modal">
          <div className="cart-modal">
            <div className="cart-header">
              <button
                onClick={() => {
                  handleCartVisibility();
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <h1>Cart</h1>
              <h2>SubTotal</h2>
            </div>
            <div className="cart-items">
              {Object.entries(cart).map(([key, value]) => (
                <div className="item" key={key}>
                  <button
                    onClick={() => {
                      removeFromCart(value.id);
                      console.log(cart);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <h2>{value.title}</h2>
                  <div className="price-info">
                    <p>${value.price}</p>
                    <QuantityController
                      itemId={value.id}
                      initialQuantity={value.quantity}
                    />
                  </div>
                  <p>${(value.price * value.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="total">
                <h1>Total:</h1>
                <h1>${total}</h1>
              </div>
              <div className="checkout">
                <button
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default CartModal;
