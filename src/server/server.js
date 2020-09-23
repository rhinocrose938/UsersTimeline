var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');

app.use(express.static('build'));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.get('/listUsers', function (req, res) {
  fs.readFile(  path.join(__dirname, './users.json'), 'utf8', function (err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.end( data );
  });
});

app.get('/', function (req, res) {
  fs.readFile(path.join(__dirname, '../../build/index.html'), 'utf8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    res.send(file);
  });
});
var server = app.listen(process.env.PORT || 8080, process.env.YOUR_HOST || '0.0.0.0', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
