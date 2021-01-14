const { createHandleResults } = require('./utils/createHandleResults')
const { createDateChecker } = require('./validations/createDateChecker')
const { createTitleChecker } = require('./validations/createTitleChecker')
const { createTextChecker } = require('./validations/createTextChecker')

exports.createNoteDataHandler = (params) => {
  const optional = params.optional || []

  const validtions = [
    createTitleChecker({
      optional: optional.includes('title'),
    }),
    createTextChecker({
      optional: optional.includes('text'),
    }),
    createDateChecker({
      fieldName: 'groupTitle',
      optional: optional.includes('groupTitle'),
    }),
    createDateChecker({
      optional: optional.includes('date'),
    }),
  ]

  return [...validtions, createHandleResults('Incorrect data')]
}
