const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./database/connect')




const app = express()
dotenv.config() //load environment variables
const port = process.env.PORT   //get port
const mongo_url = process.env.MONGO_URI  //get mongo connection string

app.get('/', (req, res)=>{
    console.log("working")
    return res.send()
})




const start = async (url, port)=>{
    try {
        await connectDB(url)
        app.listen(port, ()=>{
            console.log(`server is listening on ${port}`)
        })
    } catch (e){
        console.log(e)
    }
}

start(mongo_url,port)