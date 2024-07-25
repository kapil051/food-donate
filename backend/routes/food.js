import express from "express";
import { Foods, Users } from "../db.js";
import zod from "zod";
import authMiddleware from "../middleware.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// {
//     "foodName": "Rice",
//     "foodType": "veg",
//     "description": "A bag of rice",
//     "quantity": 10,
//     "expiryDate": "2024-08-01",
//     "pickupLocation": "123 Main St, City",
//     "pickupTime":"before 10pm",
//     "phoneNo": "1234567890",
//     "note": "Handle with care"
// }

const foodSchema = zod.object({
    foodName: zod.string(),
    foodType: zod.string(),
    foodImage: zod.string().optional(),
    description: zod.string().optional(),
    quantity: zod.number().positive(),
    expiryDate: zod.date(),
    donatedDate: zod.date().default(() => new Date()),
    pickupLocation: zod.string(),
    pickupTime: zod.string(),
    phoneNo: zod.string(),
    note: zod.string().optional(),
});

router.post("/donate", authMiddleware, async (req, res) => {
    try {
     
        if (req.body.expiryDate) {
            const expiryDate = new Date(req.body.expiryDate);
            expiryDate.setHours(23, 59, 59, 999);
            const offset = 5.5 * 60 * 60 * 1000;
            const expiryDateInIST = new Date(expiryDate.getTime() + offset);
            req.body.expiryDate = expiryDateInIST;
        }


        const validatedData = foodSchema.parse(req.body);
        const userId = req.userId;

        const newFood = new Foods({
                userId,
            ...validatedData,
        });

        await newFood.save();

        const user = await Users.findByIdAndUpdate(
            userId,
            {
                $push: {
                    activities: {
                        action: "donate",
                        food:newFood,
                        timestamp: new Date(),
                    },
                },
            },
            { new: true }
        );

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

router.post("/request/:foodId",authMiddleware,async(req,res)=>{

      try{

                   const foodId=req.params.foodId;
                 const food=await Foods.findById(foodId);  

                  const donor=await Users.findById(food.userId);
                     const all_activity=donor.activities;

                     const idx = all_activity.findIndex(activity => activity.food._id.toString() === foodId);

                           console.log("idx:",idx);
                        //   all_activity[idx].is_delivered=true;
           
               return res.status(200).json({
                     idx,
                     donor,
                   msg:"success"
               })

      }catch(e){
            console.log(e.message);
        return res.status(200).json({
            msg:"error"
        })
      }

})

router.get('/allfoods', async (req, res) => {
    try {
        const today = new Date();
        today.setHours(23, 58, 58, 999); 
        const offset = 5.5 * 60 * 60 * 1000; 
        const todayInIST = new Date(today.getTime() + offset);

        const foods = await Foods.find({ expiryDate: { $gte: todayInIST } });
        return res.status(200).json(foods);
    } catch (error) {
        console.error("error: ", error);
        return res.status(500).json({ error: "An error occurred while retrieving foods" });
    }
});



router.get("/detail/:foodId", async (req, res) => {
    try {
        const fid = req.params.foodId;  

        const food = await Foods.findById(fid);

        if (!food) {
            return res.status(404).json({
                error: "Food item not found"
            });
        }

        return res.status(200).json({
            food
        });

    } catch (e) {
        return res.status(500).json({
            error: "Error during finding food item",
            details: e.message
        });
    }
});


export default router;
