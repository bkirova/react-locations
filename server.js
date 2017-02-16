const config = require('./config').config()
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'index.html')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

http.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})
