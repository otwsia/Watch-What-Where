import styles from "./list.module.css";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

import React, { useEffect, useRef, useState } from "react";
import ListItem from "./list-item/ListItem";

const List = (props) => {
  const [movieNumber, setMovieNumber] = useState(0);
  const [movies, setMovies] = useState([]);
  const [hovered, setHovered] = useState(false);
  const listRef = useRef();

  const handleClickLeft = () => {
    if (movieNumber > 0) {
      setMovieNumber(movieNumber - 1);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
  };

  const handleClickRight = () => {
    if (movieNumber < 5) {
      setMovieNumber(movieNumber + 1);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch(props.url);
      const data = await result.json();
      setMovies(data.results);
      return data;
    };
    fetchPost();
  }, [props.url]);

  return (
    <div
      className={`${styles.list}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <span className={`${styles.listTitle}`}>{props.title}</span>
      <div className={`${styles.wrapper}`}>
        <ArrowBackIosOutlined
          className={`${styles.sliderArrow} ${styles.left} `}
          onClick={handleClickLeft}
          style={{
            display: movieNumber > 0 && hovered ? "inline-block" : "none",
          }}
        />
        <div className={`${styles.box}`} ref={listRef}>
          {movies.map(
            (movie, i) =>
              movie.backdrop_path && (
                <ListItem
                  key={i}
                  index={Number(i)}
                  movie={movie}
                  category={props.category}
                />
              )
          )}
        </div>
        <ArrowForwardIosOutlined
          className={`${styles.sliderArrow} ${styles.right}`}
          onClick={handleClickRight}
          style={{ display: hovered ? "inline-block" : "none" }}
        />
      </div>
    </div>
  );
};

export default List;
