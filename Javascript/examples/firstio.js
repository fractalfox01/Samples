// part of npm's learnyounode firstio challenge.
let fs = require('fs');

let path = process.argv[2];
let newlineCount = 0;

let contents = fs.readFileSync(path).toString();
let len = contents.length;
for(var i = 0; i < len; i++){
  if(contents[i] == "\n"){
    newlineCount++;
  }
}
console.log(newlineCount);