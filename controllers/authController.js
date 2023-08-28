const Users = require('../models/userModel')
const { generateToken } = require('../util/generateToken')

const register = async (req, res) => {
    const result = await Users.create(req.body)
    const {_id} = result
    const token = generateToken(_id)
    const oneDay = 1000 * 3600 * 24
    console.log(Date.now())
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now() + oneDay),
    })
    return res.json()
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
    const oneDay = 1000 * 3600 * 24
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now() + oneDay),
    })
    return res.json()
}

const logout = async (req, res) => {
    res.cookie('token', '',{
        expires:new Date(Date.now()+5000)
    })
    return res.send()
}

module.exports = {register, login, logout}