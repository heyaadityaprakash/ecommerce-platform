import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import userModel from '../models/userModel.js'


const createToken=(id)=>{
    return  jwt.sign({id},process.env.JWT_SECRET)
}

// login
const login=async(req,res)=>{
    // res.json({message:"login"})

    try {
        const {email,password}=req.body
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user not exist"})
        }

        const isMatch= await bcrypt.compare(password,user.password)
        if(isMatch){
            const token=createToken(user._id)
            res.json({success:true,token})
        }else{
            return res.json({success:false,message:"invalid details"})
        }
        
    } catch (err) {
        console.log(err,"error login");
        
    }

}

// signup
const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body

        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.json({success:false,message:"user already exists"})
        }

        // check valid email or password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }

        if(!password || password.length<8){
            return res.json({success:false,message:"enter a strong pasword"})
        }


        // create account
        const hashedPassword=await bcrypt.hash(password,12)
        
        const newUser=new userModel({
            name,
            email,
            password:hashedPassword,
        })

        const user=await newUser.save()

        const token=createToken(user._id)
        res.json({success:true,token})

        


    }catch(err){
        console.log(err,"error adding a user");
        
    }

}

// admin login
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credientials"})
        }
    } catch (error) {
        console.log(error,"error admin login");
        
    }
    

}



export {login,register,adminLogin}