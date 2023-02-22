const express = require('express')
const authController = require('../controller/authController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/signup').post(authController.createUser) // current adress : http://localhost:3000/users/signup
router.route('/login').post(authController.loginUser) // current adress : http://localhost:3000/users/login
router.route('/logout').get(authController.logOutUser) // current adress : http://localhost:3000/users/logout
router.route('/dashboard').get(authMiddleware,authController.getDashboardPage) // current adress : http://localhost:3000/users/dashboard
 
module.exports = router
