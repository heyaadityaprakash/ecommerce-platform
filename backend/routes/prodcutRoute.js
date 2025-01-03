import express from 'express'
import { addPorduct,removePorduct,singlePorduct,listPorduct } from '../controllers/productController.js'
import upload from '../middlewares/multer.js'
import admniAuth from '../middlewares/adminAuth.js'

const productRouter=express.Router()

productRouter.post('/add',admniAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image1',maxCount:1},{name:'image4',maxCount:1}]),addPorduct)
productRouter.post('/remove',admniAuth,removePorduct)
productRouter.get('/list',admniAuth,listPorduct)
productRouter.get('/single',admniAuth,singlePorduct)

export default productRouter;