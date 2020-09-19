var app = require('express')();
var http = require('http').createServer(app);
//express routing methods to send request and handle the response in the callback function
	app.get('/', function(req, res)
	{res.send('<h1>Hello world</h1>');
});
http.listen(3000, function(){
console.log('listening on :3000');
});
