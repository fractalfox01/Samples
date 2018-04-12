// part of npm's learnyounode challenges.
let http = require('http');
let url = require('url');

let readData = "";

let server = http.createServer();

server.on('request', (req, res) => {
  let inUrl = req['url'].split("?").shift();

  // this looks at requested url; splits at the GET ( ? ), pops off index 0, splits at ( = ), pops off index 0 and finally converts into a string.
  // Assumes GET request is a JSON object containing an iso date.
  let isoDate = new Date(req['url'].split("?").pop().split("=").pop().toString());

  //console.log(inUrl);
  if(inUrl == "/api/parsetime"){
    let jsonResponse = {
      "hour": isoDate.getHours(),
      "minute": isoDate.getMinutes(),
      "second": isoDate.getSeconds()
    };
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify(jsonResponse));
    res.end();
  }else if(inUrl == "/api/unixtime"){
    let month = isoDate.getMonth();
    if(month < 10){
      month = "0" + month;
    }
    let day = isoDate.getDay();
    if(day < 10){
      day = "0" + day;
    }
    let year = isoDate.getFullYear();
    let unixResponse = {
      "unixtime": Date.parse(day + " " + month + ", " + year)
    };
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify(unixResponse));
    res.end();
  }else{
    res.write("Error");
    res.end();
  }
});

server.listen(process.argv[2]);
