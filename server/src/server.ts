import "reflect-metadata";
import "./database";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello from express with typescript!",
  });
});

app.listen(5000, () => {
  console.log(`Server up and running on port 5000`);
});
