import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js"
import foodRouter from "./routes/food.js"
import dotenv from 'dotenv';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
	credentials: true,
}));
app.use("/user", userRouter);
app.use("/food", foodRouter);





app.listen(PORT, () => {
    console.log(`app listning on the port ${PORT}`);
})

