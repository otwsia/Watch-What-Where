import styles from "./movies.module.css";

import React from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesMovies from "../../components/list/categoriesMovies";

const Movies = () => {
  return (
    <div className={`container-fluid ${styles.movies}`}>
      <Featured category="Movies" url={categoriesMovies.trending} />
      <List title="Trending" url={categoriesMovies.trending} />
      <List title="Top Rated" url={categoriesMovies.topRated} />
      {/* <List title="Action" url={categoriesHome.action} />
      <List title="Comedy" url={categoriesHome.comedy} />
      <List title="Horror" url={categoriesHome.horror} />
      <List title="Romance" url={categoriesHome.romance} /> */}
    </div>
  );
};

export default Movies;
