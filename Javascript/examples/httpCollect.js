// part of npm's learnyounode challenges.
let http = require('http');
let url = process.argv[2];

http.get(url, (res) => {
  let rawData = '';
  let count = 0;
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    count += chunk.length;
    rawData += chunk;
  });
  res.on('end', () => {
    console.log(count);
    console.log(rawData);
  });
});
