// part of learnyoumongo exercises.
let mongo = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/learnyoumongo";
let num = process.argv[2];

mongo.connect(url, (err, db) => {
  if(err) throw (err);
  let parrots = db.collection('parrots');
  //console.log(parrots);

  parrots.find({age: {$gt: +num}}, {name:1, age:1, _id:0}).toArray((err,data) => {
    if(err) throw (err);
    console.log(data);
  });
  db.close();
});

