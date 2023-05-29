import React from 'react';
import styles from './BrandSelect.module.css';

const BrandSelect = ({ setBrands }) => {
  const brands = ["Apple", "Samsung", "OPPO", "Huawei", "Microsoft Surface", "Infinix", "HP Pavilion", "Impression of Acqua Di Gio", "Royal_Mirage", "Fog Scent Xpressio", "Al Munakh", "Lord - Al-Rehab", "L'Oreal Paris", "Hemani Tea", "Dermive", "ROREC White Rice", "Fair & Clear", "Saaf & Khaas", "Bake Parlor Big", "Baking Food Items", "fauji", "Dry Rose", "Boho Decor", "Flying Wooden", "LED Lights", "luxury palace", "Golden"];
  // Probably a way of drawing this directly from data.json, instead of manually hard-coding it.

  const handleBrandSelect = (event) => {
    const selectedOptions = Array.from(event.target.options);
    // Show All + brands. Array.from() converts HTMLCollection to an array to allow mapping.
    if (selectedOptions.some(option => option.selected && option.value === 'Show All Brands')) {
      selectedOptions.forEach(option => option.selected = (option.value === 'Show All Brands'));
    }
    // Checks if "Show All Brands" is selected
    // If so, checks each selected option and sets it to false if it's not "Show All Brands"
    // Effectively disallows selecting "Show All Brands" and any other brand at the same time, to avoid confusion as to why it won't filter.
    setBrands(selectedOptions.filter(option => option.selected).map(option => option.value));
    // If "Show All Brands" is not selected, sets an array of all selected brands. 
  };

  return (
    <div className={styles.brandSelect}>
      <select onChange={handleBrandSelect} multiple> {/* "multiple" allows ctrl-click to select multiple options */}
        <option>Show All Brands</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>
      <div className={styles.instructions}>Hold ctrl to select multiple brands</div>
    </div>
  );
};

export default BrandSelect;
