// app.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
