import axios from "axios";

export const axiosWithAuth = () => {
  const code = localStorage.getItem("code");

  return axios.create({
    baseURL: "http://localhost:4001",
    headers: {
      "Content-Type": "application/json",
      Authorization: code
    }
  });
};
