import express from 'express'
import dotenv from 'dotenv'

import products from './products.js'
import connectDB from './config/db.js'


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

app.get('/api/products' , (req,res)=>{
    res.send(products)
})

app.get('/api/products/:id' , (req,res)=>{
    res.send(products.find(product => product._id === req.params.id))
})

app.listen( PORT, ()=>{
    console.log(`App Running on Port : ${PORT}`);
})


