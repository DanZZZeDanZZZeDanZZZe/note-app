const express = require('express')
const morgan = require('morgan')

// const noteRouter = require('./routes/noteRouter')
// const userRouter = require('./routes/userRouter')

const app = express(morgan('dev'))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// app.use('/api/notes', noteRouter)
// app.use('/api/users', userRouter)

module.exports = app
