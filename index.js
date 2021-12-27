const express = require('express'); // Importando o Express
const app = express(); // Instanciando o express
const routes = require('./routes')

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

app.get('/', (req, res) => { // Criando uma rota principal
    res.render('index');
})

routes(app)

app.listen(8080, () => {
    console.log('O servidor está rodando!');
})

module.exports = app