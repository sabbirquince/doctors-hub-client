import React from "react";

import "./Header.module.css";
import Introduction from "./Introduction/Introduction";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Introduction />
    </div>
  );
};

export default Header;
