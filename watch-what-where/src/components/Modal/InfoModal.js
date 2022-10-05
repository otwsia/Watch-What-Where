import { Cancel } from "@mui/icons-material";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./infoModal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.backdrop}>
      <img className={`${styles.banner}`} src={props.movie.backdrop_path} />
      <Cancel onClick={props.handleClose} />
      <div className={`${styles.info}`}>
        <div className={`${styles.right}`}>
          <div className={`${styles.icons}`}>
            <button className={`${styles.trailer}`}>
              <PlayArrow />
              <span>Trailer</span>
            </button>
            <span className={`${styles.stats} ${styles.border}`}>
              {`${Math.round(props.movie.vote_average * 10)}%`}
            </span>
            <span className={`${styles.stats}`}>
              {year(props.movie.release_date)}
            </span>
          </div>
        </div>
        <div className={`${styles.right}`}></div>
      </div>
    </div>
  );
};

const InfoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay movie={props.movie} handleClose={props.handleClose} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default InfoModal;
