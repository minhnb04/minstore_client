const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setup đường dẫn file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

//logger with morgan
app.use(logger('dev'));

//ghi đè phương thức
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;