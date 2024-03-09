const User = require('../models/User');
const mongoose = require('mongoose');


async function loginUser(req, res) {
    res.json({message: "Login user"})
}


module.exports = { loginUser };