const FormModel = require('../model/form')

const postForm = async (req, res, next) => {
    const {name, email, feedback} = req.body

    try{
        const form = new FormModel({
            name,
            email,
            feedback
        })
        const savedForm = await form.save()
        return res.status(201).json(savedForm)
    } catch(err){
        console.log(err)
    }
}

module.exports = postForm