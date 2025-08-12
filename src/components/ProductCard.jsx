import { addToCart } from "./Cart";

const ProductCard = ({ product }) => {
  product = {
    id: 1,
    title: "Sample Product",
    image: "forgo.jpg",
    price: 19.99,
  };
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
