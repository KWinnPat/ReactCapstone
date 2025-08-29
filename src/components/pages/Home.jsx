import Collection from "../Collection";
import { useEffect } from "react";
import { useAppInfo } from "../../context/AppContext";

const Home = () => {
  const { products } = useAppInfo();

  return (
    <div>
      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/ff/69/a2/ff69a273bab19ede25ac52a78b0dd3a8.jpg"
          alt="Hero"
        />
      </div>
      <Collection filter="men's clothing" />
      <div className="background-img">
        <h1>L'Élégance Naturelle.</h1>
      </div>
      <Collection filter="women's clothing" />
    </div>
  );
};

export default Home;
