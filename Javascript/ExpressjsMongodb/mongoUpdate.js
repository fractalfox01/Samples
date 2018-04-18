let mongo = require('mongodb').MongoClient;

let dbName = process.argv[2];
let url = "mongodb://localhost:27017/" + dbName;

mongo.connect(url, (err, db) => {
  if(err) throw (err);
  let collection = db.collection('users');
  collection.update({
    username: 'tinatime'
  },{
    $set:{age:40}
  }, (err) => {
    if(err) throw (err);
    db.close();

  });

});


//var mongo = require('mongodb').MongoClient
//
//var url = 'mongodb://localhost:27017/' + process.argv[2]
//mongo.connect(url, function(err, db) {
//  if (err) throw err
//  var collection = db.collection('users')
//  collection.update({
//    username: 'tinatime'
//  }, {
//    $set: {
//      age: 40
//    }
//  }, function(err) {
//    if (err) throw err
//    db.close()
//  })
//})