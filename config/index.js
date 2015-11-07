import bodyParser  from 'body-parser';
import * as config from './config/config';
import express     from 'express';

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(config.serverPort, () => {
  logger.info(`Server now running at localhost:${config.serverPort}`);
});
