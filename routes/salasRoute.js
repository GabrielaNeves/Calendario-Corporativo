const { render } = require('ejs')
const { Router } = require('express')
// const InstrutorController = require('../controllers/InstrutorController')
const database = require('../models/index')

const router = Router()

router.get('/salas', (req, res) => {
    res.render('salas/salas')
})
module.exports = router