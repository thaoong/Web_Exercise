const express=require("express")
const app=express()
const port=3000
const morgan=require("morgan")
app.use(morgan("combined"))
app.get("/", (req,res) => {
    res.send("This is my Restful API service")
})
app.get("/product", (req,res) =>{
    res.send("List Product")
})
app.listen(port,() =>{
    console.log(`My Service start at port ${port}`)
})