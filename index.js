import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
    console.log('------------------------')
    console.log(req.headers)
    console.log(req.body)
    console.log('------------------------')
    next()
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
