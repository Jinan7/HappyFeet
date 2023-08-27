const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const auth = async (req, res, next) => {
    const {token} = req.cookies
    const result = jwt.verify(token, process.env.JWT_SECRET)
    if(!result) throw new Error("Unauthorised")
    const {userId} = result
    req.user = {userId}
    next()
}

module.exports = auth