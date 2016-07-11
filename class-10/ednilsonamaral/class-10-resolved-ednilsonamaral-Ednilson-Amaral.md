# Node.js - Aula 10 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral  
**data:** 1468266682866


## Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para URL/404.

```js
'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hey, YOW!!');
});

// page de not found
app.get('/not-found', function(req, res) {
    res.status(404).send('Sorry, page not found! =(');
});

// enviando not found para a página de não encontrado
app.get('/*', function(req, res) {
    res.redirect('/not-found');
})

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo onde seja passado o retorno, podendo ser *String* ou *Buffer*, caso seja *String* definir cabeçalho correto mesmo usando `res.send`.

```js
'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.set({'Content-Type': 'text/html'});
    res.send(new Buffer('Oi, bufferzinho! :)'));
});

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo para renderização de views, onde o mesmo recebe o caminho para a view e o tipo do template engine, para retornar a view corretamente.

```js
'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Be MEAN',
        message: 'Welcome to Be MEAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });
});

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
```


## Criar um módulo para entrega de arquivos, onde o mesmo recebe o caminho para o arquivo e o tipo do arquivo, para retornar o arquivo corretamente.

`modules/SendFiles.js`
```js
'use strict';

module.exports = function(req, res) {
    const options = {
        root: __dirname + '/_public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.params.name;
    const fileType = req.params.type;

    switch (fileType){
        case 'png':
            res.set({'Content-Type': 'image/png'});
            fileName = fileName +'.'+fileType;
            break;
        default:
            res.status(400).send('Arquivo não suportado!');
            break;
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
};
```


`app-sendFiles.js`
```js
'use strict';

const express = require('express');
const app = express();
const SendFiles = require('./modules/SendFiles');

app.get('/file/:name/:type', function(req, res, next) {
    return SendFiles(req, res);
});

app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
```


## Criar uma busca, dos Pokemons, com o Mongoose, que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:  

- html  
- json  

- *ps: Não esquecer do link para `previous` e `first` quando necessários.*  

- rota: /pokemons  
- 3 páginas


`db/config.js`
```js
'use strict';

const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/be-mean';

mongoose.connect(uriDB);

mongoose.connection.on('connected', function(){
    console.log("Mongo default connection connected to " + uriDB);
});

mongoose.connection.on('error', function(err){
    console.log("Mongo default connection error" + err);
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongo default connection disconnected");
});

mongoose.connection.on('open', function(){
    console.log("Mongo default connection open");
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("The connection is closed");
        process.exit(0);
    });
});
```


`model.js`
```js
'use strict';

module.exports = function(Schema, Model) {
    const mongoose = require('mongoose');
    return mongoose.model(Model, Schema);    
}
```


`schema.js`
```js
'use strict';

const mongoose = require('mongoose');

const _schema = {
    name: {type: String, required: true},
    attack: {type: Number, default : 0},
    defense: {type: Number},
    height: {type: Number },
    created: {type: Date},
    hp: {type: Number},
    speed: {type: Number},
    types: []
};

const PokemonSchema = new mongoose.Schema(_schema);

module.exports = PokemonSchema;
```


`pagination.js`
```js
'use strict';

const formatandoHTML = function(data) {
    let html = '';

    data.forEach(function(pokemonItem, index, arr) {
        console.log(pokemonItem);

        html = html + '<ul>';
            html = html + '<li>' + new Date(pokemonItem.created) + '</li>';
            html = html + '<li>' + pokemonItem.defense + '</li>';
            html = html + '<li>' + pokemonItem.height + '</li>';
            html = html + '<li>' + pokemonItem.name + '</li>';
            html = html + '<li>' + pokemonItem.speed + '</li>';
            html = html + '<li>' + pokemonItem.types.join(" // ") + '</li>';
            html = html + '<li>' + pokemonItem.attack + '</li>';
        html = html + '</ul>';
    });

    return html;
};

module.exports = function(err, data, numPage, maxPages, res) {
    if(err) {
        console.log(err);
        res.status(404, err).end();
    }

    if(numPage === 1){
        res.links({
            next: 'http://localhost:3000/pokemons?page='+ Number(numPage + 1),
            last: 'http://localhost:3000/pokemons?page='+ maxPages
        });
    } else if (numPage > 1 && numPage < maxPages){
        res.links({
            first: 'http://localhost:3000/pokemons?numPage=1',
            previous: 'http://localhost:3000/pokemons?numPage='+ (numPage - 1),
            next: 'http://localhost:3000/pokemons?numPage='+ (numPage + 1),
            last: 'http://localhost:3000/pokemons?numPage='+ maxPages
        });
    } else if (numPage === maxPages){
        res.links({
            first: 'http://localhost:3000/pokemons?numPage=1',
            previous: 'http://localhost:3000/pokemons?numPage='+ (numPage - 1)
        });
    }

    res.format({
        'text/html' : function() {
            const html = formatandoHTML(data);
            res.type('html');
            res.send(html);
        },
        'application/json' : function() {
            res.type('json');
            res.json(data);
        },
        'default' : function() {
            res.status(406).send('Formato não suportado! Sorry!');
        }
    });
}
```


`find.js`
```js
'use strict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'Pokemons');
const Pagination = require('./pagination');

const findPokemon = function(req, res, query){
    Model.count({}, (err, count) => {
        const maxPages = Math.ceil(count/3);
        Model.find(query,  (err, data) =>
        Pagination(err,data, res, Number.parseInt(numPage), Number.parseInt(maxPages))).limit(3).skip(3 * (numPage - 1));
    });
};

const CRUD = {
    findPokemon
}

module.exports = CRUD;
```


`app.js`
```js
'use strict';

require('./db/config');
const express = require('express');
const app = express();
const Pokemon = require('./find');

app.get('/pokemons', function(req, res) {
    const query = {};
    let numPage = req.query.page;

    if (numPage === undefined) numPage = 1;
    //console.log(numPage);
    Pokemon.find(res, query, numPage);
});

app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
```
