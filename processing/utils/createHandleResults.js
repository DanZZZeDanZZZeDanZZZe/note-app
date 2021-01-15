const { validationResult } = require('express-validator')

exports.createHandleResults = (message) => {
  return (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      console.log(message)
      return res.status(400).json({
        errors: errors.array(),
        message,
      })
    }
    next()
  }
}
