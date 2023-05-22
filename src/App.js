import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";
//1. 3개의 페이지(홈,영화, 영화디테일)
//홈페이지
//2.배너를 볼 수 있다
//3. 3가지 섹션(popular, top rated, upcoming)
//4. 각 영화의 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.

//영화 디테일 페이지
//6. 영화에 대한 디테일한 정보 볼 수 있음.(포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등등)
//7. trailer을 누르면 영화예고볼 수 있고,
//8. 영화의 리뷰도 볼 수 있음
//9. 관련 영화도

//영화 페이지
//10. 영화 검색 창(배너)
//11. 영화 정렬
//12. 영화 필터링

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
