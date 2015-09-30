var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
<<<<<<< HEAD
	console.log('hello');
=======
	console.log(' index page');
>>>>>>> fa90d6e6947a86c43fcfad6d03cb8420de7db4ff
    res.render('index.html');
  });

  return app;
}();

module.exports = app;
