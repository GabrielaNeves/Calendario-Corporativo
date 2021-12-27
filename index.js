const express = require('express'); // Importando o Express
const app = express(); // Instanciando o express
<<<<<<< HEAD
const routes = require('./routes')
=======
const bodyParser = require('body-parser'); // Importando o Body-Parser
>>>>>>> 29019774c56faaa5c1737a692c8d4f606ea87a60

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

<<<<<<< HEAD
=======
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


>>>>>>> 29019774c56faaa5c1737a692c8d4f606ea87a60
app.get('/', (req, res) => { // Criando uma rota principal
    res.render('index');
})

routes(app)

app.listen(8080, () => {
    console.log('O servidor está rodando!');
})

module.exports = app