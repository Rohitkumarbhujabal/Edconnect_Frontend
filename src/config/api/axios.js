import axios from "axios";

export default axios.create({
  baseURL: "https://edconnect-backend.onrender.com",


  headers: { "Content-Type": "application/json" },
});
