const express = require('express')
const morgan = require('morgan')

const groupsRouter = require('./routes/groupsRouter')
const notesRouter = require('./routes/notesRouter')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/notes', notesRouter)
app.use('/api/groups', groupsRouter)

module.exports = app
