import styles from "./navbar.module.css";
import React from "react";
import logo from "./Watch.png";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className={`row ${styles.navbar}`}>
      <div className={`${styles.flex} col-2`}>
        <img
          className={`${styles.logo} img-fluid`}
          src={logo}
          alt="website logo"
        />
      </div>
      <div className={`${styles.flex} ${styles.pointer} col-1`}>Home</div>
      <div className={`${styles.flex} ${styles.pointer} col-1`}>Series</div>
      <div className={`${styles.flex} ${styles.pointer} col-1`}>Movies</div>
      <div className="col"></div>
      <div className={`${styles.flex} col-1`}>
        <Search className={`${styles.pointer}`} />
      </div>
    </div>
  );
};

export default Navbar;
