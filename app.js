const express = require("express");
const morgan = require("morgan");
//const bodyParser = require("body-parser");
const html = require("html-template-tag");
const layout = require("./views/layout");
//what this line do?
const app = express();
const { db } = require("./models");
const models = require("./models");

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

//app.use("/user", userRouter);

// const models = require('./models');
const PORT = 3000;

//what this line do?
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  //await models.User.sync();
  await db.sync();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};
init();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
