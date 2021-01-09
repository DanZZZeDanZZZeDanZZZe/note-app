const express = require('express')

const notesRouter = express.Router()

notesRouter.route('/').post() //сerateNote

notesRouter.route('/list').get() //getNotes

notesRouter
  .route('/:id')
  .get() //getNote
  .delete() //deleteNote
  .put() //changeNote

module.exports = notesRouter
