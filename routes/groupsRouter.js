const express = require('express')

const {
  сerateGroup,
  getGroup,
  deleteGroup,
  changeGroup,
  getGroups,
  getLengthOfGroupsCollection,
} = require('../controllers/groupsController')

const {
  createGroupDataHandler,
} = require('../processing/createGroupDataHandler')
const {
  createRangeDataHandler,
} = require('../processing/createRangeDataHandler')

const groupsRouter = express.Router()

groupsRouter
  .route('/')
  .post(createGroupDataHandler({ optional: ['color'] }), сerateGroup)

groupsRouter.route('/list').get(createRangeDataHandler(), getGroups)

groupsRouter.route('/length').get(getLengthOfGroupsCollection)

groupsRouter
  .route('/:searchTitle')
  .get(getGroup)
  .delete(deleteGroup)
  .put(createGroupDataHandler({ optional: ['title', 'color'] }), changeGroup)

module.exports = groupsRouter
