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

