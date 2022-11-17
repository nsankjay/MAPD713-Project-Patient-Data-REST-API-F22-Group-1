const express = require('express');
const router = express.Router();
const User = require("../model/userModel");

// @desc    User Registration
// @route   http://localhost:3500/api/register
// @access  Public
router.post('/register', async (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    try {
        console.log("regAPI", req.body)
        const userRegister = await newUser.save();
        const {_id} = userRegister._doc;
        return res.status(200).json({ message: "User Successful Registered", _id});
    } catch (error) {
        res.status(500).send({Error: error});
    }
})

module.exports = router;