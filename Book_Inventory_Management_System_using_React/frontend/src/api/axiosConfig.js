import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8083",
  withCredentials: true
});

API.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 403) {
      alert("Session expired. Login again");
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default API;
