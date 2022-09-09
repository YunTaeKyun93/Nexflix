import React from "react";
import { Row, Col } from "react-bootstrap";
import LongMovieCard from "./LongMovieCard";
import moment from "moment";

//Movies 페이지의 무비카드 보여주는 방식

const SearchPage = ({
  searchMovies,
  sortMovies,
  minValue,
  maxValue,
  genreName,
  genreList,
  keyword
}) => {
  let firstHalf = {};
  let secondHalf = {};
console.log('searchMovies',searchMovies)
  //년도 필터
  const sortedYear = sortMovies.results.slice(0).filter((element) => {
    console.log("element", element.release_date);
    return (
      minValue <= moment(element.release_date).format("YYYY") &&
      maxValue >= moment(element.release_date).format("YYYY")
    );
  }); // 2022
  // console.log('sortedYear',sortedYear) //배열로 나옴
  //장르 필터링
  const sameGenreId = genreList?.find((item) => {
    return item.name === genreName;
  })?.id; 
  // console.log('sameGenreId',sameGenreId) // 버튼누른 이름이랑 장르리스랑 같으면 그 아이디를 가지고옴

  const sortedGenre = sortMovies.results
    .slice(0)
    .filter((element) => element.genre_ids.includes(sameGenreId));
    // console.log('sortedGenre',sortedGenre)

  //상영년도 & 장르
  const movieFiltered = sortedYear
    ?.slice(0)
    .filter((item) => sortedGenre?.includes(item));

  //어떤것을 페이지화할지
  if (searchMovies.results !== null || keyword !== null) {
    //검색했을 때
    firstHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = searchMovies.results?.slice(0).filter((_, i) => i % 2 === 1);
  }

  if (
    searchMovies.results[0]?.title === "Undefined" ||
    (sortMovies.results !== null && keyword == null)
  ) {
    //제일 처음 보여지는 부분
    firstHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = sortMovies.results?.slice(0).filter((_, i) => i % 2 === 1);
  }

  //년도 필터링 했을 때
  if (minValue !== 1990 || maxValue !== 2022) {
    if (minValue >= 1990) {
      firstHalf = sortedYear?.slice(0).filter((_, i) => i % 2 === 0);
      secondHalf = sortedYear?.slice(0).filter((_, i) => i % 2 === 1);
    }
  }

  //장르 필터링 했을 때
  if (sameGenreId) {
    firstHalf = sortedGenre?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = sortedGenre?.slice(0).filter((_, i) => i % 2 === 1);
  }

  //년도,장르 모두 필터링 했을 때
  if (sortedYear && sameGenreId) {
    if (movieFiltered) {
     
      firstHalf = movieFiltered?.slice(0).filter((_, i) => i % 2 === 0);
      secondHalf = movieFiltered?.slice(0).filter((_, i) => i % 2 === 1); 

    }
  }

  return (
    <div>
      <Row id="page-row">
        <Col lg={6} sm={6}>
          {firstHalf?.map((item) => (
            <LongMovieCard item={item} />
          ))}
        </Col>
        <Col lg={6} sm={6}>
          {secondHalf?.map((item) => (
            <LongMovieCard item={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
