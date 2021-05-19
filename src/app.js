import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import bodyParser from "body-parser";
import connect from "../db";
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

connect();

app.use(bodyParser.urlencoded({ extende: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(helmet());
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} Server Start`);
});
