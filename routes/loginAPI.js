const express = require('express');
const router = express.Router();
const User = require("../model/userModel");

// @desc    User Login
// @route   http://localhost:3500/api/login
// @access  Public
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(200).json({ message: "Authentication Successful"});
        }
    } catch (error) {
        res.status(500).send({Error: error});
    }
})

module.exports = router;