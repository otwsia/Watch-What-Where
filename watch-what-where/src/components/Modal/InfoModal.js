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
      return data;
    };
    fetchPost();
  }, [props.id, props.category]);

  return (
    <div className={styles.backdrop}>
      {/* top half */}
      <img className={`${styles.banner}`} src={props.movie.backdrop_path} />
      <Cancel onClick={props.handleClose} />
      {/* bottom half */}
      <div className={`${styles.info}`}>
        {/* bottom left */}
        <div className={`${styles.left}`}>
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
        {/* bottom right */}
        <div className={`${styles.right}`}></div>
      </div>
      {/* border close */}
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
