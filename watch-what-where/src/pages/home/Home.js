import styles from "./home.module.css";

import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categories from "../../components/list/categories";

const Home = () => {
  return (
    <div className={`container-fluid ${styles.home}`}>
      <Navbar />
      <Featured category="Home" />
      <List title="Trending" url={categories.trending} />
      <List title="Top Rated" url={categories.topRated} />
      <List title="Action" url={categories.action} />
      <List title="Comedy" url={categories.comedy} />
      <List title="Horror" url={categories.horror} />
      <List title="Romance" url={categories.romance} />
    </div>
  );
};

export default Home;
