// psrt of npm's expressworks challenges
let express = require('express');
let app = express();

let path = process.argv[3];
let port = process.argv[2];
app.use(express.static(path));
app.set('views', path );
app.set('view engine', 'pug');
app.all('*', (req, res, next) => {

  if(req.url == "/home"){
    res.render('index', {date: new Date().toDateString()});
    res.end();
  }else{
    res.write("Error: looking for /home ?");
    res.end();
  }

});
app.listen(port);
