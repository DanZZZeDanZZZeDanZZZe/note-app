const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: String,
  date: {
    type: Date,
    required: true,
  },
  group: mongoose.ObjectId,
})

const Note = mongoose.model('notes', NoteSchema)

module.exports = Note
