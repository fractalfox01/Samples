// start mongodb using the command: mongod --port 27017 --dbpath=./data
// then uncomment code you want to run and enter the command: node server.js 8338
// then open a browser at localhost:8338 to kick off the requests!!

let express = require('express');
let app = express();
let mongo = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

let port = process.argv[2];
let path = process.argv[3];

app.all('*', (req, res) => {
  console.log( "Header: " + req.headers + " Url: " + req.originalUrl  + " Params: " + req.params);
  res.status(200);
  res.setHeader('content-type', 'text/html');
  // Creates a new Database "mydb"
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    res.write("Database Created");
//    res.end();
//    db.close();
//  });
  // Creates a new collection "customers" in db "mydb"
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db('mydb');
//    dbo.createCollection('customers', (err, ares) => {
//      if(err) throw (err);
//      res.write("Collection Created");
//      res.end();
//      db.close();
//    })
//  });
  // Create a new Document(record) in collection "customers".
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db('mydb');
//    let myobj = {
//      name: 'Company Name', address: 'Highway 37'
//    };
//    dbo.collection('customers').insertOne(myobj, (err, resA) => {
//      if(err) throw (err);
//      res.write("1 Doc Inserted... Hopefully");
//      res.end();
//      db.close();
//    });
//  });
    // inserting many. writes db response.
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db('mydb');
//    let myobj = [
//                    { name: 'John', address: 'Highway 71'},
//                    { name: 'Peter', address: 'Lowstreet 4'},
//                    { name: 'Amy', address: 'Apple st 652'},
//                    { name: 'Hannah', address: 'Mountain 21'},
//                    { name: 'Michael', address: 'Valley 345'},
//                    { name: 'Sandy', address: 'Ocean blvd 2'},
//                    { name: 'Betty', address: 'Green Grass 1'},
//                    { name: 'Richard', address: 'Sky st 331'},
//                    { name: 'Susan', address: 'One way 98'},
//                    { name: 'Vicky', address: 'Yellow Garden 2'},
//                    { name: 'Ben', address: 'Park Lane 38'},
//                    { name: 'William', address: 'Central st 954'},
//                    { name: 'Chuck', address: 'Main Road 989'},
//                    { name: 'Viola', address: 'Sideway 1633'}
//                  ];
////    let myobj = [
////    { name: 'Chocolate Hell', address: 'One Way 99'},
////    { name: 'Stinky Lemon', address: 'Ocean Blvd 2'},
////    { name: 'Vanilla Mare', address: 'Central st 954'}
////    ];
//    dbo.collection('customers').insertMany(myobj,(err, results) => {
//      if(err) throw (err);
//      res.write("Full Object Response: " + JSON.stringify(results));
//      res.end();
//      db.close();
//    });
//  });
  // Return first document(record) in customers collection.
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db('mydb');
//    dbo.collection('customers').findOne({}, (err, result) => {
//      if(err) throw (err);
//      res.write(result.name);
//      res.write(result[1].name);
//      res.end();
//      db.close();
//    });
//  });
  // Display All documents(records) in customers collection; one record per line/paragraph.
  mongo.connect(url, (err, db) => {
    if(err) throw (err);
    let dbo = db.db('mydb');
    dbo.collection('customers').find({},{address: 0}).toArray(function(err, result){
      if(err) throw (err);
      for(var i = 0; i < result.length; i++){
        res.write("<p>" + JSON.stringify(result[i].name) + ", " + JSON.stringify(result[i].address) + "</p>");
      }
      res.end();
      db.close();
    });
  });
  // Display the document(record) containing the address "Park Lane 38".
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    dbo.collection("customers").find({ address: "Park Lane 38"}).toArray(function(err,result){
//      if(err) throw (err);
//      res.write(JSON.stringify(result));
//      res.end();
//      db.close();
//    });
//  });
  // Find only documents with an address starting with "s" using (regex) regular expressions
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    let query1 = { address: /^S/ };
//    dbo.collection("customers").find(query1).toArray(function(err, result){
//      if(err) throw (err);
//      for(var i = 0; i < result.length; i++){
//        res.write("<p>" + JSON.stringify(result[i]) + "</p>");
//      }
//    });
//    // Works for multiple requests!! (makes new connection?)
//    let query2 = { address: /^M/ };
//    dbo.collection("customers").find(query2).toArray(function(err, result){
//      if(err) throw (err);
//      for(var i = 0; i < result.length; i++){
//        res.write("<p>" + JSON.stringify(result[i]) + "</p>");
//      }
//      res.end();
//      db.close();
//    });
//  });
    // Sort the collection "customers", alphabetically, using the mysort ( in this case name ) object.
//  mongo.connect(url, (err,db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    let mysort = { name: 1 };
//    dbo.collection("customers").find().sort(mysort).toArray(function(err,result){
//      if(err) throw (err);
//      for(var i = 0; i < result.length; i++){
//        res.write("<p>" + JSON.stringify(result[i]) + "</p>");
//      }
//      res.end();
//      db.close();
//    });
//  });
  // Delete a single record. deletes {name: 'Michael', address: 'Valley 345'} from collection 'customers'.
//  mongo.connect(url, (err,db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    let deleteMe = {address: 'Mountain 21'};
//    dbo.collection('customers').deleteOne(deleteMe, function(err, obj){
//      if(err) throw (err);
//      res.write("<h4>Deleted 1 Document(Record)/s</h5>");
//      res.write("returned object: " + JSON.stringify(obj)); // returned object: {"n":1,"ok":1}
//      res.end();
//      db.close();
//    });
//  });
  // Delete Many at once.
//  mongo.connect(url, (err,db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    let query = { address: /^O/ };
//    dbo.collection('customers').deleteMany(query, function(err, obj){
//      if(err) throw (err);
//      res.write( obj.result );
//      res.end();
//      db.close();
//    });
//  });
  // Delete a Collection(Table). delets 'customers' collection.
//  mongo.connect(url, (err,db) => {
//    if(err) throw (err);
//    let dbo = db.db('mydb');
//    dbo.collection('customers').drop(function(err, delOK){
//      if(err) throw (err);
//      if(delOK) res.write("Collection Deleted");
//      res.end();
//      db.close();
//    });
//      // OR
//    //dbo.dropCollection("customers", function(err, delOK){
//    //  if(err) throw (err);
//    //  if(delOK) res.write("Collection Deleted");
//    //  res.end();
//    //  db.close();
//    //});
//  });
  // Updating a record.
  // Note: If the query finds more than one record, only the first occurrence is updated.
//  mongo.connect(url, (err, db) => {
//    if(err) throw (err);
//    let dbo = db.db("mydb");
//    let query = { address: 'Ocean blvd 2' };
//    let newValues = { $set: { name: "Mary", address: "FourTwenty st 420"} };
//    dbo.collection('customers').updateOne(query, newValues, function(err, resA){
//      if(err) throw (err);
//      res.write(JSON.stringify(resA));
//      res.write("1 Document Updated");
//      res.end();
//      db.close();
//    });
//  });


});

app.listen(port);