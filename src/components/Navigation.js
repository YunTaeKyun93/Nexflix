import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../css/NavMenu.module.css';
import classNames from "classnames/bind";

// 맨위에 있는 메뉴와 검색창
const ss = classNames.bind(styles);
const Navigation = () => {

  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //검색
  const gotoSearch = (event) => {
    event.preventDefault();

    if (keyword == "" || keyword === "undefined" ) {
      //검색어 없을 때
      dispatch(movieAction.getMovies(undefined, 1));
      navigate(`/movies`);
    } else {
      //검색어 있을 때
      dispatch(movieAction.getMovies(keyword, 1));
      navigate(`/movies?query=${keyword}`);
     
    }
  };

  return (
    <Navbar id="navbar" bg="black" varient="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            width={100}
            src="https://www.pngmart.com/files/21/Netflix-PNG-Image.png"
            alt="#"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className={ss("nav-item")}>
              Home
            </Link>
            <Link to="/movies" className={ss("nav-item")}>
              Movies
            </Link>
          </Nav>
          <Form className="d-flex search-area" onSubmit={gotoSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className={(ss("nav-search"), "me-2")}
              aria-label="Search"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button type="submit" className={ss("nav-button")} variant="outline-danger">
            Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
