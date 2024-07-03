import express from "express";
import cors from "cors";
import donorRouter from "./routes/donor.js"
import volunteerRouter from "./routes/volunteer.js"

  const app=express();
  const port=3000;

  app.use(express.json());
  app.use(cors());


  app.use("/donor",donorRouter);
  app.use("/volunteer",volunteerRouter);


  app.listen(port,()=>{
    console.log(`app listning on the port ${port}`);
  })
