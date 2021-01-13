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

const Group = mongoose.model('Groups', GroupSchema)

module.exports = Group
