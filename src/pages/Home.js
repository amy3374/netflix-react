import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log("home", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  //loading이 true면 loading스피너를 보여주고
  //loading이 false면 data보여줌
  //true : 데이터 도착 전
  //false : 데이터 도착 후 , error 났을 때
  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />;
  }
  return (
    <div>
      <Banner movie={popularMovies?.results[0]} />
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
