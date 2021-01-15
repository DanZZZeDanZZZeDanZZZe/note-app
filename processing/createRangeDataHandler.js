const { check } = require('express-validator')
const { createHandleResults } = require('./utils/createHandleResults')

exports.createRangeDataHandler = () => {
  const validtions = [
    check('start').isInt().toInt(),
    check('limit').isInt().toInt(),
  ]

  return [...validtions, createHandleResults('Incorrect data')]
}
