var express = require('express');
var app = express();
var stupidMath = require('.//stupidMath');
var views = require('.//views');

app.get('/', function (req, res) {
    var output;
    output="<div>"+stupidMath.add2(6)+"</div>";
  res.send(output);
})

app.get('/helloWorld', function (req, res) {
    var output;
    output=views.HelloWorld('I\'m Rick James Bitch','Lets Play BBall Shirts v. Blouses');
  res.send(output);
})

var server = app.listen(process.env.PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


