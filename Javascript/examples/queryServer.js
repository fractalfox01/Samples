//part of expressworks challenges.
let express = require('express');
let app = express();

let port = process.argv[2];

app.get('/search', (req,res,next) => {
  console.log(req.query);
  res.send(req.query);
});
app.listen(port);
