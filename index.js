import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDB } from "./src/mongoose/mongoose.js";
import dotenv from "dotenv";
import { router } from "./src/api/routes/router.js";

//developement env vars
dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

//external middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

connectToDB();

//execute middleware before the routes
app.use((req, res, next) => {
  next();
});

app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
