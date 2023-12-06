// controllers/AuthController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.registerUser = async function (req, res) {
  try {
    const { username, email, accountType, password } = req.body;

    // Check if the user with the same username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      // User with the same username or email already registered
      return res.status(400).json({
        message:
          "Username or email already exists. Please choose different credentials.",
      });
    }

    // If the user does not exist, proceed with registration
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      accountType,
      password
    });
    await newUser.save();

    // Registration successful
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// exports.loginUser = async function (req, res) {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       console.log(existingUser);
//       return res.status(401).json({ message: "Invalid email " });
//     }

//     console.log("Entered Password:", password);
//     console.log("Stored Password:", existingUser.password);

//     // const passwordMatch = await bcrypt.compare(password, existingUser.password);
//     const passwordMatch = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     console.log("Password Match:", passwordMatch);

//     // console.log(
//     //   "Entered Password (Hashed):",
//     //   await bcrypt.hash(password.trim(), 10)
//     // );
//     console.log("Stored Password (Hashed):", existingUser.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Invalid  password" });
//     }

//     const token = generateToken(existingUser.email);

//     res.status(200).json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// exports.loginUser = async function (req, res) {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       // No user found with the provided email
//       return res.status(401).json({ message: "Invalid email" });
//     }

//     // Compare the entered password with the stored hashed password
//     const passwordMatch = await bcrypt.compare(password, existingUser.password);

//     if (!passwordMatch) {
//       // Password does not match
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Generate a token for the user
//     const token = generateToken(existingUser.email);

//     // Login successful, return the token
//     res.status(200).json({ token });
//   } catch (error) {
//     // Handle any errors during the login process
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    // Compare plain-text password directly (not recommended for production)
    if (password !== existingUser.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(existingUser.email);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
