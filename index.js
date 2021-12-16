const express = require('express'); // Importando o Express
const app = express(); // Instanciando o express
const bodyParser = require('body-parser'); // Importando o Body-Parser
const connection = require('./database/database') // Importando a Conexão com o Banco de dados

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection.authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso');
    }).catch((erro) => {
        console.log(erro);
    })

app.get('/', (req, res) => { // Criando uma rota principal
    res.render('index');
})

app.listen(8080, () => {
    console.log('O servidor está rodando!');
})