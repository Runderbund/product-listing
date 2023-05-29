import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

/**
 * A component that renders a header section on the page.
 * It includes a title and a SearchBar component.
 *
 * @param {string} search - The current search query.
 * @param {function} setSearch - Function to update the search query.
 */
const Header = ({ search, setSearch }) => {
  return (
    <div className={styles.header}>
      <h1>
        <span className={styles.titleMain}>We</span>
        <span className={styles.titleSub}>Sell</span>
        <span className={styles.titleMain}>Stuff</span>
      </h1>
      <SearchBar search={search} setSearch={setSearch} />
    </div>
  );
};

export default Header;
