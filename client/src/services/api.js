import axios from "axios"

const API = axios.create({
  baseURL: "https://portfolio-backend-aoii.onrender.com/api"
})

export const fetchProjects = () => API.get("/projects")
export const sendContact = (data) => API.post("/contact", data)
