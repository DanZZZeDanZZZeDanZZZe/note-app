const express = require('express')

const {
  сerateGroup,
  getGroup,
  deleteGroup,
  changeGroup,
  getGroups,
  getLengthOfGroupsCollection,
  getNotesInGroup,
  getLengthOfNotesInGroupCollection,
  getListOfGroupTitles,
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

groupsRouter.route('/list-of-titles').get(getListOfGroupTitles)

groupsRouter
  .route('/:searchTitle')
  .get(getGroup)
  .delete(deleteGroup)
  .put(createGroupDataHandler({ optional: ['title', 'color'] }), changeGroup)

groupsRouter
  .route('/notes/list/:searchTitle')
  .get(createRangeDataHandler(), getNotesInGroup)

groupsRouter
  .route('/notes/length/:searchTitle')
  .get(getLengthOfNotesInGroupCollection)

module.exports = groupsRouter
