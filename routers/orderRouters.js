const express = require('express')
const {getAll, getOne, createOne, updateOne, deleteOne} = require("../controllers/orderController");
const orderRouter = express.Router()

orderRouter.get('/', getAll)
orderRouter.get('/:id', getOne)
orderRouter.post('/', createOne)
orderRouter.patch('/:id', updateOne)
orderRouter.delete('/:id', deleteOne)



module.exports = orderRouter
