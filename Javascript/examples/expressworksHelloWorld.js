// part of npm's expressworks challenges.
let express = require('express');
let app = express();

app.get('/home', (req, res) => {
  res.send("Hello World!");
});
app.listen(process.argv[2]);
