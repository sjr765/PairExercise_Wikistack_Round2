const express = require("express");

const router = express.Router();

const { addPage } = require("../views"); // <--- will link to index.js in views folder



router.get('/', (req, res, next) => {

  res.send('this will retrieve all wiki pages')

})

router.post('/', (req, res, next) => {

  res.send('this will submit a new apge to the database')

})

router.get('/add', (req, res, next) => {

  res.send(addPage())

})

module.exports = router;
