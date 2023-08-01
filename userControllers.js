const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    
  

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

exports.signInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

exports.authenticateToken = (req, res, next) => {
  // Exclude authentication check for the "createUser" and "signInUser" routes
  if (req.path === "/createUser" || req.path === "/signInUser") {
    return next();
  }

  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authorizationHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, "your-secret-key");
    const userId = decodedToken.userId;
    req.user = { userId }; // Set the user object in the request

    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.user; // Access the userId from req.user
    const { username, email, password } = req.body;

    // Check if the token is true (authenticated)
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the user by userId and update their information
    const user = await User.findByIdAndUpdate(
      userId,
      { username, email, password },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.user; // Access the userId from req.user

    // Check if the token is true (authenticated)
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Find the user by userId and delete them
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
};
