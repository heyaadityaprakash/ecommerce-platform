import express from 'express'
import cors from 'cors'
import'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloundinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/prodcutRoute.js'

const app=express()
const port=process.env.PORT || 4000

connectDB()
connectCloundinary()

// middleware
app.use(express.json())
app.use(cors()) //access backend from frontend


// api

app.get('/',(req,res)=>{
    res.send("api online")

})


app.use('/api/user',userRouter)

app.use('/api/product',productRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})