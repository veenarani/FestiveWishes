// eslint-disable-next-line no-async-promise-executor
const express = require('express')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

// Heroku not supported multiple ports
// const jsonServer = require('json-server');
// const mockDB = require('./mock/db.js');
// const server = jsonServer.create();
// const router = jsonServer.router(mockDB());
// const middlewares = jsonServer.defaults();
// const port = 3000;
// server.use(middlewares);
// server.use(router);
// server.listen(port, function () {
//   console.log('JSON Server is running')
// });
