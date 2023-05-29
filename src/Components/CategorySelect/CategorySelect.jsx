import React from "react";
// import styles from "./CategorySelect.module.css";

const CategorySelect = ({ setCategory }) => {
  const categories = ["All Categories", "smartphones", "laptops",
    "fragrances", "skincare", "groceries","home-decoration",
  ];

  return (
    <div>
      <select
        onChange={(event) => //Targets Category dropdown menu
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
