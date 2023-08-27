const Order = require("../models/order")

const getAll = async (req,res)=>{
    
    const result = await Orders.find({})

    return res.json(result)
}

const getOne = async (req, res)=>{
    
    const {id} = req.params
    const result = await Orders.findById({_id:id})
    return res.json(result)
}

const createOne = async (req,res)=>{
    const result = await Orders.create(req.body)
    return res.json(result)
}

const updateOne = async (req,res)=>{
    const {id} = req.params
    const result = await Orders.findByIdAndUpdate(id, req.body, {new:true})
    return res.json(result)
}

const deleteOne = async (req,res)=>{
    const {id} = req.params
    const result = await Orders.findById(id)
    if(!result) throw new Error("not found")
    await result.remove()
    return res.send()
}

module.exports = {getAll, getOne, createOne, updateOne, deleteOne}