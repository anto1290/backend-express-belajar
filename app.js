const express = require('express');
const path = require('path');
const app = express();
const log = require('./middlewares/logger');
const HomeRouter = require('./Router/home.js');

app.use(log);
app.set('views', path.join(__dirname, 'views'));
app.use('/', HomeRouter);




module.exports = app;