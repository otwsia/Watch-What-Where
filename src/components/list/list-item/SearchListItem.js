import styles from "./searchListItem.module.css";

import React, { useState } from "react";

import InfoModal from "../../Modal/InfoModal";
import TrailerModal from "../../Modal/TrailerModal";

const SearchListItem = (props) => {
  const [trailerModal, setTrailerModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const handleTrailer = () => {
    if (trailerModal === false) {
      setTrailerModal(true);
    } else {
      setTrailerModal(false);
    }
  };
  const handleInfo = () => {
    if (infoModal === false) {
      setInfoModal(true);
    } else {
      setInfoModal(false);
    }
  };
  const handleClose = () => {
    setTrailerModal(false);
    setInfoModal(false);
  };

  return (
    <div className={styles.itemContainer}>
      <div className={`${styles.item}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
          alt="movie banner"
          className={`${styles.banner}`}
          onClick={handleInfo}
        />
      </div>
      {/* Render trailer modal on state change from button click in info modal */}
      {trailerModal && (
        <TrailerModal
          movie={props.movie}
          handleClose={handleClose}
          category={props.category}
        />
      )}
      {/* Render info modal on state change from button click */}
      {infoModal && (
        <InfoModal
          id={props.movie.id}
          handleClose={handleClose}
          handleTrailer={handleTrailer}
          category={
            props.category === "home" || props.category === "movie"
              ? "movie"
              : "tv"
          }
        />
        // ternary to prop down appropriate category wrt page
      )}
    </div>
  );
};

export default SearchListItem;
