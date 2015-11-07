import bodyParser  from 'body-parser';
import * as config from './config/config';
import express     from 'express';

let app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(config.serverPort, () => {
  console.log(`Server now running at localhost:${config.serverPort}`);
});
