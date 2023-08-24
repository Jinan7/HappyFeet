const express = require('express')
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/productController')
const productRouter = express.Router()




productRouter.get('/', getAll)
productRouter.post('/', createOne)
productRouter.get('/:id', getOne)
productRouter.patch('/:id', updateOne)
productRouter.delete(':/id', deleteOne)




module.exports = productRouter