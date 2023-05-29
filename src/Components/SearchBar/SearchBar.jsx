import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({search, setSearch}) => { // Passed to Header.jsx
  const handleSearch = event => { // Targets where the event happens. Here, the search bar
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

}

export default SearchBar;
