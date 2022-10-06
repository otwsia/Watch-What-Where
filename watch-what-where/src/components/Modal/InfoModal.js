import { Cancel, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./infoModal.module.css";

const Overlay = (props) => {
  const [details, setDetails] = useState("");
  const [providers, setProviders] = useState("");
  const [providersList, setProvidersList] = useState("");
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("");

  const year = (string) => {
    return string && string.substr(0, 7);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegion(input.toUpperCase());
  };

  useEffect(() => {
    const fetchPost = async () => {
      const detailsURL = `https://api.themoviedb.org/3/${props.category}/${props.id}?api_key=decb776a782c2ad315d5469877220f3d`;
      const detailsResult = await fetch(detailsURL);
      const detailsData = await detailsResult.json();
      setDetails(detailsData);
      const providersURL = `https://api.themoviedb.org/3/${props.category}/${props.id}/watch/providers?api_key=decb776a782c2ad315d5469877220f3d`;
      const providersResult = await fetch(providersURL);
      const providersData = await providersResult.json();
      const providersListData = [];
      Object.keys(providersData.results).forEach((key) => {
        providersListData.push(key);
      });
      console.log(providersData);
      console.log(providersListData);
      console.log(providersData.results);
      setProviders(providersData.results);
      setProvidersList(providersListData);

      return [detailsData, providersData];
    };
    fetchPost();
  }, [props.id, props.category]);

  return (
    <div className={styles.backdrop}>
      <img
        className={`${styles.banner}`}
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt="movie banner"
      />
      <Cancel onClick={props.handleClose} className={styles.close} />
      <div className={styles.fade}></div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h1 className={`${styles.title}`}>
            {details?.title || details?.name || details?.original_name}
          </h1>
          <div className={styles.info}>
            <button
              className={`${styles.button} ${styles.trailer}`}
              onClick={props.handleTrailer}
            >
              <PlayArrow />
              <span>Trailer</span>
            </button>
            <span className={`${styles.stats} ${styles.border}`}>
              {`${Math.round(details.vote_average * 10)}%`}
            </span>
            <span className={`${styles.stats} ${styles.border}`}>
              {props.category === "movie"
                ? `${details.runtime}m`
                : `${details.number_of_seasons} Seasons`}
            </span>
            <span className={`${styles.stats} ${styles.border}`}>
              {props.category === "movie"
                ? year(details.release_date)
                : year(details.first_air_date)}
            </span>
            <div className={`${styles.stats}`}>
              {details.spoken_languages &&
                details.spoken_languages.map((language, i) => {
                  return (
                    language.iso_639_1 && (
                      <span
                        key={i}
                        className={`${styles.space} ${styles.language}`}
                      >
                        {language.iso_639_1}
                      </span>
                    )
                  );
                })}
            </div>
          </div>
          <p className={styles.overview}>{details?.overview}</p>
          <div className={styles.genres}>
            {details.genres &&
              details.genres.map((item, i) => {
                return (
                  item.name && (
                    <span className={`${styles.genre}`} key={i}>
                      {item.name}
                    </span>
                  )
                );
              })}
          </div>
        </div>
        <div className={styles.bottomRight}>
          <form className={styles.regionInput} onSubmit={handleSubmit}>
            <label htmlFor="region">Region:</label>
            <input
              type="text"
              list="regions"
              id="region"
              name="region"
              className={styles.input}
              onChange={handleChange}
              style={{ border: region && input ? "none" : "1px solid gray" }}
              placeholder="eg. SG"
            />
            <datalist id="regions">
              {providersList &&
                providersList.map((provider, index) => {
                  return <option value={provider} key={index}></option>;
                })}
            </datalist>
          </form>
          <div className={styles.providers}>
            <p className={styles.providerTab}>Stream at:</p>
            {console.log({ providers })}
            {console.log({ providersRegion: providers[region] })}
            {console.log({ region })}
            <div className={styles.container}>
              {!region ? null : providers[region] &&
                providers[region].flatrate ? (
                providers[region].flatrate.map((item, index) => {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                      alt="Streaming platform"
                      key={index}
                      className={styles.providerIcon}
                    ></img>
                  );
                })
              ) : (
                <p className={styles.alert}>Unavailable in your region</p>
              )}
            </div>
            <p className={styles.providerTab}>Purchase at:</p>
            <div className={styles.container}>
              {!region ? null : providers[region] && providers[region].buy ? (
                providers[region].buy.map((item, index) => {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                      alt="Purchase platform"
                      key={index}
                      className={styles.providerIcon}
                    ></img>
                  );
                })
              ) : (
                <p className={styles.alert}>Unavailable in your region</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoBorder} onClick={props.handleClose}></div>
    </div>
  );
};

const InfoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          handleClose={props.handleClose}
          category={props.category}
          id={props.id}
          handleTrailer={props.handleTrailer}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default InfoModal;
