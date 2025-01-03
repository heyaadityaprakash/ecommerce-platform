import mongoose, { mongo } from "mongoose";
const connectDB=async()=>{

    mongoose.connection.on('connected',()=>{
        console.log('connected to DB');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/forever`)

}
export default connectDB