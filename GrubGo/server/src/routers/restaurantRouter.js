import express from "express";
import { UpdateRestaurantProfile, RestaurantChangePhoto, restaurantResetPassword } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const uploads = multer();

router.put("/update", Protect, UpdateRestaurantProfile);
router.patch("/changePhoto", Protect, uploads.single("image"), RestaurantChangePhoto);
router.patch("/resetPassword", Protect, restaurantResetPassword);

export default router;