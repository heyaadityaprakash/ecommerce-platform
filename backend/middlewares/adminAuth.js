import jwt from 'jsonwebtoken'
// admin permissions authenticator


const admniAuth=async(req,res)=>{
    try {
        const {token}=req.headers
        if(!token){
            return res.json({success:false,message:"not authorized"})
        }

        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)

        if(decodeToken !==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"not authorized"})
        }

        next() //allow the actions if the user is admin

    } catch (error) {
        console.log(error);
        
        
    }
}

export default admniAuth;