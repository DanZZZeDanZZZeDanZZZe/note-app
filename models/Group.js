const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

const Group = mongoose.model('Groups', GroupSchema)

module.exports = Group
