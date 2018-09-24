const express = require("express");

const router = express.Router();

const { addPage } = require("../views"); // <--- will link to index.js in views folder

router.get("/", (req, res) => {
  res.send("get at /wiki/");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("got to POst /wiki/");
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
