const Group = require('../models/Group')
const resErrorMessage = require('./utils/resErrorMessage')

exports.сerateGroup = async (req, res) => {
  try {
    const { title, color, date } = req.body

    let groupParams = { title, date }
    if (color) groupParams = { ...groupParams, color }

    const group = new Group(groupParams)
    await group.save()

    res.status(201).json({ group })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getGroup = async (req, res) => {
  try {
    const { searchTitle } = req.params
    if (!searchTitle) throw new Error('Request does not contain title')

    const group = await Group.find({ title: searchTitle })

    res.status(200).json(group)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getGroups = async (req, res) => {
  try {
    const { start, limit } = req.query

    const groups = await Group.find({})
      .sort({ date: 'desc' })
      .skip(start)
      .limit(limit)

    res.status(200).json(groups)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.deleteGroup = async (req, res) => {
  try {
    const { searchTitle } = req.params
    if (!searchTitle) throw new Error('Request does not contain title')

    await Group.remove({ searchTitle })

    res.status(200).json({ message: 'Successful deletion' })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.changeGroup = async (req, res) => {
  try {
    const { searchTitle } = req.params
    if (!searchTitle) throw new Error('Request does not contain title')

    const oldGroup = await Group.findOne({ title: searchTitle })
    if (!oldGroup)
      throw new Error('The entry with the specified title does not exist')

    const { title, date, color } = req.body

    const newGroupParams = {
      title: title || oldGroup.title,
      date: date,
      color: color || oldGroup.color,
    }

    const newGroup = new Group(newGroupParams)
    await newGroup.validate()
    await Group.deleteOne({ _id: oldGroup.id })
    await newGroup.save()

    res.status(201).json({ newGroup })
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getLengthOfGroupsCollection = async (req, res) => {
  try {
    const count = await Group.count({})
    res.status(200).json({ count })
  } catch (e) {
    resErrorMessage(res, e)
  }
}
