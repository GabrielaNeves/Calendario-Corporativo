const database = require('../models/index')
const slugify = require('slugify')

class InstrutorController {
    static async pegaTodos(req, res) {
        try{
            await database.Instrutores.findAll().then(instrutores => {
                res.render('instrutores/instrutores', {instrutores: instrutores})

            })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUm(req, res) {
        const { id } = req.params
        try {
            const umInstrutor = await database.Instrutores.findByPk( {
                where: {
                    id: Number(id)
                }
            })
            return umInstrutor
        } catch (error){
            console.log(error)
            // return res.status(500).json(error.message)
        }
    }

    static async criaInstrutor(req, res) {
        // const { nome, contato, apelido, cargo, email } = req.body
        const nome = req.body.nome
        const contato = req.body.contato
        const apelido = req.body.apelido
        const cargo = req.body.cargo
        const email = req.body.email
        try{
            await database.Instrutores.create({
                nome: nome,
                slug: slugify(nome),
                contato: contato,
                apelido: apelido,
                cargo: cargo,
                email: email
            }).then(() => {
                res.redirect('/instrutores')
            })
        }catch (error){
            console.log(error)
            // return res.status(500).json(error.message)
        }
    }

    static async apagaInstrutor(req, res) {
        const id = req.body.id
        try {
            await database.Instrutores.destroy( {
                where: {
                    id: Number(id)
                }
            }).then(() => {
                res.redirect('/instrutores')
            })
        }catch (error){
            console.log(error)
            // return res.status(500).json(error.message)
        }
    }

    static async atualizaInstrutor(req, res) {
        const id = req.body.id
        const nome = req.body.nome
        const contato = req.body.contato
        const apelido = req.body.apelido
        const cargo = req.body.cargo
        const email = req.body.email
        try {
            await database.Instrutores.update({
                nome: nome,
                slug: slugify(nome),
                contato: contato,
                apelido: apelido,
                cargo: cargo,
                email: email
            }, {
                where: {
                    id: Number(id)
                }
            }).then(() => {
                res.redirect('/instrutores')
            })
        }catch (error){
            return res.status(500).json(error)
        }
    }
}

module.exports = InstrutorController