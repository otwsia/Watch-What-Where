import styles from "./searchListItem.module.css";

import React from "react";

const SearchListItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={`${styles.item}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
          alt="movie banner"
          className={`${styles.banner}`}
        />
      </div>
    </div>
  );
};

export default SearchListItem;
