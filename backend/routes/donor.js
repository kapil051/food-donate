import express from "express"

const router=express.Router();



router.post("/signup",async (req,res)=>{
    return res.json({
        "msg":"hello from donor signup"
    })
})



router.post("/signin",async (req,res)=>{
    return res.json({
        "msg":"hello from donor signin"
    })
})



export default router;