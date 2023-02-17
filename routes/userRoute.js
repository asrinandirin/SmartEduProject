const express = require('express')
const userController = require('../controller/authController')

const router = express.Router()

router.route('/signup').post(userController.createUser) // current adress : http://localhost:3000/users/signup

module.exports = router
