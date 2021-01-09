const express = require('express')

const groupsRouter = express.Router()

groupsRouter.route('/').post() //сerateGroup

groupsRouter.route('/list').get() //getGroups

groupsRouter
  .route('/:id')
  .get() //getNote
  .delete() //deleteNote
  .put() //changeGroup

module.exports = groupsRouter
