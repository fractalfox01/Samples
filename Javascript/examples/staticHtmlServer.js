// part of npm's expressworks challenges
let express = require('express');
let app = express();
console.log("path: " + process.argv[3]);
app.use(express.static(process.argv[3]));
app.all('/', (req, res, next) => {
  console.log(req.url);
  res.end();
});
app.listen(process.argv[2]);
