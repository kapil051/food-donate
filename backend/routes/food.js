import express from "express";
import { Foods, Users } from "../db.js";
import zod from "zod";
import authMiddleware from "../middleware.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const foodSchema = zod.object({
  foodName: zod.string(),
  foodType: zod.string(),
  foodImage: zod.string().optional(),
  description: zod.string().optional(),
  quantity: zod.number().positive(),
  expiryDate: zod.date(),
  donatedDate: zod.date().default(() => new Date()),
  pickupLocation: zod.string(),
  phoneNo: zod.string(),
  note: zod.string().optional(),
});

router.post("/donate", authMiddleware, async (req, res) => {
  try {
    if (req.body.expiryDate) {
      req.body.expiryDate = new Date(req.body.expiryDate);
    }

    const validatedData = foodSchema.parse(req.body);
    const userId = req.userId;

    const user = await Users.findByIdAndUpdate(
      userId,
      {
        $push: {
          activities: {
            action: "donate",
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    );

    const newFood = new Foods({
      userId,
      ...validatedData,
    });

    await newFood.save();

    return res.status(201).json({
      msg: "Food donation successfully recorded",
      data: newFood,
      updated_user: user,
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

router.get("/foodId", async (req, res) => {

  try {

      const fid = req.body._id;

      const food = await Foods.findById(fid);

      if (!food) {
          return res.status(404).json({
              error: "Food item not found"
          });
      }

      return res.status(200).json({
          food
      })



  } catch (e) {

      return res.status(500).json({
          error: "Error during finding food item",
          details: e.message
        });

  }

})

export default router;
