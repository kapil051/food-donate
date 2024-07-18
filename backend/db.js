import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to the database");
    } catch (e) {
        console.log("Error while connecting to the database", e);
    }
}

connectToDB();

const activitySchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    contact: String,
    address: String,
    password: {
        type: String,
        required: true,
    },
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
    pickupTime: {
        type: String,
        required: true,
    },
    foodType: {
        type: String,
        enum: ['veg', 'nonveg'],
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
