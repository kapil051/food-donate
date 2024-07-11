import express from "express";
const router = express.Router();
import { Users } from "../db.js";
import zod from "zod";
import jwt from "jsonwebtoken";


import dotenv from 'dotenv';
dotenv.config();


const  JWT_SECRET=process.env.JWT_SECRET;


const signupBody = zod.object({

    name: zod.string(),
    email: zod.string().email(),
    gender: zod.string(),
    contact: zod.string(),
    address: zod.string(),
    password: zod.string(),
    confirmPassword: zod.string(),

})


router.post("/signup", async (req, res, next) => {

    try {

        const { success } = signupBody.safeParse(req.body);

        if (!success) {
            return res.status(411).json({
                "msg": "incorrect inputs"
            })

        }

        const existingUser=await Users.findOne({
            email:req.body.email
       })   

       if(existingUser){

           return res.status(411).json({
                "msg":"user already present"
             })

        }

        const user= await Users.create({
            name:req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            contact:req.body.contact,
            address:req.body.address,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword,
         })

         const token=jwt.sign({
            userId:user._id,
         },JWT_SECRET);

         return res.json({
            "msg":"user created successfully",
                user:user,
                token:token,
         })

    } catch (e) {
            console.log("error while signup",e);
             
               return res.json({
                  "msg":"error while signup",
               })
    }  

})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
})

router.post("/signin",(req,res)=>{

})

export default router;