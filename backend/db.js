import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoDB = process.env.mongoDB_URI;

async function connectToDB() {
    try {
        await mongoose.connect(mongoDB);
        console.log("successfully connected to the database");
    } catch (e) {
        console.log("error while connection", e);
    }
}

connectToDB();

const activitySchema = new mongoose.Schema({
    action: String,
    timestamp: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    contact: String,
    address: String,
    password: String,
    confirmPassword: String,
    activities: [activitySchema], 
});

const foodSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    foodName: String,
    description: String,
    quantity: Number,
    expiryDate: Date,
    donatedDate: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", userSchema);
const Foods = mongoose.model("Foods", foodSchema);

export { Users, Foods };

