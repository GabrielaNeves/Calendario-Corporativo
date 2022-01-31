# Calendário Corporativo
Este é um projeto desenvolvido na equipe da Autoplay.
Possui como objetivo realizar agendamentos de salas disponíveis de acordo com as datas do calendário presente no site.

⚠️Informamos que este projeto foi descontinuado e será desenvolvido com outros colaboradores em um outro repositório.

⚠️Nesta última release disponibilizada encontra-se somente o crud básico da tela de professores e as interfaces estáticas, além de uma API extra que estávamos trabalhando a parte para realizar o consumo do Front.

# Componentes <br>
Integrantes do grupo:<br>
Gabriela Neves: github.com/GabrielaNeves <br>
Lucas Zortea: github.com/lucas-zortea <br>
José Henrique: github.com/var3sk <br>
...

# Instruções de instalação e utilização<br>

### Clone este repositório ou baixe o zip da nossa última release
$ git clone <https://github.com/GabrielaNeves/Calendario-Corporativo> 

### Acesse o explorador da sua IDE
- Procure a pasta Config
- Vá até o arquivo "config.json"
- Nas linhas 3 e 4 do arquivo, modifique o username e password para os mesmos do seu banco de dados.

### Acesse a pasta do projeto no cmd
$ cd Calendario-Corporativo

### Instale as dependências
$ npm install

### Execute a aplicação 
$ nodemon index.js

O servidor irá iniciar na porta 8080. Abra seu navegador e acesse <http://localhost:8080>


# Caso tenha interesse em testar nossa API a parte <br>

### Acesse a pasta do projeto no terminal/cmd
$ cd Calendario-Corporativo <br>
$ cd cec-api

### Instale as dependências
$ npm install 

### Execute nosso teste automatizado
$ npm test

### Execute o dev
$ npm run dev

### Execute a aplicação
$ npm run typeorm


O servidor irá iniciar na porta 3333 e você pode realizar os teste através do Postman :)
