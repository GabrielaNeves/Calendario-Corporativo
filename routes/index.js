const bodyParser = require('body-parser'); // Importando o Body-Parser
const login = require('./loginRoute')
const instrutores = require('./instrutoresRoute')
const salas = require('./salasRoute')
const disciplinas = require('./disciplinasRoute')
const path = require('path')


module.exports = app => {
    //Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(login)
    app.use(disciplinas)
    app.use(instrutores)
    app.use(salas)
    app.get('/', (req, res) => res.render('index'))
}