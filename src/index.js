const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

/* Database setup */

mongoose.connect("mongodb://localhost:27017/uploads"),
  {
    useNewUrlParser: true,
  };

app.use(require("./routes"));

app.get("/", (req, res) => {
  return res.send("db functional");
});

app.listen("3000");
