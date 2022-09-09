import React from "react";
import styles from "../css/Banner.module.css";
import classNames from "classnames/bind"

const ss = classNames.bind(styles);
//HOME 페이지 첫 화면 배너

const Banner = ({ movie }) => {
  return (
    <div
      className={ss('banner')}
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original//${movie.backdrop_path}` +
          ")",
        backgroundPosition: "center",
      }}
    >
      <div className={ss("banner-info")}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
