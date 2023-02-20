const express = require('express')
const authController = require('../controller/authController')

const router = express.Router()

router.route('/signup').post(authController.createUser) // current adress : http://localhost:3000/user/signup
router.route('/login').post(authController.loginUser) // current adress : http://localhost:3000/user/login

module.exports = router
