const Products = require("../models/productModel")
const {StatusCodes} = require('http-status-codes')
const path  = require('path')

const getAll = async (req,res)=>{
    
    const result = await Products.find({})

    return res.json(result)
}

const getOne = async (req, res)=>{
    
    const {id} = req.params
    const result = await Products.findById({_id:id})
    console.log(result)
    return res.json(result)
}

const createOne = async (req,res)=>{
    const result = await Products.create(req.body)
    return res.json(result)
}

const updateOne = async (req,res)=>{
    const {id} = req.params
    const result = await Products.findByIdAndUpdate(id, req.body, {new:true})
    return res.json(result)
}

const deleteOne = async (req,res)=>{
    const {id} = req.params
    const result = await Products.findById(id)
    if(!result) throw new Error("not found")
    await result.remove()
    return res.send()
}

const uploadImage = async (req, res)=>{
    const {image} = req.files
    const imagePath = path.resolve(__dirname, '../public/uploads', `${image.name}`)
    await image.mv(imagePath)
    return res.status(StatusCodes.OK).json({image:`/uploads/${image.name}`})
}
module.exports = {getAll, getOne, createOne, updateOne, deleteOne, uploadImage}