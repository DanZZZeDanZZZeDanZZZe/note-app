const { check } = require('express-validator')

exports.createColorChecker = (params) => {
  const optional = params.optional || false

  const checker = check('color').trim().isHexColor()

  return optional ? checker.optional() : checker
}
