import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/v1/productsRoute.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());// allows us to accept JSON data in the body

app.use("/api/v1/products", productRoutes)


app.listen(PORT, () =>{
    connectDB();
    console.log("server started http://localhost:",PORT);
})
