
import express from "express";
import { signup, login, updateProfile } from "../controllers/authController.js";
import { userauth } from "../middleware/authMiddelware.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/updateProfile', userauth, updateProfile);

export default router;