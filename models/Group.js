const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  color: String,
})

GroupSchema.virtual('notes', {
  ref: 'Note',
  localField: '_id',
  foreignField: 'group',
})

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group
