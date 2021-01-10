const express = require('express')

const {
  сerateGroup,
  getGroup,
  deleteGroup,
  changeGroup,
  getGroups,
} = require('../controllers/groupsController')

const groupsRouter = express.Router()

groupsRouter.route('/').post(сerateGroup)

groupsRouter.route('/list').get(getGroups)

groupsRouter.route('/:id').get(getGroup).delete(deleteGroup).put(changeGroup)

module.exports = groupsRouter
