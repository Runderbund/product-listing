import React from "react";
import styles from "./SearchBar.module.css";

/**
 * This component is used for inputting search queries.
 * It provides a search input field that updates the search state in the parent component.
 *
 * @param {string} search - The search query.
 * @param {Function} setSearch - Function to update the search query.
 */
const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    // Targets where the event happens. Here, the search bar
    setSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search products..."
        value={search} // Starts as an empty string ""
        onChange={handleSearch} //Uses the updated value from above
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
