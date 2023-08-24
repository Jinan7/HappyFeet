const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    image:String,
})


const Products = mongoose.model('Products', productSchema)

module.exports = Products