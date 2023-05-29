import React from 'react';
import CategorySelect from '../CategorySelect/CategorySelect';
import styles from './ControlBar.module.css';
import BrandSelect from '../BrandSelect/BrandSelect';


const ControlBar = ({ category, setCategory, brands, setBrands }) => {
  return (
    <div className={styles.controlBar}>
      <div className={styles.controlBar_item}>
        <CategorySelect category={category} setCategory={setCategory} />
      </div>
      <div className={styles.controlBar_item}>
        <BrandSelect brands={brands} setBrands={setBrands} />
      </div>
    </div>
  );
}



export default ControlBar;