import styles from "./home.module.css";

import React from "react";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import categoriesHome from "../../components/list/categoriesHome";
import SearchList from "../../components/list/SearchList";

const Home = (props) => {
  return (
    <div className={`container-fluid ${styles.home}`}>
      {!props.searchTag && (
        <>
          <Featured category="home" url={categoriesHome} />
          <List
            title="Trending"
            category="movie"
            url={categoriesHome.trending}
          />
          <List
            title="Top Rated"
            category="movie"
            url={categoriesHome.topRated}
          />
        </>
      )}
      {props.searchTag && (
        <SearchList
          query={props.searchTag}
          category="movie"
          url={categoriesHome.multiSearch + props.searchTag}
        />
      )}
    </div>
  );
};

export default Home;
