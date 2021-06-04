import "reflect-metadata";
import createConnection from "./database";
import express from "express";
import { userRoute } from "./routes/userRoute";
import { postRoute } from "./routes/postRoute";

createConnection();
const app = express();

app.use(express.json());
app.use(userRoute);
app.use(postRoute);

export { app };
