const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

exports.postSignup = async (req, res, next) => {
  try {
    const { firstName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      name: firstName,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "Account created" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      where: {
        email: email,
      },
    });

    if (!admin) {
      return res.status(401).json({ message: "user not found" });
    }
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
      const token = jwt.sign({ userId: admin.id }, "jwt-key", {
        expiresIn: "5d",
      });

      res.status(200).json({ message: "Login successful", token: token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
