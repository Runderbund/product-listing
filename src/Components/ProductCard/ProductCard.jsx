import React from "react";
import styles from "./ProductCard.module.css";
import StarRatings from "react-star-ratings"; //npm install react-star-ratings
import Carousel from "../Carousel/Carousel";

/**
 * A component that displays product details in a card-like format.
 * It includes a carousel for product images, then the title, brand, category, stock, price and rating of each product.
 *
 * @param {object} product - The product object containing details about the product.
 */
const ProductCard = ({ product }) => {
  const { title, brand, category, stock, rating, images, price } = product;

  return (
    <div className={styles.productCard}>
      <Carousel images={images} alt={title} />
      <div className={styles.center}>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{category}</p>
        <p className={stock < 20 ? styles.lowStock : ""}>{stock} in stock</p>
        <p>${price}</p>
        <div className={styles.rating}>
          <StarRatings
            rating={Math.round(rating * 2) / 2} // Rounds to nearest half for star display
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="gold"
          />
          <p>({rating.toFixed(1)})</p>{" "}
          {/* Displays numerical rating to tenth */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
