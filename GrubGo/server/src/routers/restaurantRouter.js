import express from "express";
import { 
  UpdateRestaurantProfile, 
  RestaurantChangePhoto, 
  restaurantResetPassword, 
  RestaurantAddMenuItem, 
  GetRestaurantMenuItem 
} from "../controllers/RestaurantController.js";
import { Protect, ManagerProtect } from "../middlewares/authMiddleware.js";

import multer from "multer";

const router = express.Router();
const uploads = multer();

router.put("/update", Protect, UpdateRestaurantProfile);
router.patch("/changePhoto", Protect, uploads.single("image"), RestaurantChangePhoto);
router.patch("/resetPassword", Protect, restaurantResetPassword);

// ADD THIS ROUTE BELOW TO FIX THE 404 ERROR
router.post(
    "/addMenuItem", 
    Protect, 
    ManagerProtect, 
    uploads.array("itemImages"), // Matches the 'itemImages' field in your Frontend FormData
    RestaurantAddMenuItem
);

router.get(
    "/menuItems",
    Protect,
    ManagerProtect,
    GetRestaurantMenuItem,
);

export default router;