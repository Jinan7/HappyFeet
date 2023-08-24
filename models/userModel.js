const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    address:String,
})


const Users = mongoose.model('Users', userSchema)

module.exports = Users