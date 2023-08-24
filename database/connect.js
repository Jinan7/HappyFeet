const mongoose = require('mongoose')

const connectDB = async (url)=>{
    try{
        const result = await mongoose.connect(url)
        console.log(result)
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB