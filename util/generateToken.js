const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
module.exports.generateToken = (id)=> jwt.sign({userId:id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})