import styles from "./searchList.module.css";

import React, { useEffect, useState } from "react";
import SearchListItem from "./list-item/SearchListItem";

const SearchList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch(props.url);
      const data = await result.json();
      setMovies(data.results);
      return data;
    };
    fetchPost();
  }, [props.url]);

  return (
    <>
      <div className={`${styles.box1}`}>
        <span
          className={styles.searchTitle}
        >{`Results for: "${props.query}"`}</span>
      </div>
      <div className={`${styles.box2}`}>
        {movies.map(
          (movie, i) =>
            movie.backdrop_path && (
              <SearchListItem key={i} movie={movie} category={props.category} />
            )
        )}
      </div>
    </>
  );
};

export default SearchList;
