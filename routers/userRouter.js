const express = require('express')
const { getUser, updateUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/', getUser)
userRouter.patch('/', updateUser)


module.exports = userRouter