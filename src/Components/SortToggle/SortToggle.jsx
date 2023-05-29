import React from "react";
import styles from './SortToggle.module.css';

const SortToggle = ({ sort, setSort, order, setOrder }) => {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = () => {
    setOrder(order === "asc" ? "desc" : "asc");
    // Checks whether the value or order is set to ascending, and sets it to descending. Otherwise, it sets it to ascending.
  };

  return (
    <div className={styles.sortToggle}>
      <select value={sort} onChange={handleSortChange}>
        <option value="title">Product Name</option>
        <option value="brand">Brand Name</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <button onClick={handleOrderChange}>Reverse Sort</button>
    </div>
  );
};

export default SortToggle;
