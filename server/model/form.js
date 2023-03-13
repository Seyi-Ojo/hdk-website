const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FormSchema = new Schema(
    {
        name: String,
        email: String,
        feedback: String
    }
)

const Form = mongoose.model('form', FormSchema)

module.exports = Form