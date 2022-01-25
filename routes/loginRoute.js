const { render } = require('ejs')
const { Router } = require('express')
const database = require('../models/index')

const router = Router()

router.get('/login', (req, res) => {
    res.render('login/login')
})

module.exports = router