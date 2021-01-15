const { check } = require('express-validator')

exports.createDateChecker = (params) => {
  const optional = params.optional || false

  const checker = check('date')
    .trim()
    .custom((date) => !Number.isNaN(Date.parse(date)))

  return optional ? checker.optional() : checker
}
