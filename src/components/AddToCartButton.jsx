import { useCart } from "../helpers/hooks/useCart";
import CartModal from "./CartModal";

function AddToCartButton({ product, quantity }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product, quantity);
      }}
      className="add-to-cart-btn"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
