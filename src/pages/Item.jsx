import EmblaCarousel from "../components/Carousel/Carousel";
import { addToCart } from "../components/Cart";

const Item = () => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Item Page</h1>
      <p>Something</p>
      <div className="carousel">
        <EmblaCarousel />
      </div>
      <div className="info">
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div className="suggestions">
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Item;
