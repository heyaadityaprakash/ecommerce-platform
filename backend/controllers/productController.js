import { v2 } from 'cloudinary';
import  cloudinary from 'cloudinary';
import { json } from 'express';
import productModel from '../models/prodModel.js';
const addPorduct=async(req,res)=>{
    try {
        const {name,description,price,category,subcategory,sizes,bestseller}=req.body

        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];
        const image3=req.files.image3 && req.files.image3[0];
        const image4=req.files.image4 && req.files.image4[0];
        
        const images=[image1,image2,image3,image4].filter((item)=>{item!==undefined})
        // uploading the images on cloudinary

        let imagesURL=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.UploadStream.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )

        const productData={
            name,
            description,
            price:Number(price),
            category,
            subcategory,
            sizes:JSON.parse(sizes),
            bestseller:Boolean(bestseller),
            images:imagesURL,
            date:Date.now()
        }
        console.log(productData);
        
        const product=new productModel(productData)
        await product.save()
        
        // console.log(name,description,price,category,subcategory,sizes,bestseller);
        // console.log(imagesURL);
        
        res.json({success:true,message:'Product added successfully'})
        
    } catch (error) {
        console.log(error);
        
        
    }

}
const removePorduct=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"product deleted"})
    } catch (error) {
        console.log(error,"failed to delete");
        
    }
    
}

const listPorduct=async(req,res)=>{
    try {
        const products=await productModel.find({})
        res.json({success:true,products})
    } catch (error) {
        console.log(error,"failed to list products");
        
    }
   
    
}

const singlePorduct=async(req,res)=>{
    try {
        const {productId}=req.body
        const product=await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        
        
    }
    
}


export {addPorduct,removePorduct,listPorduct,singlePorduct}

