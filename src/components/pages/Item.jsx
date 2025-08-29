import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EmblaCarousel from "../Carousel/Carousel";
import AddToCartButton from "../AddToCartButton";
import { useAppInfo } from "../../context/AppContext";

const Item = () => {
  const { id } = useParams();
  const itemId = Number(id);
  const products = useAppInfo().products;
  const [productInfo, setProductInfo] = useState(
    products.find((product) => product.id === itemId)
  );
  useEffect(() => {
    setProductInfo(products.find((product) => product.id === itemId));
  });
  return (
    <div>
      <h1>Item Page</h1>
      <p>Something</p>
      <div className="image">
        <img src={productInfo.image} />
      </div>
      <div className="info">
        <h1 className="product-title">{productInfo.title}</h1>
        <h3 className="product-category">{productInfo.category}</h3>
        <div className="rating"></div>
        <h2 className="product-price">${productInfo.price.Fixed(2)}</h2>
        <AddToCartButton />
      </div>
      <div className="suggestions">
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Item;
