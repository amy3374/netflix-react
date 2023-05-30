import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );

      let [
        popularMovies,
        topRatedMovies,
        upComingMovies,
        genreList,
        // movieDetail,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
        // movieDetailApi,
      ]);
      console.log("genreList?");
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          // movieDetail: movieDetail.data,
        },
      });
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
function getMovieDetail() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" });
      const movieDetailApi = await api.get(
        `/movie/movie_id?api_key=${API_KEY}&language=en-US`
      );
      console.log("detail", movieDetailApi);
      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetailApi,
        },
      });
    } catch (error) {
      //에러핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieDetail,
};
