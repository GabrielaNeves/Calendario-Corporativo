const bodyParser = require('body-parser'); // Importando o Body-Parser
const instrutores = require('./instrutoresRoute')
const path = require('path')


module.exports = app => {
    //Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(instrutores)
    app.get('/', (req, res) => res.render('index'))
}