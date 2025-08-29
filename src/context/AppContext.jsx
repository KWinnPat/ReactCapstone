import { createContext } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (products.length > 0) return;
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider value={{ cart, setCart, products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppInfo() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppInfo must be used within an AppProvider");
  }
  return context;
}
