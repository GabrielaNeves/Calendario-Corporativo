const { render } = require('ejs')
const { Router } = require('express')
// const InstrutorController = require('../controllers/InstrutorController')
const database = require('../models/index')

const router = Router()

router.get('/turma', (req, res) => {
    res.render('turma/turma')
})
module.exports = router