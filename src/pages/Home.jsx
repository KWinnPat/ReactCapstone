import Collection from "../components/Collection";
import { useEffect } from "react";
import { useAppInfo } from "../hooks/useAppInfo";

import "../styles/Home.css";
const Home = () => {
  const { products } = useAppInfo();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/ff/69/a2/ff69a273bab19ede25ac52a78b0dd3a8.jpg"
          alt="Hero"
        />
      </div>
      <Collection filter="men's clothing" />
      <Collection filter="women's clothing" />
    </div>
  );
};

export default Home;
