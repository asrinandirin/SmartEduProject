const Course = require('../models/Course')
const Category = require('../models/Category')

exports.getAllCourse = async (req, res) => {
    try {
        const categorySlug = req.query.categories
        const category = await Category.findOne({ slug: categorySlug })
        let filter = {}
        if (categorySlug) {
            filter = { category: category._id }
        }

        const courses = await Course.find(filter)
        const categories = await Category.find()

        res.status(201).render('courses', {
            courses,
            categories,
            pageName: 'courses',
        })
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            error,
        })
    }
}

exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug })

        res.status(201).render('course', {
            course,
            pageName: 'courses',
        })
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            error,
        })
    }
}

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body)
        res.status(201).json({
            status: 'Success',
            course,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Error',
            error,
        })
    }
}
