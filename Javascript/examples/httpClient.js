// part of npm's learnyounode challenges.
let http = require('http');
let url = process.argv[2];

http.get(url, (res) => {
  const {statusCode} = res;
  res.setEncoding('utf-8');
  let rawData = '';
  res.on('data', (chunk) => { console.log(chunk);});
});
