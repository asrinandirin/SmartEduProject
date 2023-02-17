const express = require('express')
const courseController = require('../controller/courseController')

const router = express.Router()

router.route('/').post(courseController.createCourse) // current adress : http://localhost:3000/courses
router.route('/').get(courseController.getAllCourse) // current adress : http://localhost:3000/courses
router.route('/:slug').get(courseController.getCourse) // current adress : http://localhost:3000/courses/id
module.exports = router;
