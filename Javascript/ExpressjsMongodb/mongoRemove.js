let mongo = require('mongodb').MongoClient;

let dbName = process.argv[2];
console.log(process.argv[3]);
let theId = process.argv[4];
let url = "mongodb://localhost:27017/" + dbName;
// Hitting Errors Hardcore at this point, I give up. learnyoumongo is obsolete at this point.

// At this point I move onto w3school tuts. seen in basicUse.js


//mongo.connect(url, (err, db) => {
//  if(err) throw (err);
//  let col = db.collection(process.argv[3]).remove({_id: process.argv[4]}, (err) => {
//    if(err) throw (err);
//    db.close();
//  })
//});