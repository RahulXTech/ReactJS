const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


// REGISTER STUDENT
const registerStudent = async (req, res) => {
  try {
    const {
      name,
      enrollmentNumber,
      password,
      course,
      branch,
      year,
      fees,
    } = req.body;

    const studentExists = await Student.findOne({
      enrollmentNumber,
    });

    if (studentExists) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const student = await Student.create({
      name,
      enrollmentNumber,
      password: hashedPassword,
      course,
      branch,
      year,
      fees,
    });

    res.status(201).json({
      message: "Student Registered",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// LOGIN STUDENT
const loginStudent = async (req, res) => {
  try {
    const { enrollmentNumber, password } = req.body;

    const student = await Student.findOne({
      enrollmentNumber,
    });

    if (!student) {
      return res.status(400).json({
        message: "Invalid Enrollment Number",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      student.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      token: generateToken(student._id),
      student: {
        id: student._id,
        name: student.name,
        enrollmentNumber: student.enrollmentNumber,
        course: student.course,
        branch: student.branch,
        year: student.year,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET PROFILE
const getProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.student._id).select(
      "-password"
    );

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET FEE REPORT
const getFeeReport = async (req, res) => {
  try {
    const student = await Student.findById(req.student._id).select(
      "fees name enrollmentNumber"
    );

    res.status(200).json({
      name: student.name,
      enrollmentNumber: student.enrollmentNumber,
      fees: student.fees,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  loginStudent,
  getProfile,
  getFeeReport,
};