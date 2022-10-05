import styles from "./listItem.module.css";

import React, { useState } from "react";
import { InfoOutlined, PlayCircleOutlined } from "@mui/icons-material";
import genre from "../genre";
import TrailerModal from "../../Modal/TrailerModal";

const ListItem = (props) => {
  const [hovered, setHovered] = useState("");
  const [trailerModal, setTrailerModal] = useState(false);
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

  const handleClose = () => {
    setTrailerModal(false);
  };

  const year = (string) => {
    return string && string.substr(0, 4);
  };
  return (
    <div className={styles.itemContainer}>
      <div
        className={`${styles.item}`}
        style={{ left: hovered && props.index * 225 - 50 + props.index * 2.5 }}
        onMouseEnter={() =>
          setHovered(
            `https://api.themoviedb.org/3/${props.category}/${props.movie.id}/videos?api_key=decb776a782c2ad315d5469877220f3d`
          )
        }
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
            <InfoOutlined className={`${styles.icon}`} />
            <span className={`${styles.stats} ${styles.border}`}>
              {`${Math.round(props.movie.vote_average * 10)}%`}
            </span>
            <span className={`${styles.stats}`}>
              {year(props.movie.release_date)}
            </span>
          </div>
          <div>
            {props.movie?.title ||
              props.movie?.name ||
              props.movie?.original_name}
          </div>
          <div className={`${styles.description}`}>
            {truncate(props.movie.overview, 130)}
          </div>
          <div>
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
      {trailerModal && (
        <TrailerModal
          movie={props.movie}
          handleClose={handleClose}
          category={props.category}
        />
      )}
    </div>
  );
};

export default ListItem;
