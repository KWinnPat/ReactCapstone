import { use } from "react";
import ProductCard from "../components/ProductCard";
import { useFilterSortProducts } from "../hooks/filterSortProducts";
import { useState, useEffect } from "react";

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
      <div className="sort-filter">
        <h2>Sort & Filter</h2>
        <div className="sort-controls">
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
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Products</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>
      </div>
      <h1>Products</h1>
      <p>Something</p>
      {Object.entries(filteredSortedProducts).map(([key, value]) => (
        <div className="embla__slide" key={key}>
          <div className="embla__slide__number">
            <ProductCard product={value} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
