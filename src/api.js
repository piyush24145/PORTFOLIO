import axios from "axios";

// Base URL from env variable, fallback Render URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://portfolio-nodemailer-78y1.onrender.com",
});

export default api;
