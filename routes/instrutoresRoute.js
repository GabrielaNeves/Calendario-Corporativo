const { render } = require('ejs')
const { Router } = require('express')
const InstrutorController = require('../controllers/InstrutorController')
const database = require('../models/index')

const router = Router()

router.get('/instrutores', InstrutorController.pegaTodos)
router.post('/instrutores/save', InstrutorController.criaInstrutor)
router.post('/instrutores/apagar', InstrutorController.apagaInstrutor)
router.get('/instrutores/editar/:id', (req, res) => {
    let id = req.params.id
    database.Instrutores.findByPk(id).then(instrutor => {
        res.render('instrutores/editar', {instrutor: instrutor})
    })
})
router.post('/instrutores/atualizar', InstrutorController.atualizaInstrutor)

module.exports = router