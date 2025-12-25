import axios from "axios";

// Base URL from Vite env, fallback Render URL
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://portfolio-nodemailer-78y1.onrender.com",
});

export default api;
