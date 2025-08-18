import Carousel from "./Carousel/Carousel";
import "../styles/Collection.css";
const Collection = (filter) => {
  const title = filter.filter;
  return (
    <div>
      <div className="collection">
        <h1>{title}</h1>
        <Carousel filter={title} />
      </div>
    </div>
  );
};

export default Collection;
