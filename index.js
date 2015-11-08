var bodyParser = require('body-parser');
var config = require('./config/config');
var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

app.get('/login', (req, res) => {
  res.sendfile('public/login.html');
});

app.get('/feed', (req, res) => {
  res.sendfile('public/feed.html');
});

app.listen(config.serverPort, () => {
  console.log(`Server now running at localhost:${config.serverPort}`);
});
