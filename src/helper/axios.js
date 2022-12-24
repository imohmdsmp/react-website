import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL ;

console.log("bas:"+ baseURL)
let headers = {};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;