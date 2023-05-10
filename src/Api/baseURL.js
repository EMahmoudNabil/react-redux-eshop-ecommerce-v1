import axios from "axios";

const baseUrl = axios.create({ baseURL: "http://localhost:8005" });

export default baseUrl;
