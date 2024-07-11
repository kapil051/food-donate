import dotenv from "dotenv"
import jwt from "jsonwebtoken";

      dotenv.config();

const JWT_SECRET=process.env.JWT_SECRET;      


const authMiddleware=(req,res,next)=>{

         const authHeader=req.headers.authorization;

            if(!authHeader||!authHeader.startsWith('Bearer')){
                  return res.status(403).json({
                        "msg":"false"
                  });
            }

           const token=authHeader.split(' ')[1];
      
        try{
              const decode=jwt.verify(token,JWT_SECRET);

                 if(decode.userId){
                    req.userId=decode.userId;
                        next();
                 }else{
                    return res.status(403).json({
                        msg: "Invalid token: userId missing",
                    });
                 }
                      
        }catch(e){
            return res.status(403).json({
                msg: "Token verification failed",
            });
        }

}

export default authMiddleware;
