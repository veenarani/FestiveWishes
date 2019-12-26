const serverless = require('serverless-http')
// const express = require('express')
// const app = express()
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.get('/api/info', (req, res) => {
//   res.send({ application: 'sample-app', version: '1' })
// })
// app.post('/api/v1/getback', (req, res) => {
//   res.send({ ...req.body })
// })
// //app.listen(3000, () => console.log(`Listening on: 3000`));
// module.exports.handler = serverless(app)

const express = require('express')
const path = require('path')
const app = express()

app.set('port', (process.env.PORT || 8598))

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

// app.listen(app.get('port'), function () {
//   console.log('Node app is running on port', app.get('port'))
// })

module.exports.handler = serverless(app)
