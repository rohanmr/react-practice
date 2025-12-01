import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:7001/api", // change this
});

export default api;
