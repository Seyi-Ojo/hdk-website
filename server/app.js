const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const app = express()
const formRoute = require('./routes/form')

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', formRoute)

module.exports = app