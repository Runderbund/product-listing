import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
import styles from './Header.module.css';


const Header = () => {
  return (
    <div className={styles.header}>
      <h1><span className={styles.titleMain}>We</span><span className={styles.titleSub}>Sell</span><span className={styles.titleMain}>Stuff</span></h1>
      {/* Add Search Bar */}
    </div>
  );
};


export default Header;
