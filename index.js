const express = require('express'); // Importando o Express
const app = express(); // Instanciando o express
const routes = require('./routes')
const bodyParser = require('body-parser'); // Importando o Body-Parser

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => { // Criando uma rota principal
    res.render('index');
})

routes(app)

app.listen(8080, () => {
    console.log('O servidor está rodando!');
})

module.exports = app