const express = require("express");
const router = express.Router();
const {Page} = require('../models')
const { addPage } = require("../views"); // <--- will link to index.js in views folder

router.get('/', (req, res, next) => {
  try{
    res.send('this will retrieve wiki pages')
  } catch(err){
    res.send(next(err))
  }
})

router.get('/add', (req, res, next) => {
  try{
    res.send(addPage())
  } catch(err){
    res.send(next(err))
  }
})

router.post('/', async (req, res, next) => {
  const namePost = req.body.name;
  const emailPost = req.body.email
  const titlePost = req.body.title;
  const contentPost = req.body.content;

  const page = new Page({
    title: titlePost,
    content: contentPost
  });

  try {
    await page.save();
    res.redirect('/');
  } catch(err){
    res.send(next(err));
  }
})

router.put('/:id', (req, res, next) => {
  try{
    res.send('this will update a specific page in the db')
  } catch(err){
    res.send(next(err))
  }
})

router.delete('/:id', (req, res, next) => {
  try{
    res.send('this will delete a specific page in the db')
  } catch(err){
    res.send(next(err))
  }
})

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
