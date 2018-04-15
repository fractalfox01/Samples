// part of expressworks challenges.
let express = require('express');
let app = express();
let stylus = require('stylus');

let path = process.argv[3];
let port = process.argv[2];

app.use(express.static(path));
app.use(stylus.middleware({src: path}));


app.listen(port);
