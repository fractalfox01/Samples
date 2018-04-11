// part of npm's learnyounode first Asyc IO challenge.
let fs = require("fs");

let path = process.argv[2];
let newlineCount = 0;
fs.readFile(path, "utf-8", (err, data) => {
  if(err) throw err;
  let len = data.length;
  for(var i = 0; i < len; i++){
    if(data[i] == "\n"){
      newlineCount++;
    }
  }
  console.log(newlineCount);
});
