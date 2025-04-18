import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; 
import indexRouter from "./routes/index.js";
import rateLimit from "express-rate-limit"; 
import "dotenv/config";

const app = express();

// enable CORS for all origins (basic configuration)
app.use(cors());
app.use(bodyParser.json());

// route for testing the root path
app.get("/", (req, res) => {
    res.send("Welcome to Caffeine Tracker API");
});

// Use routes
app.use("/api", indexRouter);

// mongoDB connection
const mongoURI = process.env.MONGODB_URI_PROD; 
mongoose.connect(mongoURI).then(() => {
    console.log("mongoose connected");
}).catch((err) => {
    console.log("DB connection fail", err);
});

// start server
app.listen(5004, () => {
    console.log("server on 5004");
});


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, 
    message: "Too many requests from this IP:P",
});
app.use(limiter);
