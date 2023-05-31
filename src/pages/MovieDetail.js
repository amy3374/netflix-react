import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { Container, Row, Col } from "react-bootstrap";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movie);
  let { id } = useParams();
  // console.log(id);
  const getDetail = () => {
    dispatch(movieAction.getMovieDetail(id));
  };
  console.log("get detail", movieDetail);

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Container>
      <Row className="movie-detail">
        <Col lg={6}>
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                ` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}` +
                ")",
            }}
          ></div>
        </Col>
        <Col lg={6}>
          <div className="detail-info">
            <h1>{movieDetail.title}</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
