const { check } = require('express-validator')

exports.createRangeChecker = (params) => {
  const optional = params.optional || false

  const checker = check('start, limit')

  return optional ? checker.optional() : checker
}
