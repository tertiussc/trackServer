const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (reg, res) => {
    res.send('Hi there!')
})

mongoUri = 'mongodb+srv://admin:athena01@trackserver.zqgbt.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

app.listen(3000, () => {
    console.log('Listining on port 3000')
})