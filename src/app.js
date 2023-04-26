const express = require("express");
const cors = require("cors");
const { origin } = require("../config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin }));

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Successful GET Request" });
});

app.post("/", (req, res) => {
  const msg = `This is what was sent in req.body.data: ${req.body.data}`;
  res.status(201).send({ msg });
});

module.exports = app;
