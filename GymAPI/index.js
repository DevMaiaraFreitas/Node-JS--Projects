import express from "express";
import cors from "cors";
import winston from "winston";
import studentRouter from "./routes/student.route.js";
import personalRouter from "./routes/personal.route.js";
import activityRouter from "./routes/activity.route.js";
import trainingRouter from "./routes/training.route.js";
//import winston from "winston/lib/winston/config/index.js";

const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp})=>{
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename:"gymapi.log"})
    ],
    format: combine(
        label({label:"gymapi"}),
        timestamp(),
        myFormat
    )
});

const app = express();


app.use(express.json());
app.use(cors());
app.use("/student", studentRouter);
app.use("/personal", personalRouter);
app.use("/activity", activityRouter);
app.use("/training", trainingRouter);


app.use((err, req, res, next)=>{
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(3000, ()=> console.log("API Started..."));