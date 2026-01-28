import express from "express"
import cors from "cors"
import projectRoutes from "./routes/projectRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.use("/api/projects", projectRoutes)
app.use("/api/contact", contactRoutes)

export default app
