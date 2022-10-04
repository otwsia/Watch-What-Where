import styles from "./home.module.css";

import React from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesHome from "../../components/list/categoriesHome";

const Home = (props) => {
  return (
    <div className={`container-fluid ${styles.home}`}>
      <Featured category="Home" url={categoriesHome.trending} />
      <List title="Trending" category="movie" url={categoriesHome.trending} />
      <List title="Top Rated" category="movie" url={categoriesHome.topRated} />
    </div>
  );
};

export default Home;
