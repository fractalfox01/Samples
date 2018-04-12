// part of npm's learnyounode challenges.
// suggested solution:

//var http = require('http')
//var fs = require('fs')
//
//var server = http.createServer(function (req, res) {
//  res.writeHead(200, { 'content-type': 'text/plain' })
//
//  fs.createReadStream(process.argv[3]).pipe(res)
//})
//
//server.listen(Number(process.argv[2]))

// my solution. I need to start including response codes.
let server = require('http').createServer();
let fs = require('fs');

let port = process.argv[2];
let file = process.argv[3];

server.on('request', (req, res) => {
  // added later
  res.writeHead(200, { 'content-type': 'text/plain' });

  let src = fs.createReadStream(file);
  src.pipe(res);
});

server.listen(port);
