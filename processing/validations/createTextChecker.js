const { check } = require('express-validator')

exports.createTextChecker = (params) => {
  const min = params.min || 0
  const max = params.max || 300
  const optional = params.optional || false
  const fieldName = params.fieldName || 'text'

  const checker = check(fieldName).trim().isLength({ min, max })

  return optional ? checker.optional() : checker
}
