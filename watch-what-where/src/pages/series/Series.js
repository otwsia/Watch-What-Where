import styles from "./series.module.css";

import React, { useState } from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesSeries from "../../components/list/categoriesSeries";

const Series = () => {
  const [genre, setGenre] = useState("");
  const handleGenreChange = (liftedData) => {
    setGenre(liftedData);
  };
  return (
    <div className={`container-fluid ${styles.series}`}>
      <Featured
        category="Series"
        url={categoriesSeries.trending}
        handleGenreChange={handleGenreChange}
      />
      {genre === "action" && (
        <List title="Action" url={categoriesSeries.action} />
      )}
      {genre === "comedy" && (
        <List title="Comedy" url={categoriesSeries.comedy} />
      )}
      {genre === "horror" && (
        <List title="Horror" url={categoriesSeries.horror} />
      )}
      {genre === "romance" && (
        <List title="Romance" url={categoriesSeries.romance} />
      )}
      <List title="Trending" category="tv" url={categoriesSeries.trending} />
      <List title="Top Rated" category="tv" url={categoriesSeries.topRated} />
    </div>
  );
};

export default Series;
