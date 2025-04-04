import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; 
import indexRouter from "./routes/index.js";


const app = express();

// enable CORS for all origins (basic configuration)
app.use(cors());


app.use(bodyParser.json());

// use routes
app.use("/api", indexRouter);

// mongoDB connection
const mongoURI = "mongodb://localhost:27017/caffeine-purse";
mongoose.connect(mongoURI).then(() => {
    console.log("mongoose connected");
}).catch((err) => {
    console.log("DB connection fail", err);
});

// start server
app.listen(5002, () => {
    console.log("server on 5002");
});
