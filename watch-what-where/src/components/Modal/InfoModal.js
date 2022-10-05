import { Cancel, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./infoModal.module.css";

const Overlay = (props) => {
  const [details, setDetails] = useState("");

  const year = (string) => {
    return string && string.substr(0, 7);
  };
  useEffect(() => {
    const fetchPost = async () => {
      const url = `https://api.themoviedb.org/3/${props.category}/${props.id}?api_key=decb776a782c2ad315d5469877220f3d`;
      const result = await fetch(url);
      const data = await result.json();
      setDetails(data);
      console.log(props.id);
      console.log(details);
      return data;
    };
    fetchPost();
  }, [props.id, props.category]);

  return (
    <div className={styles.backdrop}>
      <img
        className={`${styles.banner}`}
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
      />
      <Cancel onClick={props.handleClose} className={styles.close} />

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h1 className={`${styles.title}`}>
            {details?.title || details?.name || details?.original_name}
          </h1>
          <div className={styles.info}>
            <button
              className={`${styles.button} ${styles.trailer}`}
              onClick={props.handleTrailer}
            >
              <PlayArrow />
              <span>Trailer</span>
            </button>
            <span className={`${styles.stats} ${styles.border}`}>
              {`${Math.round(details.vote_average * 10)}%`}
            </span>
            <span className={`${styles.stats} ${styles.border}`}>
              {props.category === "movie"
                ? `${details.runtime}m`
                : `${details.number_of_seasons} Seasons`}
            </span>
            <span className={`${styles.stats} ${styles.border}`}>
              {props.category === "movie"
                ? year(details.release_date)
                : year(details.first_air_date)}
            </span>
          </div>
          <p className={styles.overview}>{details?.overview}</p>
          <div className={styles.genres}>
            {details.genres &&
              details.genres.map((item, i) => {
                return (
                  item.name && (
                    <span className={`${styles.genre}`} key={i}>
                      {item.name}
                    </span>
                  )
                );
              })}
          </div>
        </div>
      </div>

      {/* <div className={styles.infoBorder} onClick={props.handleClose}></div> */}
    </div>
  );
};

const InfoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          handleClose={props.handleClose}
          category={props.category}
          id={props.id}
          handleTrailer={props.handleTrailer}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default InfoModal;
