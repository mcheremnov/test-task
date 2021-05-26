const express = require('express')
const morgan = require('morgan')
const port = 3000

const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.get('/', (_, res) => {
    res.json({ message: 'Hello world' })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})