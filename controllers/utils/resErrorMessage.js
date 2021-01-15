function resErrorMessage(res, error) {
  const message = error.message || 'Something went wrong. Try it again!'
  res.status(500).json({ message })
}

module.exports = resErrorMessage
