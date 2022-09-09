import React, { useEffect, useState } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "./../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const [home, setHome] = useState(true);
  console.log("home", home);
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.mov);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div onMouseMove={() => setHome(false)}>
      {home === true ? (
        <Loading />
      ) : (
        <div>
          <Banner movie={popularMovies.results[0]} />
          <div className="card-area">
            <h1>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
