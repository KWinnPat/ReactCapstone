import React, { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart.jsx";
import "../styles/QuantityController.css";

const QuantityController = ({
  itemId,
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 99,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { updateQuantity } = useCart();

  // Update internal state if initialQuantity changes from parent
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const onQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };
  const handleIncrement = () => {
    const newQuantity = Math.min(quantity + 1, maxQuantity);
    if (newQuantity !== quantity) {
      setQuantity(newQuantity);
      onQuantityChange?.(itemId, newQuantity);
    }
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, minQuantity);
    if (newQuantity !== quantity) {
      setQuantity(newQuantity);
      onQuantityChange?.(itemId, newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow empty input for better UX
    if (value === "") {
      setQuantity("");
      return;
    }

    const numValue = parseInt(value, 10);

    // Validate input is a number and within bounds
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(
        Math.max(numValue, minQuantity),
        maxQuantity
      );
      setQuantity(clampedValue);
      onQuantityChange?.(itemId, clampedValue);
    }
  };

  const handleBlur = () => {
    // If input is empty or invalid, reset to minQuantity
    if (quantity === "" || quantity < minQuantity) {
      const resetValue = minQuantity;
      setQuantity(resetValue);
      onQuantityChange?.(itemId, resetValue);
    }
  };

  return (
    <div className="quantity-controller">
      <button
        type="button"
        className="quantity-btn quantity-btn--decrement"
        onClick={handleDecrement}
        disabled={quantity <= minQuantity}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <input
        type="text"
        className="quantity-input"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleBlur}
        min={minQuantity}
        max={maxQuantity}
        aria-label={`Quantity for item ${itemId}`}
      />

      <button
        type="button"
        className="quantity-btn quantity-btn--increment"
        onClick={handleIncrement}
        disabled={quantity >= maxQuantity}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityController;
