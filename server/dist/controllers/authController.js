import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
// @desc    Register a new user
// @route   POST /api/auth/
// @access  Public
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Validate input
        if (!username || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        // Create new user
        const newUser = await User.create({ username, email, password });
        // Generate token for immediate login
        const token = jwt.sign({ id: newUser._id, username: newUser.username, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        // Return token and user info (excluding password)
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            },
        });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// @desc    Login a user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ token });
    }
    catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// @desc    Logout a user
// @route   POST /api/auth/logout
// @access  Public
export const logoutUser = async (_req, res) => {
    // Invalidate the token or handle logout logic
    res.json({ message: "User logged out successfully" });
};
// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            }
        });
    }
    catch (error) {
        console.error('Error getting current user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
//# sourceMappingURL=authController.js.map