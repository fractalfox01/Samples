function example(req, res){
  // Queries the database for all records then displays contents in web page.
  mongo.connect(url)
    .then(function(db){
      let dbo = db.db('your db here');
      dbo.collection('your collection here').find({}).toArray()
        .then(function(resp){
          res.status(200).set({'content-type':'text/html'});
          res.write("<h1>" + JSON.stringify(resp) + "</h1>");
          res.end();
          db.close();
        })// I think this one is needed as well, idk.
        .catch(function(err){
          console.log(err.stack);
        })
    })// The error is because these .catches are missing when the promise returns reject
    .catch(function(err){
      console.log(err.stack);
    });
}

app.get('/*', (req, res) => {
  example(req, res);
});
