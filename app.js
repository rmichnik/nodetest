// modules
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var routes = require('./routes');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.routes);

app.configure('development', function () {
    app.use(express.errorHandler());
});

// loading routes
require("fs").readdirSync("./routes").forEach(function (file) {
    require("./routes/" + file)(app);
});

// starting application
var client = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
