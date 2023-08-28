const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "please provide product name"]
    },
    price:{
        type:Number,
        required:[true, 'Please provide product price'],
        default: 0
    },
    image:{
        type:String,
        default:"/uploads/usama-akram-g3CMh2nqj_w-unsplash.jpg",
    },
    description:String,
    size:{
        type:Number
    },
    brand:{
        type:String,
        enum:['adidas','nike','puma','new-balance', 'under armour', 'converse', 'vans', 'reebok']
    },
    colors:{
        type:[String],
        default:['#222'],
        required:true,
    },
    featured:{
        type:Boolean,
        default:false
    },
    freeShipping:{
        type:Boolean,
        default:false,
    },
    inventory:{
        type:Number,
        required:true,
        default:15,
    },
    averageRating:{
        type:Number,
        default:0,
    },

},{timestamps:true})


const Products = mongoose.model('Product', productSchema)

module.exports = Products