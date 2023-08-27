const express = require('express')
const { getOne } = require('../controllers/reviewController')
const { getAll } = require('../controllers/reviewController')
const { createOne } = require('../controllers/reviewController')
const { deleteOne } = require('../controllers/reviewController')
const { updateOne } = require('../controllers/reviewController')
const auth = require('../middlewares/auth')

const reviewRouter = express.Router()

reviewRouter.get('/', getAll)
reviewRouter.get('/:id', getOne)
reviewRouter.post('/', auth, createOne)
reviewRouter.patch('/:id', updateOne)
reviewRouter.delete('/:id', deleteOne)



module.exports = reviewRouter