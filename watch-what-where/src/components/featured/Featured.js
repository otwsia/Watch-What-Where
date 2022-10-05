import styles from "./featured.module.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import TrailerModal from "../Modal/TrailerModal";
import InfoModal from "../Modal/InfoModal";

const Featured = (props) => {
  const [show, setShow] = useState("");
  const [trailerModal, setTrailerModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch(props.url);
      const data = await result.json();
      const randomFeature =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      if (typeof randomFeature.backdrop_path === "undefined") {
        randomFeature =
          data.results[Math.floor(Math.random() * data.results.length - 1)];
      }
      setShow(randomFeature);
      return data;
    };
    fetchPost();
  }, [props.url]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const handleChange = (e) => {
    props.handleGenreChange(e.target.value);
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

  return (
    <div className={`${styles.featured}`}>
      {props.category !== "home" && (
        <div className={`${styles.category}`}>
          <span>{props.category === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            className={`${styles.genre}`}
            onChange={handleChange}
          >
            <option value="genre">Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </select>
        </div>
      )}
      <img
        className={`${styles.banner}`}
        src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
        alt="featured show"
      />
      <div className={`${styles.info}`}>
        <h1 className={`${styles.title}`}>
          {show?.title || show?.name || show?.original_name}
        </h1>
        <br />
        <span className="my-20">{truncate(show?.overview, 150)}</span>
        {trailerModal && (
          <TrailerModal
            movie={show}
            handleClose={handleClose}
            category={
              props.category === "home" || props.category === "movie"
                ? "movie"
                : "tv"
            }
          />
        )}
        {infoModal && (
          <InfoModal
            id={show.id}
            handleClose={handleClose}
            handleTrailer={handleTrailer}
            category={
              props.category === "home" || props.category === "movie"
                ? "movie"
                : "tv"
            }
          />
        )}
        <div className="d-flex">
          <button
            className={`${styles.button} ${styles.trailer}`}
            onClick={handleTrailer}
          >
            <PlayArrow />
            <span>Trailer</span>
          </button>
          <button
            className={`${styles.button} ${styles.moreInfo}`}
            onClick={handleInfo}
          >
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
      <div className={`${styles.fade}`}></div>
    </div>
  );
};

export default Featured;
