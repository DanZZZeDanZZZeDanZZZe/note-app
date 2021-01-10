const resErrorMessage = require('./utils/resErrorMessage')

exports.сerateNote = async (req, res) => {
  try {
    const name = 'сerateNote'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getNotes = async (req, res) => {
  try {
    const name = 'getNotes'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getNote = async (req, res) => {
  try {
    const name = 'getNote'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.deleteNote = async (req, res) => {
  try {
    const name = 'deleteNote'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.changeNote = async (req, res) => {
  try {
    const name = 'changeNote'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}
