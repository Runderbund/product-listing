import React from "react";
import styles from "./Footer.module.css";

/**
 * Footer Component.
 *
 * A component that renders a footer section on the page.
 */
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; 312 B.C.E.</p>
    </div>
  );
};

export default Footer;
