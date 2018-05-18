// A nodejs program.
require('dotenv');
const express = require('express');
const app = express();
const mongo = require('mongodb');

const url = process.env.URL;

function verifyDB(req,res){
  console.log('in verify');
  mongo.connect(url)
    .then(function(db){
      let dbo = db.db('imager');
      dbo.collection('img-info').find({}).toArray()
        .then(function(result){
          console.log(result);
          res.status(200).set({'content-type':'text/html'});
          res.render('index',{ result });
          res.end();
          db.close();
        })
        .catch(function(err){
          console.log(err.stack);
          db.close();
        })
    })
    .catch(function(err){
      console.log(err.stack);

    })
}

app.get('*', (req, res) => {
  verifyDB(req, res);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});