import styles from "./navbar.module.css";
import React, { useState } from "react";
import logo from "./Watch.png";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={`row ${styles.navbar} fixed-top ${
        scrolled === true && styles.scrolled
      }`}
    >
      <div className={`${styles.flex} col-2`}>
        <img
          className={`${styles.logo} img-fluid`}
          src={logo}
          alt="website logo"
        />
      </div>
      <Link
        className={`${styles.flex} ${styles.pointer} col-1`}
        activeClassName={styles.active}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.flex} ${styles.pointer} col-1`}
        activeClassName={styles.active}
        to="/Series"
      >
        Series
      </Link>
      <Link
        className={`${styles.flex} ${styles.pointer} col-1`}
        activeClassName={styles.active}
        to="/Movies"
      >
        Movies
      </Link>
      <div className="col"></div>
      <div className={`${styles.flex} col-1`}>
        <Search className={`${styles.pointer}`} />
      </div>
    </div>
  );
};

export default Navbar;
