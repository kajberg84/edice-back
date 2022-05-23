import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectToDB } from './src/mongoose/mongoose.js';
import dotenv from 'dotenv';

//developement env vars
dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());

connectToDB();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
