// Create web server
// Load the module
var http = require('http');

// Create the server
http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  res.end('Hello World\n');
}).listen(3000);

// Print URL for accessing server
console.log('Server running at http://3000/');