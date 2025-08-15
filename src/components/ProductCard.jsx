import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.title}</h3>
      <AddToCartButton product={product} />
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
