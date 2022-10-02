import styles from "./home.module.css";

import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className={`container-fluid ${styles.home}`}>
      <Navbar />
      <Featured category="Movies" />
      <List />
      <List />
    </div>
  );
};

export default Home;
