import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js"
import foodRouter from "./routes/food.js"



const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/food",foodRouter);





app.listen(port, () => {
    console.log(`app listning on the port ${port}`);
})

