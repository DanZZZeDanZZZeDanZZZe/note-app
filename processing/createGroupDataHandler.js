const { createHandleResults } = require('./utils/createHandleResults')
const { createColorChecker } = require('./validations/createColorChecker')
const { createDateChecker } = require('./validations/createDateChecker')
const { createTitleChecker } = require('./validations/createTitleChecker')

exports.createGroupDataHandler = (params) => {
  const optional = params.optional || []

  const validtions = [
    createTitleChecker({
      optional: optional.includes('title'),
    }),
    createColorChecker({
      optional: optional.includes('color'),
    }),
    createDateChecker({
      optional: optional.includes('date'),
    }),
  ]

  return [...validtions, createHandleResults('Incorrect data')]
}
