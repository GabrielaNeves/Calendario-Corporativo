const database = require('../models/index')
const slugify = require('slugify')

class DisciplinaController {
    static async pegaTodos(req, res) {
        try{
            await database.Disciplinas.findAll().then(disciplinas => {
                res.render('disciplinas/disciplinas', {disciplinas: disciplinas})
            })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = DisciplinaController