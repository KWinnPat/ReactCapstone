import { use } from "react";
import EmblaCarousel from "../Carousel/Carousel";
import AddToCartButton from "../AddToCartButton";

const Item = () => {
  const product = {
    id: 1,
    title: "Sample Item",
    image: "item.jpg",
    price: 29.99,
  };
  return (
    <div>
      <h1>Item Page</h1>
      <p>Something</p>
      <div className="carousel">
        <EmblaCarousel />
      </div>
      <div className="info">
        <AddToCartButton product={product} />
      </div>
      <div className="suggestions">
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Item;
