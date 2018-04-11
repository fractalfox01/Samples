// part of npm's learnyounode challenges.
let fs = require('fs');

module.exports = (dir, ftype, cb) =>{
  var fileArr = [];
  ftype = "." + ftype;
  fs.readdir(dir, (err, data) => {
    if(err) return cb(err, data);
    let len = data.length;
    for(var i = 0; i < len; i++){
      if(data[i].includes(ftype)){
        fileArr.push(data[i]);
      }
    }

    return cb(null, fileArr);
  });
};
