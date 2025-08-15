import Carousel from "./Carousel/Carousel";
const Collection = (filter) => {
  const title = filter.filter;
  return (
    <div>
      <h1>{title}</h1>
      <Carousel filter={title} />
    </div>
  );
};

export default Collection;
