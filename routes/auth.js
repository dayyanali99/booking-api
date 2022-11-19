const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register')
const authController = require('../controllers/auth')

router.post('/register', registerController.registerUser)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router;