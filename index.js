import express from 'express'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv))
  .default('port', 3000)
  .describe('port', 'Port to start server on')
  .alias('p', 'port')
  .parse()

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  console.log('------------------------')
  console.log(req.headers)
  console.log(req.body)
  console.log('------------------------')
  next()
})

app.listen(argv.port, () => {
  console.log(`Server listening at http://localhost:${argv.port}`)
})

