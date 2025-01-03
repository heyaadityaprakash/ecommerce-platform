import express from 'express'
import { adminLogin, login, register } from '../controllers/userController.js'


const userRouter=express.Router()


userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.post('/adminlogin',adminLogin)


export default userRouter

