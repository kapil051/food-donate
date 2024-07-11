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
    foodName: {
        type: String,
        required: true,
    },
    description: String,
    quantity: {
        type: Number,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    donatedDate: {
        type: Date,
        default: Date.now,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    foodType: {
        type: String,
        enum: ['Veg', 'Non-Veg'],
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,   
    },
    note: String,
    foodImage: String, 
});




const Users = mongoose.model("Users", userSchema);
const Foods = mongoose.model("Foods", foodSchema);

export { Users, Foods };

