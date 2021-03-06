/**
* Author : Jimmy Liang
* Date : 2018/03/28
*/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
/** -----  database MySql api routes  -----*/
var write_caseinfoApi = require('./routes/write_caseinfoAPI');
var read_caseinfoApi = require('./routes/read_caseinfoAPI');
var write_casedataApi = require('./routes/write_casedataAPI');
var read_casedataApi = require('./routes/read_casedataAPI');
var write_careinfoApi = require('./routes/write_careinfoAPI');
var write_endinfoApi = require('./routes/write_endinfoAPI');
var read_careinfoApi = require('./routes/read_careinfoAPI');
var read_endinfoApi = require('./routes/read_endinfoAPI');
var indexApi = require('./routes/indexApi');
var read_daycareinfoApi = require('./routes/read_daycareinfoAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** -------------------------connect MySQL-----------------------START----- */
var connection = mysql.createConnection({
  host: '140.131.95.55',
  user: 'healthcare',
  password: '1qaz@WSX',
  database: 'healthcare' 
});

connection.connect(function (err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
  console.log('connected as id ' + connection.threadId);
});

/* Add MySQL connection into req.dbConnection Object */
app.use(function (req, res, next) {
  req.dbConnection = connection;
  next();
});
/** -------------------------connect MySQL-----------------------END------ */

app.use('/', index);
/** -----  database MySql api routes  -----*/
app.use('/write_caseinfoApi', write_caseinfoApi);
app.use('/read_caseinfoApi', read_caseinfoApi);
app.use('/write_casedataApi', write_casedataApi);
app.use('/read_casedataApi', read_casedataApi);
app.use('/write_careinfoApi', write_careinfoApi);
app.use('/write_endinfoApi', write_endinfoApi);
app.use('/read_careinfoApi', read_careinfoApi);
app.use('/read_endinfoApi', read_endinfoApi);
app.use('/indexApi', indexApi);
app.use('/read_daycareinfoApi', read_daycareinfoApi);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
