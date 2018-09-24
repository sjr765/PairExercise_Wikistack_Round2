const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/stylesheets'))


