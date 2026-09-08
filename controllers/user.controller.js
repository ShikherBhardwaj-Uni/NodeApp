const User = require("../models/user.model");

// create user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: "User created successfully", user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser };