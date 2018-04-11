// part of npm's learnyounode challenges.
let http = require('http');
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let count = 0;
let raw1 = '';
let raw2 = '';
let raw3 = '';
function print(){
  console.log(raw1);
  console.log(raw2);
  console.log(raw3);
}
http.get(url1, (res) => {
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    raw1 += chunk;
  });
  res.on('end', () => {
    count++;
    if(count == 3){
      print();
    }
  });
});
http.get(url2, (res) => {
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    raw2 += chunk;
  });
  res.on('end', () => {
    count++;
    if(count == 3){
      print();
    }
  });
});
http.get(url3, (res) => {
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    raw3 += chunk;
  });
  res.on('end', () => {
    count++;
    if(count == 3){
      print();
    }
  });
});
