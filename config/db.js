const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//Asynchronus function to connect to database
const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true })

        console.log('MongoDB Connected')
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }    
}

//Export it to server.js
module.exports = connectDB;