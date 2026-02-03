import express from "express";
import { UpdateRestaurantProfile, RestaurantChangePhoto, restaurantResetPassword, RestaurantAddMenuItem } from "../controllers/RestaurantController.js";
import { Protect, ManagerProtect } from "../middlewares/authMiddleware.js";



import multer from "multer";

const router = express.Router();
const uploads = multer();

router.put("/update", Protect, UpdateRestaurantProfile);
router.patch("/changePhoto", Protect, uploads.single("image"), RestaurantChangePhoto);
router.patch("/resetPassword", Protect, restaurantResetPassword);
router.post(
    "/addMenuItem",
    Protect,
    ManagerProtect,
    uploads.array("itemImages", 5),
    RestaurantAddMenuItem,
);

export default router;