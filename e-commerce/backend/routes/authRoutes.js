import express from "express"
import {sigupUser} from "../controllers/authController.js"

const router = express.Router();

router.post('/signup', sigupUser);

export default router;