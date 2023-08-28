const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
})

userSchema.pre('save', async function(){
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(this.password, salt)
    this.password = hashedPassword
})
userSchema.methods.comparePassword= async function (password){
    return await bcryptjs.compare(password, this.password)
}

const Users = mongoose.model('User', userSchema)

module.exports = Users