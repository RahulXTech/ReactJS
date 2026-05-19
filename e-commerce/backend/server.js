import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import authRoute from "./routes/authRoutes.js"
import productRouter from './routes/productsRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 5001

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/products', productRouter);

app.get("/", (req, res)=>{
    res.send("API is running....")
})
connectDB();

app.listen(PORT, ()=>{
    console.log("server is running on port", PORT);
})




