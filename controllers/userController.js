const Users = require("../models/userModel")

const getUser = async (req, res) => {
    const result = await Users.findById(req.users.userId)
    console.log(result)
    return res.json()
}

const updateUser = async (req, res) => {
    const result = await Users.findByIdAndUpdate(req.users.userId, req.body)
    console.log(result)
    return res.json()
}

module.exports = {getUser, updateUser}