import express from "express";
import { Foods } from "../db.js";
import zod from "zod";
import authMiddleware from "../middleware.js"; 

const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();

const foodSchema = zod.object({
    foodName: zod.string(),
    description:zod.string().optional(),
    quantity: zod.number().positive(),   
    expiryDate: zod.date(),
    donatedDate: zod.date().default(() => new Date()), 
    pickupLocation:zod.string(),
    foodType:zod.string(),
    phoneNo:zod.string(),
    note:zod.string().optional(),
    foodImage:zod.string().optional(),
});

router.post("/donate", authMiddleware, async (req, res) => {

    try {
    
        if (req.body.expiryDate) {
            req.body.expiryDate = new Date(req.body.expiryDate);
        }

        const validatedData = foodSchema.parse(req.body);

        const userId = req.userId;

        const newFood = new Foods({
              userId,
            ...validatedData,
        });

     
        await newFood.save();

     
        return res.status(201).json({
            msg: "Food donation successfully recorded",
              data: newFood,
        });
    } catch (error) {
     
        if (error instanceof zod.ZodError) {
            return res.status(400).json({
                msg: "Validation error",
                errors: error.errors,
            });
        }

     
        return res.status(500).json({
            msg: "An error occurred while donating food",
            error: error.message,
        });
    }

});

export default router;
