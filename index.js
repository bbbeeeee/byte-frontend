import bodyParser  from 'body-parser';
import * as config from './config/config';
import express     from 'express';
import convert     from 'cloudconvert';

let app = express();
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

app.post('/convert', (req, res) => {
  
});

app.listen(config.serverPort, () => {
  console.log(`Server now running at localhost:${config.serverPort}`);
});
