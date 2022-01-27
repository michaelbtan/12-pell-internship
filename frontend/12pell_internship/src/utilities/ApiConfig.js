import axios from "axios"

// const api = axios.create({
//   baseURL: process.env.NODE_ENV === "production" ? "https://pella12.herokuapp.com/" : "http://localhost:8000/",
// });

const api = axios.create({
  baseURL: "https://pella12.herokuapp.com"
})

export default api