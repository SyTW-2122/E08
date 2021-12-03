const authMethods = {}
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

authMethods.singup = async (req, res) => {
    const { username, password } = req.body;

    const newUser = new userModel({
        username, password
    });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save()
    res.json({
        status: true,
        message: 'User register'
    });
}

authMethods.singin = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });
    if (!user) {
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
    }
    const autenticate = await user.confirmPassword(password);
    if (!autenticate) {
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
    }
    const token = jwt.sign(user._id.toString(), process.env.SECURE_KEY);
    if (!token) {
        return res.json({
            auth: false,
            message: 'There was a problem, try it again'
        })
    }
    return res.json({
        auth: true,
        token: token
    })
}

module.exports = authMethods;