const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hi its started");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server has stared on", port);
});
