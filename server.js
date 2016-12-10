var express = require('express');
var app = express();
const port = 1234;

var server = app.listen(port, function(){
  console.log("server running");
});

app.get('/image', function(req, res){
  res.writeHead(200, {
    'Access-Control-Allow-Origin': *
  })
});
