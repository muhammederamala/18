const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const Student = require("../models/Student");

exports.postAddStudent = async (req, res, next) => {
  try {
    const userId = req.user.userId
    const { name, email, phone, grade } = req.body;

    await Student.create({
      name: name,
      email: email,
      phone: phone,
      standard: grade,
      adminId: userId
    });

    res.status(201).json({ message: "Student Created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.postGetAllStudents = async (req,res,next) =>{
    try {
        const userId = req.user.userId
        const students = await Student.findAll({
            where:{
                adminId: userId
            }
        });
        res.status(200).json({ students });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
}