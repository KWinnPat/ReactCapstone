import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import EmblaCarousel from "../Carousel/Carousel";
import AddToCartButton from "../AddToCartButton";
import { useAppInfo } from "../../context/AppContext";
import QuantityController from "../QuantityController";

const Item = () => {
  const { id } = useParams();
  const itemId = Number(id);
  const history = useHistory();

  const { products } = useAppInfo();
  const productInfo = products.find((product) => product.id === itemId);
  const [quantity, setQuantity] = useState(1);
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const handleDescriptionVisibility = () => {
    setDescriptionVisibility(!descriptionVisibility);
  };
  try {
    if (productInfo.image) {
      return (
        <div>
          <div className="image">
            <img src={productInfo.image} />
          </div>
          <div className="info">
            <h1 className="product-title">{productInfo.title}</h1>
            <h3 className="product-category">{productInfo.category}</h3>
            <div className="rating"></div>
            <h2 className="product-price">${productInfo.price.toFixed(2)}</h2>
            <AddToCartButton product={productInfo} quantity={quantity} />
            <QuantityController setQuantity={setQuantity} quantity={quantity} />

            {descriptionVisibility ? (
              <div className="product-description">
                <h1>Description</h1>
                <button
                  className="description-show"
                  onClick={() => {
                    handleDescriptionVisibility();
                  }}
                >
                  -
                </button>
                <p>{productInfo.description}</p>
              </div>
            ) : (
              <div className="product-description">
                <h1>Description</h1>
                <button
                  className="description-show"
                  onClick={() => {
                    handleDescriptionVisibility();
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>

          <div className="suggestions">
            <EmblaCarousel />
          </div>
        </div>
      );
    }
  } catch (error) {
    history.push("/404");
  }
};

export default Item;
