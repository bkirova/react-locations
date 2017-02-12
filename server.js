var config = require('./config').config();
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

global.constants  =  require("./config").constants();
global.variables  =  require("./config").variables();


if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
}


var staticAssets = 'public';

app.use(express.static(staticAssets));
app.use('/public',express.static(path.join(__dirname, staticAssets)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(staticAssets, 'index.html'));
});
 
app.use(function(req, res) {
    res.status(404).send('Sorry cant find that!');
});

http.listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});