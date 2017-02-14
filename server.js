const config = require('./config').config();
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const staticAssets = 'public';

app.use(express.static(staticAssets));

app.use('/public',express.static(path.join(__dirname, staticAssets)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('/', 'index.html'));
});

http.listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});