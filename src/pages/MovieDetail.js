import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  // const dispatch = useDispatch();
  // const { movieDetail } = useSelector((state) => state.movie);
  // let { id } = useParams();
  // const getMoviesDetail = () => {
  //   dispatch(movieAction.getMovies(id));
  // };
  // useEffect(() => {
  //   getMoviesDetail();
  // }, []);
  return (
    <div
    // className="movie-detail"
    // style={{
    //   backgroundImage:
    //     "url(" +
    //     ` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}` +
    //     ")",
    // }}
    >
      <h1>MovieDetail</h1>
    </div>
  );
};

export default MovieDetail;
