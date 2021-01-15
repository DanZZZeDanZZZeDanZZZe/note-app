const express = require('express')
const morgan = require('morgan')
const path = require('path')

const groupsRouter = require('./routes/groupsRouter')
const notesRouter = require('./routes/notesRouter')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/notes', notesRouter)
app.use('/api/groups', groupsRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app
