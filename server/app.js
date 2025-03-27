import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import indexRouter from "./routes/index.js";  

const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = "mongodb://localhost:27017/caffeine-purse";

mongoose.connect(mongoURI).then(() => {
    console.log("mongoose connected");
}).catch((err) => {
    console.log("DB connection fail", err);
});

app.listen(5002, () => {
    console.log("server on 5002");
});
