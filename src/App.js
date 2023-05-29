import React, { useState, useEffect } from "react";
import styles from "./App.module.css"; // Using modular CSS for this project
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CardDisplay from "./Components/CardDisplay/CardDisplay";

function App() {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        let sortedProducts = [...data.products];
        // console.log(sortedProducts); // Makes sure data is being passed correctly.
        setProducts(sortedProducts);
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
        <h1>Stuff</h1>
        <CardDisplay products={displayedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
