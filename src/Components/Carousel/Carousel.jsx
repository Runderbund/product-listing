import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    // Checks whether the current image index is 0, and if so, loops back to the last image in the array. Otherwise, sets it to the previous image index.
  }

  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  }

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevImage}>&lt;</button> {/* Sets left arrow */}
      <img src={images[currentImageIndex]} alt="product" />
      <button onClick={handleNextImage}>&gt;</button>
    </div>
  );
};

export default Carousel;
