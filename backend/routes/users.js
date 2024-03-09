const express = require('express');
require('dotenv').config()

const router = express.Router();
const { loginUser } = require('../controllers/userController');

router.post('/login', loginUser);


module.exports = router;