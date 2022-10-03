import styles from "./listItem.module.css";

import React, { useState } from "react";
import { Add, PlayArrow } from "@mui/icons-material";

const ListItem = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`${styles.item}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ left: hovered && props.index * 225 - 50 + props.index * 2.5 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`}
        alt="movie banner"
        className={`${styles.banner}`}
      />
      <div className={`${styles.itemInfo}`}>
        <div className={`${styles.icons}`}>
          <PlayArrow className={`${styles.icon}`} />
          <Add className={`${styles.icon}`} />
        </div>
        <div>
          <span className={`${styles.stats}`}>{props.movie.vote_average}</span>
          <span className={`${styles.border} ${styles.stats}`}>rating</span>
          <span className={`${styles.stats}`}>season/time</span>
          <span className={`${styles.stats}`}>{props.movie.release_date}</span>
        </div>
        <div className={`${styles.description}`}>
          description: jhajdhkas jhdfkhskjfhkjadh fjkhaskjdfh jksadhj
        </div>
        <div className={`${styles.genre}`}>Genre</div>
      </div>
    </div>
    // <div
    //   className={`${styles.item}`}
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    //   style={{ left: hovered && props.index * 225 - 50 + props.index * 2.5 }}
    // >
    //   <img
    //     src="https://images.thedirect.com/media/photos/posd1_1.jpg"
    //     alt="movie banner"
    //     className={`${styles.banner}`}
    //   />
    //   <div className={`${styles.itemInfo}`}>
    //     <div className={`${styles.icons}`}>
    //       <PlayArrow className={`${styles.icon}`} />
    //       <Add className={`${styles.icon}`} />
    //     </div>
    //     <div>
    //       <span className={`${styles.stats}`}>score</span>
    //       <span className={`${styles.border} ${styles.stats}`}>rating</span>
    //       <span className={`${styles.stats}`}>season/time</span>
    //       <span className={`${styles.stats}`}>Release</span>
    //     </div>
    //     <div className={`${styles.description}`}>
    //       description: jhajdhkas jhdfkhskjfhkjadh fjkhaskjdfh jksadhj
    //     </div>
    //     <div className={`${styles.genre}`}>Genre</div>
    //   </div>
    // </div>
  );
};

export default ListItem;
