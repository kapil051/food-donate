import express from "express";
import cors from "cors";
import donorRouter from "./routes/donor.js"
import volunteerRouter from "./routes/volunteer.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/donor", donorRouter);
app.use("/volunteer", volunteerRouter);

const mongoDB = process.env.mongoDB_URI;

//database connection

async function connectToDB() {
    await mongoose.connect(mongoDB);
    console.log("successfully connected to the database");
}

connectToDB();

const donorSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
})

const volunteerSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
})

   const donor=mongoose.model("donor",donorSchema);
   const volunteer=mongoose.model("volunteer",volunteerSchema);


   export { donor, volunteer };



app.listen(port, () => {
    console.log(`app listning on the port ${port}`);
})

