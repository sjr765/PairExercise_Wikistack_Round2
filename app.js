const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');
const app = express();

const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

app.use('/wiki', wikiRouter)
// app.use('/user', userRouter)


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/stylesheets'))



const PORT = 3000

const init = async () => {
    await db.sync({force: true})

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  }

init();
