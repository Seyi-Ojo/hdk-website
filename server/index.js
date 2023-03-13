require('dotenv').config()
const app = require('./app')
const http = require('http')
const connectDB = require('./config/database')

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

connectDB().then(() => {
    server.listen(PORT, async () => {
        console.log(`Server running on port ${PORT}`)
})
})