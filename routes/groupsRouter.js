const express = require('express')

const {
  сerateGroup,
  getGroup,
  deleteGroup,
  changeGroup,
  getGroups,
  getLengthOfGroupsCollection,
} = require('../controllers/groupsController')

const groupsRouter = express.Router()

groupsRouter.route('/').post(сerateGroup)

groupsRouter.route('/list').get(getGroups)

groupsRouter.route('/length').get(getLengthOfGroupsCollection)

groupsRouter.route('/:title').get(getGroup).delete(deleteGroup).put(changeGroup)

module.exports = groupsRouter
