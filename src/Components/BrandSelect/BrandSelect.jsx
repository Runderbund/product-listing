import React from "react";
import styles from "./BrandSelect.module.css";

/**
 * A component that allows the user to filter products by brand.
 *
 * @param {function} setBrands - A function to update the brands state in the parent component.
 */
const BrandSelect = ({ setBrands }) => {
  // List of brands - should ideally pull from data.json, instead of being hard-coded.
  const brands = [
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
    "Golden",
  ];

  /**
   * Handles brand selection.
   *
   * @param {event} event - The select event that triggered the function.
   */
  const handleBrandSelect = (event) => {
    // Convert HTMLCollection to an array to allow mapping.
    const selectedOptions = Array.from(event.target.options);
    // Show All + brands. Array.from() converts HTMLCollection to an array to allow mapping.
    if (
      selectedOptions.some(
        (option) => option.selected && option.value === "Show All Brands"
      )
    ) {
      // If "Show All Brands" is selected, deselect other options to avoid confusion as to why it won't filter.
      selectedOptions.forEach(
        (option) => (option.selected = option.value === "Show All Brands")
      );
    }
    // If "Show All Brands" is not selected, sets an array of all selected brands.
    setBrands(
      selectedOptions
        .filter((option) => option.selected)
        .map((option) => option.value)
    );
  };

  return (
    <div className={styles.brandSelect}>
      <select onChange={handleBrandSelect} multiple>
        {/* "multiple" allows ctrl-click to select multiple options */}
        <option>Show All Brands</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <div className={styles.instructions}>
        Hold ctrl to select multiple brands
      </div>
    </div>
  );
};

export default BrandSelect;
