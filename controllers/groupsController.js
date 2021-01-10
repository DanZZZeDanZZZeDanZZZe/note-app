const resErrorMessage = require('./utils/resErrorMessage')

exports.сerateGroup = async (req, res) => {
  try {
    const name = 'сerateGroup'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getGroups = async (req, res) => {
  try {
    const name = 'getGroups'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.getGroup = async (req, res) => {
  try {
    const name = 'getGroup'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.deleteGroup = async (req, res) => {
  try {
    const name = 'deleteGroup'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}

exports.changeGroup = async (req, res) => {
  try {
    const name = 'changeGroup'
    throw new Error(`${name} didn't created`)
  } catch (e) {
    resErrorMessage(res, e)
  }
}
