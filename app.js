// modules
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var passport = require('passport');
var MongoStore = require('connect-mongo')(express);

mongoose.connect('mongodb://192.168.56.102/test');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({
    secret: 'your-secret-string-here',
    store: new MongoStore({
      url: 'mongodb://192.168.56.102/test'
    })
  }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.routes);

app.configure('development', function () {
  app.use(express.errorHandler());
});

// loading controllers - routers are defined on controllers
require("fs").readdirSync("./app/controllers").forEach(function (file) {
  require("./app/controllers/" + file)(app);
});

// loading models
require("fs").readdirSync("./app/models").forEach(function (file) {
  require("./app/models/" + file);
});

// loading passport definitions
require('./passport')(passport)

// starting application
var client = http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});