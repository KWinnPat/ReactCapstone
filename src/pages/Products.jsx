import { use } from "react";
import ProductCard from "../components/ProductCard";
import { useFilterSortProducts } from "../hooks/filterSortProducts";
import { useState, useEffect } from "react";
import "../styles/Products.css";

const Products = () => {
  const [filter, setFilter] = useState(""); // Assuming 'all' is the default filter
  const [sortCategory, setSortCategory] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const { filteredSortedProducts } = useFilterSortProducts(
    filter,
    sortCategory,
    sortDirection
  );
  return (
    <div>
      <div className="products-page">
        <div className="sort-filter">
          <h2>Sort & Filter</h2>
          <div className="sort-controls">
            <div>
              <label>
                Sort by:
                <select
                  value={sortCategory}
                  onChange={(e) => {
                    setSortCategory(e.target.value);
                  }}
                >
                  <option value="id">ID</option>
                  <option value="title">Title</option>
                  <option value="price">Price</option>
                  <option value="category">Category</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Order:
                <select
                  value={sortDirection}
                  onChange={(e) => setSortDirection(e.target.value)}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </label>
            </div>
            <div className="filter-controls">
              <label>
                {" "}
                Filter:
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="">All Products</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelry</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="cards">
            {Object.entries(filteredSortedProducts).map(([key, value]) => (
              <ProductCard product={value} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
