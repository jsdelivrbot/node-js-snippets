var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/', function(req, res, next) {
  console.log('GET /');
  //res.send('hello world'); ERROR
  next();
}, function(req, res) {
  res.send('hello world2');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
