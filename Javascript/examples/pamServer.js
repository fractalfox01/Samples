// part of expressworks challenges.
let express = require('express');
let app = express();

// npm's crypto module seem's to be depreciated. using sha1 instead produces needed results.
let sha1 = require('sha1');

let port = process.argv[2];
let path = process.argv[3];

app.param('id', (req, res, next, id) => {
  req.id = sha1(new Date().toDateString() + id);
  next();
});

app.all('/message/:id', (req, res) => {
  res.send(req.id);
  res.end();
});

app.listen(port);
