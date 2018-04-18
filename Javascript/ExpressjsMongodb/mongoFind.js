let mongo = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/learnyoumongo";
let num = process.argv[2];

mongo.connect(url, (err, db) => {
  if(err) throw (err);
  let parrots = db.collection('parrots');
  //console.log(parrots);
  parrots.find({age: {$gt: +num}}).toArray((err, docs) => {

    console.log(docs);
    db.close();
  });

});