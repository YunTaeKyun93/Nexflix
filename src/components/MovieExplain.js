import React, { useState } from "react";
import { Container, Col, Row, Badge, Modal } from "react-bootstrap";
import styles from "../css/MovieDetail.module.css";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Trailer from "./Trailer";
import {
  faStar,
  faUser,
  faTicket,
  faClock,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

const ss = classNames.bind(styles);

//디테일페이지의 영화 설명란

const MovieExplain = ({ item, videoId }) => {
  const [clickMenu, setClickMenu] = useState(false);
  const [showMenu, setShowMenu] = useState("");
  const infoMenu = [
    { icon: faStar, category: "vote_average" },
    { icon: faUser, category: "popularity" },
    { icon: faTicket, category: "adult" },
    { icon: faClock, category: "runtime" },
    { icon: faCalendar, category: "release_date" }
  ];
  const choiceMenu = (item) => {
    setClickMenu(true);
    setShowMenu(item.category);
  };
  return (
    <div>
      <Container className={ss("movieDetail")}>
        <Row>
          <Col lg={6} md={12} className={ss("movieDetail_poster")}>
            {}
            <img
              src={`https://www.themoviedb.org/t/p/original${item?.poster_path}`}
              alt={item?.title}
              resize
            />
          </Col>
          {/* 디테일 이미지 영역 */}
          <Col lg={6} md={12} className={ss("movieDetail_info")}>
            {item?.genre_ids &&
              item?.genre_ids.map((id, i) => (
                <Badge bg="danger" key={i} className={ss("movieDetail_badge")}>
                  {item?.find((item) => item.id === id).namse}
                </Badge>
              ))}
            <h1>{item?.title}</h1>
            <h4>{item?.tagline}</h4>
            {/* 디테일 컨텐츠  타이틀 */}
            <div className={ss("movieDetail_effect")}>
              <ul>
                {infoMenu?.map((menu, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => choiceMenu(menu)}
                    // onMouseLeave={() => cancelChocieMenu()}
                    onClick={() => choiceMenu(menu)}
                  >
                    <FontAwesomeIcon
                      icon={menu.icon}
                      className={ss("movieDetail_icon1")}
                    />
                    <FontAwesomeIcon
                      icon={menu.icon}
                      className={ss("movieDetail_icon2")}
                    />
                  </li>
                ))}
              </ul>

              <div className={ss("movieDetail_info_grade")}>
                {showMenu === "vote_average" && (
                  <span>⭐ {item?.vote_average}</span>
                )}
                {showMenu === "popularity" && (
                  <span>👥 {item?.popularity}</span>
                )}
                {showMenu === "adult" && (
                  <span>
                    Movie Rated :
                    {item?.adult ? (
                      <div>
                        <span style={{ color: "red" }}> ❌R-rated </span>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ color: "green" }}> ✔️G-rated </span>
                      </div>
                    )}
                  </span>
                )}
                {showMenu === "runtime" && (
                  <span>
                    RunTime : {Math.floor(item?.runtime / 60)}h{" "}
                    {item?.runtime % 60}m
                  </span>
                )}
                {showMenu === "release_date" && (
                  <span>Release Date : {item?.release_date}</span>
                )}
              </div>
              <h3 style={{ color: "white" }}>Summary </h3>
              <p>{item?.overview}</p>
            </div>

            <div className="tr-btn">
              <Trailer item={videoId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieExplain;
