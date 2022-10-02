import styles from "./featured.module.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";

const Featured = (props) => {
  return (
    <div className={`${styles.featured}`}>
      {props.category && (
        <div className={`${styles.category}`}>
          <span>{props.category === "Movies" ? "Movies" : "Series"}</span>
          <select name="genre" className={`${styles.genre}`}>
            <option>Genre</option>
          </select>
        </div>
      )}
      <img
        className={`${styles.banner}`}
        src="https://pixabay.com/get/g253c9acb7af3e65e91863dbba5c864eaa8a93fa81fc5e92c764de3454284e7d961e195090a04caf83de1e04f612e670c_1280.jpg"
        alt="featured show"
      />
      <div className={`${styles.info}`}>
        <span>Show Name</span>
        <br />
        <span className="my-20">Show Description</span>
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
      </div>
    </div>
  );
};

export default Featured;
