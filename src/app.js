import express from "express";
import seriesRoutes from "./routes/series.routes.js";



const app = express()
//middleware to use json
app.use(express.static('public'))
app.use(express.json())
app.use(seriesRoutes)




export default app;