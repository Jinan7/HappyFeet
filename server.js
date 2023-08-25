require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./database/connect')
const productRouter = require('./routers/productRouters')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const authRouter = require('./routers/authRouter')




const app = express()
dotenv.config() //load environment variables
const port = process.env.PORT   //get port
const mongo_url = process.env.MONGO_URI  //get mongo connection string
app.use(express.json())
app.use('/api/v1/products', productRouter)
app.use('/api/v1/auth', authRouter)
app.use('*', notFound)
app.use(errorHandler)




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