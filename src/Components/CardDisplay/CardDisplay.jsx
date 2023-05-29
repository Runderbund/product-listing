import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './CardDisplay.module.css';

const CardDisplay = ({ products }) => {
    return (
        <div className={styles.cardDisplay}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CardDisplay;