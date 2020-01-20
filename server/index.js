const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
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
