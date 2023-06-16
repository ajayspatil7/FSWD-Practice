var http = require('http');
var fs = require('fs');

console.log(__dirname);

function serverOneFunction(req, res) {
  if (req.url == '/index.html' || req.url == '/') {
    fs.readFile('./index.html', function inner(error, data) {
      if (error) {
        res.writeHead(404);
        res.write('File Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == '/home.html') {
    fs.readFile('./home.html', function inner(error, data) {
      if (error) {
        res.writeHead(404);
        res.write('File Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('Invalid request');
    res.end();
  }
}

console.log('Server 1 is running on port 8000');
http.createServer(serverOneFunction).listen(8000);
