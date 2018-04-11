// part of npm's learnyounode challenges.
let net = require('net');
let port = process.argv[2];

// date format "YYYY-MM-DD hh:mm"
// Creates a new date and formats to above specs.
let date = new Date();
let dateReply = date.getFullYear() + "-";
if(date.getMonth() < 10){
  dateReply += "0" + (date.getMonth()+1) + "-";
}else{
  dateReply += (date.getMonth()+1) + "-";
}
if(date.getDate() < 10){
  dateReply += "0" + date.getDate();
}else{
  dateReply += date.getDate();
}
dateReply += " " + date.getHours() + ":" + date.getMinutes();
// done with date reply setup

// Create server
let server = net.createServer(function (socket) {
  socket.write(dateReply + "\r\n");
  socket.end();
});
server.on('error', (err) => {
  throw (err);
});
server.listen(port , () => {
  //console.log("Server Open on " + server.address());
});
