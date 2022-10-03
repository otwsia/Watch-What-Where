import styles from "./series.module.css";

import React from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesSeries from "../../components/list/categoriesSeries";

const Series = () => {
  return (
    <div className={`container-fluid ${styles.series}`}>
      <Featured category="Series" url={categoriesSeries.trending} />
      <List title="Trending" url={categoriesSeries.trending} />
      <List title="Top Rated" url={categoriesSeries.topRated} />
      {/* <List title="Action" url={categoriesHome.action} />
      <List title="Comedy" url={categoriesHome.comedy} />
      <List title="Horror" url={categoriesHome.horror} />
      <List title="Romance" url={categoriesHome.romance} /> */}
    </div>
  );
};

export default Series;
