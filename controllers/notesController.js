const Group = require('../models/Group')
const Note = require('../models/Note')
const resErrorMessage = require('./utils/resErrorMessage')

exports.сerateNote = async (req, res) => {
  try {
    const { title, text, date, groupTitle } = req.body

    let noteParams = { title, date }
    if (text) noteParams = { ...noteParams, text }

    if (groupTitle) {
      const groupID = await Group.findOne({ title: groupTitle }, '_id')
      if (!groupID) throw new Error('Request does not contain title')

      noteParams = { ...noteParams, group: groupID }
    }

    const note = new Note(noteParams)
    await note.save()

    res.status(201).json({ note })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getNotes = async (req, res) => {
  try {
    const { start, limit } = req.query

    const count = await Note.countDocuments({})
    if (start >= count) {
      res
        .status(400)
        .json({ message: 'The start parameter is longer than the collection' })
    }

    const notes = await Note.find({})
      .sort({ date: 'desc' })
      .skip(start)
      .limit(limit)

    res.status(200).json(notes)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getNote = async (req, res) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)
    res.status(200).json(note)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params
    await Note.findByIdAndDelete(id)

    res.status(200).json({ message: 'Successful deletion' })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.changeNote = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('Request does not contain title')
    const oldNote = await Note.findById(id)
    if (!oldNote) throw new Error('The entry with the id does not exist')

    const { title, date, text, group } = req.body

    const newNoteParams = {
      title: title || oldNote.title,
      text: text || oldNote.text,
      group: group || oldNote.group,
      date: date,
    }

    const newNote = new Note(newNoteParams)
    await newNote.validate()
    await Note.deleteOne({ _id: oldNote.id })
    await newNote.save()

    res.status(201).json({ newNote })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getLengthOfNotesCollection = async (req, res) => {
  try {
    const count = await Note.countDocuments({})
    res.status(200).json({ count })
  } catch (e) {
    resErrorMessage(res, e)
  }
}
