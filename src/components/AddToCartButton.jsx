import { useCart } from "../helpers/hooks/useCart";
import { useState } from "react";
import QuantityController from "./QuantityController";

function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  return (
    <div className="add-to-cart">
      <button
        onClick={() => {
          addToCart(product, quantity);
        }}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
      <QuantityController setQuantity={setQuantity} quantity={quantity} />
    </div>
  );
}

export default AddToCartButton;
