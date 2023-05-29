import React from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import styles from "./ControlBar.module.css";
import BrandSelect from "../BrandSelect/BrandSelect";
import SortToggle from "../SortToggle/SortToggle";

/**
 * A component that holds the dropdown menus and buttons to filter and sort.
 * Contains CategorySelect, SortToggle, and BrandSelect.
 *
 * @param {string} category - Currently selected category.
 * @param {Function} setCategory - Function to update the category state.
 * @param {string} sort - The sort field.
 * @param {Function} setSort - Function to update the sort state.
 * @param {string} order - The order of sorting.
 * @param {Function} setOrder - Function to update the order state.
 * @param {Array} brands - Array of selected brands.
 * @param {Function} setBrands - Function to update the brands state.
 */
const ControlBar = ({
  category,
  setCategory,
  sort,
  setSort,
  order,
  setOrder,
  brands,
  setBrands,
}) => {
  return (
    <div className={styles.controlBar}>
      <div className={styles.controlBar_item}>
        <CategorySelect category={category} setCategory={setCategory} />
      </div>
      <div className={styles.controlBar_item}>
        <SortToggle
          sort={sort}
          setSort={setSort}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <div className={styles.controlBar_item}>
        <BrandSelect brands={brands} setBrands={setBrands} />
      </div>
    </div>
  );
};

export default ControlBar;
