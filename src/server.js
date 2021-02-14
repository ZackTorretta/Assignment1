const express = require('express');

const app = express();

const id = 'Hello World';
app.get('/', (req, res) => {
  res.send(id);
  // res.send('Hello World');
});

app.listen(8080);
