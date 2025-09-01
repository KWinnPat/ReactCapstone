import React, { useState, useEffect } from "react";
import { useCart } from "../helpers/hooks/useCart.jsx";

const QuantityController = ({
  mode = "page",
  itemId,
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 99,
  setQuantity: propSetQuantity,
  quantity: propQuantity,
}) => {
  const [cartQuantity, setCartQuantity] = useState(initialQuantity);
  const { updateQuantity } = useCart();

  const quantity = mode === "cart" ? cartQuantity : propQuantity;
  const setQuantity = mode === "cart" ? setCartQuantity : propSetQuantity;

  const onQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  const changeQuantity = (operator) => {
    let newQuantity = 0;
    if (operator === "+") {
      newQuantity = quantity + 1;
    }
    if (operator === "-") {
      newQuantity = quantity - 1;
    }
    setQuantity(newQuantity);
    if (mode === "cart") {
      onQuantityChange(itemId, newQuantity);
    }
  };
  return (
    <div className="quantity-controller">
      <button
        className="quantity-button"
        onClick={() => changeQuantity("-")}
        disabled={quantity <= minQuantity}
      >
        −
      </button>

      <div className="current-quantity">
        <h6>{quantity}</h6>
      </div>

      <button
        className="quantity-button"
        onClick={() => changeQuantity("+")}
        disabled={quantity >= maxQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityController;
