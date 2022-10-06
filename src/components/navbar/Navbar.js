import styles from "./navbar.module.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "@mui/icons-material";

import logo from "./Watch.png";

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  //window event listener to change navbar background on scroll
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleSearch = () => {
    if (searchbar === false) {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleCatChange = () => {
    setSearchbar(false);
    props.setSearchTag("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchTag(searchInput);
    setSearchInput("");
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

      <NavLink
        className={`${styles.flex} ${styles.pointer} ${styles.link} col-1`}
        activeClassName={styles.active}
        onClick={handleCatChange}
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className={`${styles.flex} ${styles.pointer} ${styles.link} col-1`}
        activeClassName={styles.active}
        onClick={handleCatChange}
        to="/Series"
      >
        Series
      </NavLink>
      <NavLink
        className={`${styles.flex} ${styles.pointer} ${styles.link} col-1`}
        activeClassName={styles.active}
        onClick={handleCatChange}
        to="/Movies"
      >
        Movies
      </NavLink>
      <div className="col"></div>

      <form className={`${styles.flex} col-1`} onSubmit={handleSubmit}>
        <Search className={`${styles.pointer}`} onClick={handleSearch} />
        {/* Conditional to get the input for the search to appear */}
        {searchbar && (
          <input
            type="text"
            className={styles.searchbar}
            placeholder="Title / People"
            onChange={handleChange}
            value={searchInput}
          ></input>
        )}
      </form>
    </div>
  );
};

export default Navbar;
