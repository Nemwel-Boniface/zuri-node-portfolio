var http = require('http');
var url = require('url');
var fs = require('fs');

function handleRequests(path, res) {
  fs.readFile(path, null, function(err, data) {
    if(err) {
      res.writeHead(400)
      res.write('Error route not found');
    } else {
      res.write(data)
    }
    res.end();
  })
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var path = url.parse(req.url).pathname;
  switch(path) {
    case '/':
      handleRequests('./index.html', res);
      break;
    case '/about':
      handleRequests('./about.html', res);
      break;
    case '/contact':
      handleRequests('./contact.html', res);
      break;
    default:
      res.writeHead(404);
      res.write('Route was not found');
      res.end()
  }
}).listen(8080, function() {
  console.log("server start at port 8080");
});