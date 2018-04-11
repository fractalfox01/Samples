// part of npm's learnyounode challenges.
let fs = require("fs");
let myMod = require("./myMod.js");

let dir = process.argv[2];
let ftype = process.argv[3];
myMod(dir, ftype, function(err, dat){
  if(err){
    throw (err);
  }
  dat.forEach(e => {
    console.log(e);})
  ;}
);
