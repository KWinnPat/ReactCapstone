import AddToCartButton from "./AddToCartButton";
import "../styles/ProductCard.css";

const ProductCard = ({ product }, key) => {
  return (
    <div className="product-card" key={key}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="cart-price">
          <AddToCartButton product={product} />
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
