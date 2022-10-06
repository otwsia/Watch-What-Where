import styles from "./listItem.module.css";

import React, { useState } from "react";
import { InfoOutlined, PlayCircleOutlined } from "@mui/icons-material";

import genre from "../genre";
import TrailerModal from "../../Modal/TrailerModal";
import InfoModal from "../../Modal/InfoModal";

const ListItem = (props) => {
  const [hovered, setHovered] = useState("");
  const [trailerModal, setTrailerModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
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
  const year = (string) => {
    return string && string.substr(0, 7);
  };

  return (
    <div className={styles.itemContainer}>
      {/* Shortcircuit to align image on hover so that popup is aligned */}
      <div
        className={`${styles.item}`}
        style={{ left: hovered && props.index * 225 - 50 + props.index * 2.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered("")}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
          alt="movie banner"
          className={`${styles.banner}`}
        />
        <div className={`${styles.itemInfo}`}>
          <div className={`${styles.icons}`}>
            <PlayCircleOutlined
              className={`${styles.icon}`}
              onClick={handleTrailer}
            />
            <InfoOutlined className={`${styles.icon}`} onClick={handleInfo} />
            <span className={`${styles.stats} ${styles.border}`}>
              {`${Math.round(props.movie.vote_average * 10)}%`}
            </span>
            <span className={`${styles.stats}`}>
              {/* ternary to render release date or air date based on page */}
              {props.category === "movie"
                ? year(props.movie.release_date)
                : year(props.movie.first_air_date)}
            </span>
          </div>
          <div>
            {/* render show name or backup */}
            {props.movie?.title ||
              props.movie?.name ||
              props.movie?.original_name}
          </div>
          <div className={`${styles.description}`}>
            {truncate(props.movie.overview, 130)}
          </div>
          <div>
            {/* shortcircuit to check for valid genre id */}
            {props.movie.genre_ids &&
              props.movie.genre_ids.map((id, i) => {
                return (
                  genre[id] && (
                    <span className={`${styles.genre}`} key={i}>
                      {genre[id]}
                    </span>
                  )
                );
              })}
          </div>
        </div>
      </div>
      {/* Shortcircuit to render modal on state change from button click in info modal*/}
      {trailerModal && (
        <TrailerModal
          movie={props.movie}
          handleClose={handleClose}
          category={props.category}
        />
      )}
      {/* Shortcircuit to render modal on state change from button click */}
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
        // ternary to prop down appropriate category based on page
      )}
    </div>
  );
};

export default ListItem;
