//part of expressworks challenges.
let express = require('express');
let bodyparser = require('body-parser');

let app = express();

//let path = process.argv[3];
let port = process.argv[2];

//app.use(express.static(path));
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res, next) => {
  let rev = req.body.str.split('').reverse().join('');
  console.log(rev);
  res.send( rev );
  next();
});

app.all("*", (req, res) => {
  console.log(req.originalUrl);
  console.log(JSON.stringify(req['headers']) + " : Time - " + new Date());
  res.end();
});

app.listen(port);
