import axios from "axios";
import { baseURL } from "../const/const";

const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});

export default axiosInstance;