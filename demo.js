var http = require('http');

http.createServer(function (req, res) {
  res.write("Hello! Welcome to Nodejs");
  res.end();
}).listen(8080); 
