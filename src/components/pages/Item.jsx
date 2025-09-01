import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import EmblaCarousel from "../Carousel/Carousel";
import AddToCartButton from "../AddToCartButton";
import { useAppInfo } from "../../context/AppContext";
import Reviews from "../Reviews";
const Item = () => {
  const { id } = useParams();
  const itemId = Number(id);
  const history = useHistory();

  const { products } = useAppInfo();
  const productInfo = products.find((product) => product.id === itemId);
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const handleDescriptionVisibility = () => {
    setDescriptionVisibility(!descriptionVisibility);
  };
  try {
    if (productInfo.image) {
      return (
        <div className="item-page">
          <div className="product">
            <div className="image">
              <img src={productInfo.image} />
            </div>
            <div className="info">
              <h1 className="product-title">{productInfo.title}</h1>
              <h3 className="product-category">{productInfo.category}</h3>
              <div className="rating">
                <Reviews props={productInfo.rating} />
              </div>
              <h2 className="product-price">${productInfo.price.toFixed(2)}</h2>
              <AddToCartButton product={productInfo} />

              {descriptionVisibility ? (
                <div className="product-description">
                  <div className="description-header">
                    <h1>Description</h1>
                    <button
                      className="description-show"
                      onClick={() => {
                        handleDescriptionVisibility();
                      }}
                    >
                      -
                    </button>
                  </div>
                  <p>{productInfo.description}</p>
                </div>
              ) : (
                <div className="product-description">
                  <div className="description-header">
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
                </div>
              )}
            </div>
          </div>
          <div className="suggestions">
            <h1>You May Also Like...</h1>
            <div>
              <EmblaCarousel filter={productInfo.category} />
            </div>
          </div>
        </div>
      );
    }
  } catch (error) {
    history.push("/404");
  }
};

export default Item;
