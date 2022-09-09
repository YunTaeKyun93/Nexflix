import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import styles from "../css/MovieCard.module.css";
import classNames from "classnames/bind"

const ss = classNames.bind(styles);


const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.mov);
  const navigate = useNavigate();


  const gotoDetail = () => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div
    className={ss("movie_card")}
    style={{
      backgroundImage:
        "url(" +
        `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item?.poster_path}` +
        ")",
      backgroundRepeat: "no-repeat",
      width: "100%"
    }}
    onClick={() => gotoDetail(item)}
  >
    <div className={ss("overlay")}>
      <h3>{item?.title}</h3>
      <section className={ss("movie_card_info")}>
        <div>
          {item?.genre_ids.map((id, i) => (
            <Badge bg="danger" key={i} className={ss("movieCard_badge")}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className={ss("movie_card_rated")}>
          <span>{item?.vote_average}</span>
          <span>
            {item?.adult ? (
              <img
                src="https://illustoon.com/photo/999.png"
                width={"10px"}
                alt={"18+"}
              />
            ) : (
              <img
                src="https://www.logolynx.com/images/logolynx/9f/9f2aee8daaa29b14ba296de8e951c255.jpeg"
                width={"30px"}
                alt={"All"}
              />
            )}
          </span>
        </div>
      </section>
    </div>
  </div>
  );
};

export default MovieCard;
