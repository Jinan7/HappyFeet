const Users = require('../models/userModel')
const { generateToken } = require('../util/generateToken')

const register = async (req, res) => {
    console.log(req.body)
    const result = await Users.create(req.body)
    const {_id} = result
    const token = generateToken(_id)
    return res.json(token)
}

const login = async (req, res) => {
    console.log("logging in ")
    const {email, password} = req.body
    const result = await Users.findOne({email})
    if(!result) throw new Error("Unauthenticated Error")
    const isValidPassword = await result.comparePassword(password)
    if(!isValidPassword) throw new Error("Invalid credentials")
    const {_id} = result
    const token = generateToken(_id)
    return res.send(token)
}

const logout = async (req, res) => {
    console.log("logging out")
    return res.send()
}

module.exports = {register, login, logout}