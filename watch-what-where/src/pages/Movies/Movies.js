import styles from "./movies.module.css";

import React, { useState } from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesMovies from "../../components/list/categoriesMovies";

const Movies = () => {
  const [genre, setGenre] = useState("");
  const handleGenreChange = (liftedData) => {
    setGenre(liftedData);
  };
  return (
    <div className={`container-fluid ${styles.movies}`}>
      <Featured
        category="Movies"
        url={categoriesMovies.trending}
        handleGenreChange={handleGenreChange}
      />
      {genre === "action" && (
        <List title="Action" url={categoriesMovies.action} />
      )}
      {genre === "comedy" && (
        <List title="Comedy" url={categoriesMovies.comedy} />
      )}
      {genre === "horror" && (
        <List title="Horror" url={categoriesMovies.horror} />
      )}
      {genre === "romance" && (
        <List title="Romance" url={categoriesMovies.romance} />
      )}
      <List title="Trending" category="movie" url={categoriesMovies.trending} />
      <List
        title="Top Rated"
        category="movie"
        url={categoriesMovies.topRated}
      />
    </div>
  );
};

export default Movies;
