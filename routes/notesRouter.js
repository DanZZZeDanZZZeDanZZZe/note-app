const express = require('express')
const {
  сerateNote,
  getNote,
  deleteNote,
  changeNote,
  getNotes,
  getLengthOfNotesCollection,
} = require('../controllers/notesController')
const { createNoteDataHandler } = require('../processing/createNoteDataHandler')
const {
  createRangeDataHandler,
} = require('../processing/createRangeDataHandler')

const notesRouter = express.Router()

notesRouter
  .route('/')
  .post(createNoteDataHandler({ optional: ['text', 'groupTitle'] }), сerateNote)

notesRouter.route('/list').get(createRangeDataHandler(), getNotes)

notesRouter.route('/length').get(getLengthOfNotesCollection)

notesRouter
  .route('/:id')
  .get(getNote)
  .delete(deleteNote)
  .put(
    createNoteDataHandler({ optional: ['title', 'text', 'group'] }),
    changeNote
  )

module.exports = notesRouter
