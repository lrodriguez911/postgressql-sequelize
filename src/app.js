import express from "express";
import seriesRoutes from "./routes/series.routes.js";

const app = express()

app.use(express.static('public'))
//middleware to use json
app.use(express.json())
app.use(seriesRoutes)




export default app;