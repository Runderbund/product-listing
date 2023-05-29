import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  productsPerPage,
  setProductsPerPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        First
      </button>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((_, index) => {
        // Array iterator, _ for unused variable. Placeholder since only index is needed.
        const page = index + 1; // Adjusts for 0-indexing
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page} // Grays out the current page button.
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
      <select
        value={productsPerPage}
        onChange={(e) => setProductsPerPage(Number(e.target.value))}
      >
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="100">100 per page</option>
        {/* 100 is effectively all, since there are only 30 products. Not sure how to do unlimited. */}
      </select>
    </div>
  );
};

export default Pagination;
