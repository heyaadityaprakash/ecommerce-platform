import mongoose from "mongoose";

const prodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    image:{type:Array,required:true},
    sizes:{type:Array,required:true},
    bestseller:{type:Boolean},
    date:{type:Number,required:true},


    
})

const prodModel= mongoose.models.product ||mongoose.model("product",prodSchema)
export default prodModel