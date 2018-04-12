// part on npm's learnyounode challenges.
let http = require('http');
let server = http.createServer();

let readData = "";

server.on('request', (req, res) => {
  if(req.method != 'POST'){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("POST expected");
    res.end();
  }else{
    req.on('data', (chunk) => {
      readData = chunk.toString().toUpperCase();

      res.write(readData);
    });
  }
  req.on('end', () => {
    res.end();
  });
});

server.listen(process.argv[2]);
