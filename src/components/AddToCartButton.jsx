import { useCart } from "../hooks/useCart";
import CartModal from "./CartModal";

function AddToCartButton({ product }) {
  const { handleCartVisibility } = CartModal();
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="add-to-cart-btn"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
