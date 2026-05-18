import express from "express"
import {sigupUser, loginUserController} from "../controllers/authController.js"

const router = express.Router();

router.post('/signup', sigupUser);
router.post('/login', loginUserController);

export default router;