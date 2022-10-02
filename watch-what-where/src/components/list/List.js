import styles from "./list.module.css";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

import React, { useRef, useState } from "react";
import ListItem from "./list-item/ListItem";

const List = () => {
  const [movieNumber, setMovieNumber] = useState(0);
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
  return (
    <div className={`${styles.list}`}>
      <span className={`${styles.listTitle}`}>list Title</span>
      <div className={`${styles.wrapper}`}>
        <ArrowBackIosOutlined
          className={`${styles.sliderArrow} ${styles.left} `}
          onClick={handleClickLeft}
          style={{ display: movieNumber > 0 ? "inline-block" : "none" }}
        />
        <div className={`${styles.box}`} ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className={`${styles.sliderArrow} ${styles.right}`}
          onClick={handleClickRight}
        />
      </div>
    </div>
  );
};

export default List;
