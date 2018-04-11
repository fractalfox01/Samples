// challenge from npm's learnyounode filtered challenge.
let fs = require("fs");

let dir = process.argv[2];
let ftype = "." +  process.argv[3];
let fileArray = [];

fs.readdir(dir, (err,data) => {
  if(err) throw err;
  let len = data.length;
  for(var i = 0; i < len; i++){
    if(data[i].includes(ftype)){
      fileArray.push(data[i]);
    }
  }
  fileArray.forEach(e => {
    console.log(e);
  });
});
