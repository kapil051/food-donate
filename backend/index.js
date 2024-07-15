import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js"
import foodRouter from "./routes/food.js"

const corsOptions={
    origin:"http://localhost:5173",
    methods:'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials:true,
}

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(corsOptions));
app.use("/user", userRouter);
app.use("/food",foodRouter);





app.listen(port, () => {
    console.log(`app listning on the port ${port}`);
})

