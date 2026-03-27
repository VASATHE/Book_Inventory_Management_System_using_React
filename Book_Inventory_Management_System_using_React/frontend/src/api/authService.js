import axios from "axios";

export const login = (username, password) => {
  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);

  return axios.post("http://localhost:8083/login", params, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

export const logout = () => {
  return axios.post("http://localhost:8083/logout", {}, {
    withCredentials: true
  });
};