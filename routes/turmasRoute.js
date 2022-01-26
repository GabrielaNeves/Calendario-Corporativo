const { render } = require('ejs')
const { Router } = require('express')
// const InstrutorController = require('../controllers/InstrutorController')
const database = require('../models/index')

const router = Router()

router.get('/turmas', (req, res) => {
    res.render('turmas/turmas')
})

module.exports = router