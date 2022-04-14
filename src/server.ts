import express, { request } from "express";

const app = express();

app.post("/courses", (req, res) => {
  const { name } = request.body;
  return res.json({ name });
});

app.listen(3333, () => console.log("server is running!"));
