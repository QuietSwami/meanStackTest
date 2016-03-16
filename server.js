var http = require('http');

http.createServer(function(reg, res){ //Creates server
	res.writeHead(200, { // sets the HTTP headers 
		'Content-Type' : 'text/plain'
	});
	res.end('Hello World'); //finalizes the response
}).listen(3000); //listen to PORT 3000

console.log('Server running at http://localhost:3000');