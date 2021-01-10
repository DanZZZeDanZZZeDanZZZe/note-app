const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const connectDb = require('./db')
const app = require('./app')

const myEnv = dotenv.config({ path: './config.env' })
dotenvExpand(myEnv)

const port = process.env.PORT || 3000

connectDb().then(async () => {
  app.listen(port, () => {
    console.log(`App running on port ${port}...`)
  })
})
