import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";
import styles from "../css/MovieDetail.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);

const Reviews = ({ item }) => {
  let arr = item.results?.slice(0).reverse();

  return (
    <Container>
      <div className={ss("movieDetail_reviews")}>
        {arr?.map((item) => (
          <div className={ss("reviews")}>
            <h4>ID: {item.author}</h4>
            <div>{item.content}</div>
            <p>{moment(item.created_at).format("LLL")}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;
