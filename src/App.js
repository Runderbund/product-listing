import React, { useState, useEffect } from "react";
import styles from "./App.module.css"; // Using modular CSS for this project
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CardDisplay from "./Components/CardDisplay/CardDisplay";
import ControlBar from "./Components/ControlBar/ControlBar";

function App() {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        let sortedProducts = [...data.products];
        // console.log(sortedProducts); // Makes sure data is being passed correctly.

        // Filter products by category, if one is selected
        if (category !== "") {
          sortedProducts = sortedProducts.filter(
            (product) => product.category === category
          );
        }

        // Filter products by search query, if one exists
        if (search !== "") {
          sortedProducts = sortedProducts.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        // Filter products by brands, if one or more selected
        if (brands.length > 0 && !brands.includes('Show All Brands')) {
          sortedProducts = sortedProducts.filter((product) =>
            brands.includes(product.brand)
          );
        }

        sortedProducts.sort((a, b) => {
          if (sort === "id") {
            return a.id - b.id;
          } else if (sort === "title") {
            return a.title.localeCompare(b.title);
            // localeCompare allows case-insensitive comparison between two strings (a, b)
            // Returns <0, 0, or >0, depending on whether a is before, equal to, or after b, and assigns index based on that.
          } else if (sort === "rating") {
            return a.rating - b.rating;
          } else if (sort === "brand") {
            return a.brand.localeCompare(b.brand);
          } else if (sort === "price") {
            return a.price - b.price;
          }
        });
        

        if (order === "desc") {
          sortedProducts.reverse();
        }

        setProducts(sortedProducts);

      });
  };

  useEffect(() => {
    fetchData();
  }, [brands, category, sort, order, search, fetchData]);

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  return (
    <div className={styles.app}>
      <Header search={search} setSearch={setSearch}/>
      <main className={styles.main}>
        <ControlBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          order={order}
          setOrder={setOrder}
          brands={brands}
          setBrands={setBrands}
        />
        <CardDisplay products={displayedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
