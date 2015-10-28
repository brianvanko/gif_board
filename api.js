var express = require('express');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var config = require('./config');
var app = express();
var path = require('path');
var itemRoutes;

var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var alt = require('./app/alt');
var Iso = require('iso');

////// CONFIG //////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

////// CONNECT TO DB //////
mongoose.connect(config.DB_URL);

////// ROUTES //////
itemRoutes = require('./item/routes/item.routes')(app, express);

////// MIDDLEWARE //////
app.use(function(req, res) {
  var iso = new Iso();
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    iso.add(html, alt.flush());
    res.render('index.ejs', { html: iso.render() });
  });
});

////// CREATE SERVER //////
var server = app.listen(port, function () {
	console.log('api listening on ', server.address().port);
	require('./endpointtable')(app._router.stack, 'express');
});