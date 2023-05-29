import React, { useState, useEffect } from "react";
import styles from "./App.module.css"; // Using modular CSS for this project
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const fetchData = () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        let sortedProducts = [...data.products];
        console.log(sortedProducts); // Makes sure data is being passed correctly.
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
