const express = require('express')
const app = express()
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')
const session = require('express-session');
const MongoStore = require('connect-mongo');


//CONNECT DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/smartedu-db').then(() => {
  console.log('DB Connected')
})

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

//Global Variable
global.userIn = null;


// PORT
const port = 3000

// MIDDLEWARE

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  session({
    secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/smartedu-db' })
  })
);


// ROUTES
app.use('*', (req, res, next) => {
  userIn = req.session.userID;
  next();
})
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)


// LISTEN
app.listen(port, () => {
  console.log('Server Started')
})
