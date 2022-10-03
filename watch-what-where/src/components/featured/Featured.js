import styles from "./featured.module.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import categories from "../list/categories";

const Featured = (props) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch(categories.trending);
      const data = await result.json();
      setShow(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    };
    fetchPost();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className={`${styles.featured}`}>
      {props.category !== "Home" && (
        <div className={`${styles.category}`}>
          <span>{props.category === "Movies" ? "Movies" : "Series"}</span>
          <select name="genre" className={`${styles.genre}`}>
            <option>Genre</option>
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
        <div className="d-flex">
          <button className={`${styles.button} ${styles.trailer}`}>
            <PlayArrow />
            <span>Trailer</span>
          </button>
          <button className={`${styles.button} ${styles.moreInfo}`}>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
        <div className={`${styles.fade}`}></div>
      </div>
    </div>
  );
};

export default Featured;
