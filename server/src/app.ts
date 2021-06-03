import "reflect-metadata";
import "./database";
import express from "express";
import { userRoute } from "./routes/userRoute";
import { postRoute } from "./routes/postRoute";

const app = express();

app.use(express.json());
app.use(userRoute);
app.use(postRoute);

export = { app };
