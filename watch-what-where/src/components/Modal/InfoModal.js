import { Cancel, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./infoModal.module.css";

const Overlay = (props) => {
  const [details, setDetails] = useState("");

  const year = (string) => {
    return string && string.substr(0, 7);
  };
  useEffect(() => {
    const fetchPost = async () => {
      const url = `https://api.themoviedb.org/3/${props.category}/${props.id}?api_key=decb776a782c2ad315d5469877220f3d`;
      const result = await fetch(url);
      const data = await result.json();
      setDetails(data);
      return data;
    };
    fetchPost();
  }, [props.id, props.category]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.borderClose}></div>
    </div>
  );
};

const InfoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay movie={props.movie} handleClose={props.handleClose} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default InfoModal;
