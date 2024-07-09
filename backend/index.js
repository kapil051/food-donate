import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js"

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);


const mongoDB = process.env.mongoDB_URI;



async function connectToDB() {
 
       try{
        await mongoose.connect(mongoDB);
        console.log("successfully connected to the database");
       }catch(e){
           console.log("error while connection",e);
       }
     
   
}

connectToDB();

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    contact:String,
    address:String,
    password:String,
    confirmPassword: String, 
})

   const Users=mongoose.model("Users",userSchema);
   export { Users };



app.listen(port, () => {
    console.log(`app listning on the port ${port}`);
})

