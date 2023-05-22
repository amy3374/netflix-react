import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    console.log("Request start", config);
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    console.log("Request error", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    console.log("get response", response);
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default api;
