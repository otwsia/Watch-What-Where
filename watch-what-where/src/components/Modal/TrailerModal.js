import { Cancel } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./trailerModal.module.css";

const Overlay = (props) => {
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${props.category}/${props.movie.id}/videos?api_key=decb776a782c2ad315d5469877220f3d`
      );
      const data = await result.json();

      setTrailer(data.results[0]);
      return data;
    };
    fetchPost();
  }, [props.movie, props.category]);
  return (
    <div className={`${styles.backdrop}`}>
      {trailer.site === "YouTube" ? (
        <iframe
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          className={styles.trailer}
        ></iframe>
      ) : (
        <iframe
          width="420"
          height="315"
          src={`https://player.vimeo.com/video/${trailer.key}`}
          className={styles.trailer}
        ></iframe>
      )}
      <div className={styles.close}>
        <Cancel onClick={props.handleClose} className={styles.svg} />
      </div>
      <div className={styles.trailerBorder} onClick={props.handleClose}></div>
    </div>
  );
};

const TrailerModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          movie={props.movie}
          handleClose={props.handleClose}
          category={props.category}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default TrailerModal;
