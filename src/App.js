/**
 * Main application component. This component handles product data fetching, 
 * manages state for the controls and display of product data (filtering/sorting), 
 * and arranges the overall layout of the application.
 */

import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CardDisplay from "./Components/CardDisplay/CardDisplay";
import ControlBar from "./Components/ControlBar/ControlBar";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  // Initialize states for various elements and controls
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState("name");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(10);

  /**
   * Fetches product data from a JSON file, performs filtering based on user selection,
   * sorts the products as per the selected criteria, and updates the product and total pages state.
   */
  const fetchData = () => {
    // Fetch data
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        let sortedProducts = [...data.products];

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

        // Sort products
        sortedProducts.sort((a, b) => {
          if (sort === "id") { // "Default (ID)" in the sort dropdown menu
            return a.id - b.id;
            // Returns <0, 0, or >0, depending on whether a is before, equal to, or after b, and assigns index based on that.
          } else if (sort === "title") { // "Product Name"
            return a.title.localeCompare(b.title);
            // localeCompare allows case-insensitive comparison between two strings (a, b)
          } else if (sort === "brand") { // "Brand Name"
            return a.brand.localeCompare(b.brand);
          } else if (sort === "price") {
            return a.price - b.price;
          } else if (sort === "rating") {
            return a.rating - b.rating;
          } 
        });
        
        // Reverse the order, if SortToggle has set order to "desc"
        if (order === "desc") {
          sortedProducts.reverse();
        }
        
        // After sorting and filtering, update the total number of pages
        setTotalPages(Math.ceil(sortedProducts.length / productsPerPage));
        setProducts(sortedProducts);
      });
  };

  /**
   * Effect hook that calls fetchData() whenever any of the relevant states in the array change.
   */
  useEffect(() => {
    fetchData();
  }, [brands, category, sort, order, search, fetchData]);

  /**
   * Effect hook that updates the displayed products based on the current page and the number of products per page.
   */
  useEffect(() => {
    const start = (currentPage - 1) * productsPerPage;
    setDisplayedProducts(products.slice(start, start + productsPerPage));
  }, [products, currentPage, productsPerPage]);

  // Renders components
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
      />
      <Footer />
    </div>
  );
}

export default App;

//TODO: Make number of cards vary between 2 and 5 depending on screen width
//TODO: Line up card heights with 1 and 2 line names.
//TODO: Choose a better image frame for the cards.
