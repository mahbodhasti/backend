const errorHandler = (req,res,next)=>{
const statusCode = res.statusCode ? statusCode:500

res.status(statusCode)
res.json({
    message : errorHandler.message,
    stack: process.env.NODE_ENV ==='production'?null:err.stack
})

}

module.exports ={
    errorHandler,
}