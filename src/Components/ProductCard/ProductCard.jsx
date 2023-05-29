import React from "react";
import styles from "./ProductCard.module.css";
import StarRatings from 'react-star-ratings'; //npm install --save react-star-ratings

const ProductCard = ({ product }) => {
  const { title, brand, category, stock, rating, images, price } = product;
  // add description for hover

  return (
    <div className={styles.productCard}>
      <img src={images[0]} alt={title} />
      {/* Takes first image. Replace with Carousel. */}
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
          <p>({rating.toFixed(1)})</p> {/* Displays numerical rating to tenth */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
