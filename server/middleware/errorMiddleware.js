export const notFound = (req , res , next)=>{
    const error = new Error(`Page Not Found at ${req}`)
    res.json({error : error.message})
    next(error)
}

