require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./database/connect')
const productRouter = require('./routers/productRouters')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const authRouter = require('./routers/authRouter')
const cookieParser = require('cookie-parser')
const auth = require('./middlewares/auth')
const userRouter = require('./routers/userRouter')
const fileUpload = require('express-fileupload')
const reviewRouter = require('./routers/reviewRouter')
const orderRouter = require('./routers/orderRouters')
const { readFileSync } = require('fs')
const Products = require('./models/productModel')
const path = require('path')


const app = express()
dotenv.config() //load environment variables
const port = process.env.PORT   //get port
const mongo_url = process.env.MONGO_URI  //get mongo connection string
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
app.use('/api/v1/products', productRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',auth, userRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('api/v1/orders', auth, orderRouter)
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})
app.use(notFound)


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