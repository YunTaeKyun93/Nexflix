import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import styles from "../css/MovieDetail.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);


const Recommends = ({ item }) => {
  let firstHalf = item.results?.slice(0).filter((_, i) => i % 2 === 0);
  let secondHalf = item.results?.slice(0).filter((_, i) => i % 2 === 1);

  return (
    <Container>
      <div className={ss("movieDetail_recommend")}>
        <Row>
          <Col>
            {firstHalf?.map((item) => (
              <div className={ss("re-card-area")}>
                <MovieCard item={item} />
              </div>
            ))}
          </Col>
          <Col>
            {secondHalf?.map((item) => (
              <div className={ss("re-card-area")}>
                <MovieCard item={item} />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Recommends;
