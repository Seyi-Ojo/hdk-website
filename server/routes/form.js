const express = require('express')
const Router = express.Router()
const postForm = require('../controller/form')

Router.route('/form').post(postForm)

module.exports = Router