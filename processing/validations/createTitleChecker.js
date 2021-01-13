const { check } = require('express-validator')

exports.createTitleChecker = (params) => {
  const min = params.min || 0
  const max = params.max || 50
  const optional = params.optional || false

  const checker = check('title').trim().isLength({ min, max })

  return optional ? checker.optional() : checker
}
