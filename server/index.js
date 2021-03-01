import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound} from './middleware/errorMiddleware.js'


const app = express()
const PORT = process.env.PORT || 5000
connectDB()

dotenv.config()

app.get("/" , (req , res)=>{
    res.send({
        name : "Sumit",
        age : 22
    })
})

app.use('/api/products' , productRoutes)
app.use(notFound)

app.listen( PORT, ()=>{
    console.log(`App Running on Port : ${PORT}`);
})


