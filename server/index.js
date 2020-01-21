const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

logger.token('req-body', function(req, res) {
	return JSON.stringify(req.body);
});

logger.token('res-body', function(req, res) {
	return JSON.stringify(res.body);
});

const requestLogger = logger(':date[iso] req :res-body :method :url :status :response-time ms - :res[content-length]');
const responseLogger = logger(':date[iso] res :req-body :method :url :status :response-time ms - :res[content-length]');
// const jsonParser = bodyParser.json();

app.use(requestLogger);
app.use(responseLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  console.log(11111111, res)
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  // console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.enable('trust proxy');

// app.get('/', (req, res) => {
//   console.log('REQUEST', req)
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send('Hello frontend');
// });
