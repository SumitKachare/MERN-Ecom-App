import express from 'express'
import Product from '../models/productsModel.js'
import asyncHandler from 'express-async-handler'


// @desc Fetch All product
// @route /api/products/
// @access Public
const router = express.Router()

router.get('/' , asyncHandler(async (req,res)=>{
    try {
        const products = await Product.find({})        
        res.json(products)
    } catch (error) {
        res.json({error : "Products not found"})
    }
}))

// @desc Fetch One product
// @route /api/products/:id
// @access Public
router.get('/:id' , asyncHandler(async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    }else{
        res.status(404).json({message : "Product not found!"})
    }
        
    } catch (error) {
        res.json({error : "Product Not Found "})
    }
    
}))

export default router