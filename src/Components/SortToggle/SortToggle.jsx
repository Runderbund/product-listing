import React from "react";
import styles from "./SortToggle.module.css";

/**
 * SortToggle Component.
 *
 * A component that provides a dropdown for selecting the sort criterion and
 * a button for toggling the sort order.
 * The selected sort criterion and order are maintained in the parent component's state.
 *
 * @param {string} sort - The selected sort criterion.
 * @param {Function} setSort - Function to update the selected sort criterion.
 * @param {string} order - The selected sort order ("asc" or "desc").
 * @param {Function} setOrder - Function to update the selected sort order.
 */
const SortToggle = ({ sort, setSort, order, setOrder }) => {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = () => {
    setOrder(order === "asc" ? "desc" : "asc");
    // Checks whether the value of order is set to ascending, and if so, sets it to descending. Otherwise, sets it to ascending.
  };

  return (
    <div className={styles.sortToggle}>
      <select value={sort} onChange={handleSortChange}>
        <option value="id">Default (ID)</option>
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
