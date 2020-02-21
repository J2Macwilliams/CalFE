import axios from "axios";

export const axiosWithAuth = () => {
  const code = localStorage.getItem("code");

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: code
    }
  });
};
