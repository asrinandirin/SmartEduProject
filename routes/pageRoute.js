const express = require('express')
const pageController = require('../controller/pageController')

const router = express.Router()

router.route('/').get(pageController.getIndexPage);
router.route('/index').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/dashboard').get(pageController.getDashboardPage);
router.route('/register').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);
module.exports = router;
