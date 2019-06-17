var express = require('express')
var app = express();
var http = require('http').createServer(app);

const port = 4000;

app.use(express.static("public"))

app.get('/', function(req, res){
  res.send('./index.html');
});

http.listen(port, function(){
  console.log(`listening on http://localhost:${port}`);
});