exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        pageName: 'index',
    })
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        pageName: 'about',
    })
}

exports.getDashboardPage = (req, res) => {
    res.status(200).render('dashboard', {
        pageName: 'dashboard',
    })
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        pageName: 'register',
    })
}

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        pageName: 'login',
    })
}
