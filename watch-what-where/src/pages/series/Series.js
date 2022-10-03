import styles from "./home.module.css";

import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesHome from "../../components/list/categoriesHome";

const Series = () => {
  return (
    <div className={`container-fluid ${styles.home}`}>
      <Navbar />
      <Featured category="Home" />
      <List title="Trending" url={categoriesHome.trending} />
      <List title="Top Rated" url={categoriesHome.topRated} />
      {/* <List title="Action" url={categoriesHome.action} />
      <List title="Comedy" url={categoriesHome.comedy} />
      <List title="Horror" url={categoriesHome.horror} />
      <List title="Romance" url={categoriesHome.romance} /> */}
    </div>
  );
};

export default Series;
