const mongoose = require('mongoose')

const MONGODB_URI = process.env.NODE_ENV === "test" ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI
const connectDB = async () => {
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((conn) => {
        console.log(
            `Connected to Mongo!`
        )
    }).catch((err) => console.log('Error connecting to mongo', err))
}

module.exports = connectDB