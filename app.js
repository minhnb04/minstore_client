const express = require('express')
const app = express()
const port = 8000
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mobilesRouter = require('./routes/mobiles');
const tabletsRouter = require('./routes/tablets');
const accessoriesRouter = require('./routes/accessories');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser())

//setup đường dẫn file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

//logger with morgan
app.use(logger('dev'));

//ghi đè phương thức
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mobiles', mobilesRouter);
app.use('/tablets', tabletsRouter);
app.use('/accessories', accessoriesRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;