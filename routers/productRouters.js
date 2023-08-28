const express = require('express')
const { getAll, getOne, createOne, updateOne, deleteOne, uploadImage } = require('../controllers/productController')
const auth = require('../middlewares/auth')
const productRouter = express.Router()




productRouter.get('/', getAll)
productRouter.post('/', createOne)
productRouter.post('/uploadImage', uploadImage)
productRouter.get('/:id', getOne)
productRouter.patch('/:id', updateOne)
productRouter.delete(':/id', deleteOne)




module.exports = productRouter