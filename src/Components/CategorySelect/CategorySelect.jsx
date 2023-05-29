import React from "react";

/**
 * CategorySelect Component.
 *
 * A component that provides a dropdown menu for selecting a product category. 
 * The state of the selected category is updated in the parent component (ControlBar) using 
 * the passed setCategory function.
 *
 * @param {Function} setCategory - Function to update the category state in the parent component.
 */
const CategorySelect = ({ setCategory }) => {
  const categories = [
    "All Categories",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  return (
    <div>
      <select
        onChange={(
          event // Targets Category dropdown menu
        ) =>
          setCategory(
            event.target.value === "All Categories" ? "" : event.target.value
            // Default of "All Categories", or passes the specific category chosen
          )
        }
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
