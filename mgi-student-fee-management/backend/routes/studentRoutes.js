const express = require("express");

const router = express.Router();

const {
  registerStudent,
  loginStudent,
  getProfile,
  getFeeReport,
} = require("../controllers/studentController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerStudent);

router.post("/login", loginStudent);

router.get("/profile", protect, getProfile);

router.get("/fees", protect, getFeeReport);

module.exports = router;