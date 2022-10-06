import styles from "./series.module.css";

import React, { useState } from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesSeries from "../../components/list/categoriesSeries";
import SearchList from "../../components/list/SearchList";

const Series = (props) => {
  const [genre, setGenre] = useState("");
  const handleGenreChange = (liftedData) => {
    setGenre(liftedData);
  };
  return (
    <div className={`container-fluid ${styles.series}`}>
      {!props.searchTag && (
        <>
          <Featured
            category="tv"
            url={categoriesSeries}
            handleGenreChange={handleGenreChange}
          />
          {genre === "action" && (
            <List title="Action" url={categoriesSeries.action} category="tv" />
          )}
          {genre === "comedy" && (
            <List title="Comedy" url={categoriesSeries.comedy} category="tv" />
          )}
          {genre === "horror" && (
            <List title="Horror" url={categoriesSeries.horror} category="tv" />
          )}
          {genre === "romance" && (
            <List
              title="Romance"
              url={categoriesSeries.romance}
              category="tv"
            />
          )}
          <List
            title="Trending"
            category="tv"
            url={categoriesSeries.trending}
          />
          <List
            title="Top Rated"
            category="tv"
            url={categoriesSeries.topRated}
          />
        </>
      )}
      {props.searchTag && (
        <SearchList
          query={props.searchTag}
          category="series"
          url={categoriesSeries.seriesSearch + props.searchTag}
        />
      )}
    </div>
  );
};

export default Series;
