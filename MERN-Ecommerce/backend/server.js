import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('API is running...');
})

const PORT = process.env.PORT || 5000;