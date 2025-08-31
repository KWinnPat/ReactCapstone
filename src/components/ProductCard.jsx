import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";

const ProductCard = ({ product }, key) => {
  return (
    <div className="product-card" key={key}>
      <div className="product-image">
        <Link to={`/item/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-info">
        <Link to={`/item/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <div className="cart-price">
          <AddToCartButton product={product} />
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
