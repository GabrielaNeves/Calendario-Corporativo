const { Router } = require('express')
const DisciplinaController = require('../controllers/DisciplinaController')
const database = require('../models/index')

const router = Router()

router.get('/disciplinas', DisciplinaController.pegaTodos)

module.exports = router