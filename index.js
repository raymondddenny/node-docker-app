const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://den-docker:den123@mongo:27017?authSource=admin")
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", function (req, res) {
  res.send("<h2>HI THERE!!!!</h2>");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("server running");
  console.log(`running on port : ${port}`);
});
