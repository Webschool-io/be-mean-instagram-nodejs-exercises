# Node.js - Aula 10 - Exercício 

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

### 1 - Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para `url/404`
```js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.redirect('admin');
})
.get('/admin', (req, res) => {
  res.send('Rota de Admin');
});
/*app.use(function(req, res, next) {
  res.status(404).send('Nada encontrado!');
});*/
app.get('*', (req, res) => {
  res.send('<section align="center"><h1>O que houve?! Tivemos um 404 aqui.</h1><hr><img src="https://raw.githubusercontent.com/Webschool-io/be-mean-instagram/master/Apostila/module-nodejs/src/aula-express/public/logo-webschool.png"></section>', 404);
});
app.listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
```
##### Resultado
![](http://i.imgur.com/B94I4bV.png)

> Explicando, bom no código podem ver que o GET está setado para ir apenas para `/admin` e nenhum outro além dele. Por isso na imagem acima, eu acessei no browser: `http://localhost:3000/admin/p` que resultou no seguinte.

### 2 - Adicionar o retorno correto para os seguinte códigos:
> 200,201,202,405,500

```js
// 200
app.get('/', (req, res) => {
    res.status(200).send('AEE CARAI, DE BOA!')
});

// 201
app.get('/', (req, res) => {
    res.status(201).send('DE BOA!')
});

// 202
app.get('/', (req, res) => {
    res.status(202).send('EHH, PODE SER!')
});

// 405
app.get('/', (req, res) => {
    res.status(405).send('NÃO PERMITIDO!')
});

// 500
app.get('/', (req, res) => {
    res.status(500).send('ERRO NO SERVIDOR!')
});
```

### 3 - Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send
```js
import express from 'express';
const app = express();
import path from 'path';

const users = [
  {name : "gabriel"}
  ,{name: "kleber bambam "}
];

app.get('/users/:template/:view', (req, res, next) => {

  const template = req.params.template;
  const view = req.params.view;
  console.log(template);
  app.set('view engine',template);

  switch(view) {
     case 'list':
      res.render(path.join(__dirname,`/modules/users/views/${view}`), {title: 'list user', message: 'Usuarios',  template, view,users});
      break;
     case 'index':
     res.render(path.join(__dirname,`/modules/users/views/${view}`), {title: 'Index file', message: 'bem vindo a pagina inicial', template, view});
   default:
     res.send(404, 'Não achei!');  
}
});

app.listen(3000, () => {
  console.log('Servidor rodando em locahost:3000');
});
```

### 4 - Criar um módulo para entrega de arquivos, onde o mesmo recebe o caminho para o arquivo e o tipo do arquivo, para retornar o arquivo corretamente.
```js
`//  modules/files/enviarArquivo.js
export default (req, res) => {
  const options = {
    root: `${__dirname}/public/`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  let fileName = req.params.name;
  const fileType = req.params.type;

  switch (fileType) {
    case 'png':
      res.set('Content-Type', 'image/png');
      fileName = `${fileName}.${fileType}`;
      break;
    default:
      res.status(400).send('tipo do arquivo solicitado invalido');
      break;
  }

  res.sendFile(fileName, options, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
};

// app.js
import express from 'express';
const app = express();
import SendFiles from './modules/files/enviarArquivo';

app.get('/file/:name/:type', (req, res, next) => SendFiles(req, res));

app.listen(3000, () => {
  console.log('Servidor rodando em locahost:3000');
});
```

### 5 - Criar uma busca, dos Pokemons, com o Mongoose que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:
- html
- json
ps: Não esquecer do link para previous e first quando necessários.

```js
// modules/pokemons/db-config.js

//importar o mongoose 
import mongoose from 'mongoose';

const uriDB = 'mongodb://localhost/be-mean-pokemons';
//criar uma conexão com mongo
mongoose.connect(uriDB);
mongoose.connection.on('connected', () => {
 console.log(`Mongo default connection connected to ${uriDB}`);
});
mongoose.connection.on('error', err => {
 console.log(`Mongo default connection error${err}`);
});
mongoose.connection.on('disconnected', () => {
 console.log("Mongo default connection disconnected");
});
mongoose.connection.on('open', () => {
 console.log("Mongo default connection open");
});
process.on('SIGINT',() => {
    mongoose.connection.close(() => {
       console.log("The connection is closed");
        process.exit(0);
    });
});

// modules/pokemons/model.js
export default (Schema, ModelName) => {
    const mongoose = require('mongoose');
    return mongoose.model(ModelName, Schema);
};

// modules/pokemons/molecule.js
import mongoose from 'mongoose';

const _schema = {
  name : {type: String, required: true},
  attack : {type: Number, default : 0},
  defense : {type: Number},
  height : {type: Number },
  created: {type: Date}, 
  hp: {type: Number},
  speed: {type: Number},
  types: []
}

const PokemonSchema = new mongoose.Schema(_schema);

export default PokemonSchema;

// modules/pokemons/organism.js

import Molecule from './molecule';
const Organism = require('./model')(Molecule, 'Pokemons');
import callback from './callback';

const find = (res, query, page) => {
        Organism.count({}, (err, count) => {
            const maxPages = Math.ceil(count/3);
            Organism.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(3).skip(3 * (page - 1));
        });
};

const CRUD = {
    find 
}
export default CRUD;

// modules/pokemons/callback.js

const formataHtml = (data) => {
    let html = '';
    data.forEach((element, index, array) => {
    console.log(element);
    html = `${html}<ul>`;
        html = `${html}<li>${element.id}</li>`;
        html = `${html}<li>${new Date(element.created)}</li>`;
        html = `${html}<li>${element.defense}</li>`;
        html = `${html}<li>${element.height}</li>`;
        html = `${html}<li>${element.name}</li>`;
        html = `${html}<li>${element.speed}</li>`;
        html = `${html}<li>${element.types.join(" - ")}</li>`;
        html = `${html}<li>${element.attack}</li>`;
        html = `${html}</ul>`;
    });
    return html;
}

export default (err,data,res,page,maxPages) => {
    if (err) {
        console.log(err);
        res.status(404, err).end();
    }

    if ( page === 1 ) {
        res.links({
            next: `http://localhost/pokemons?page=${Number(page + 1)}` ,
            last: `http://localhost/pokemons?page=${maxPages}`
        });
    } else if (page > 1 && page < maxPages){
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: `http://localhost/pokemons?page=${page - 1}`,
            next: `http://localhost/pokemons?page=${page + 1}`,
            last: `http://localhost/pokemons?page=${maxPages}`
        });
    }else if (page === maxPages){ 
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: `http://localhost/pokemons?page=${page - 1}`
        });
    }

    res.format({
        'text/html'() {
            // res.set('ContentType','text/html');
            const html = formataHtml(data);
            res.type('html');
            res.send(html);
        }
        , 'application/json'() {
            //res.set('ContentType','json');
            res.type('json');
            res.json(data);
        }
        , 'default'() {
            res.status(406).send('Formato não aceito');
        } 
    });
};

// app.js
require('./modules/pokemons/db-config');
import express from 'express';
const app = express();
import Pokemon from './modules/pokemons/organism';


app.get('/pokemons', (req,res) => {

const query = {};

let page = req.query.page;
if (page === undefined) page = 1;
//console.log(page);
 Pokemon.find(res, query, page);
});

app.listen(3000,() => {
    console.log('Servidor executando na porta 3000.');
});
```

### parametro "Accept" no headers 
```
Method: GET
Chamada: localhost:3000/pokemons
Headers:  Accept - application/xml

Retorno: 
Formato não aceito
```

### parametro "Accept" json
```
Parametros requisição
Method: GET
Chamada: localhost:3000/pokemons
Headers:  Accept - application/xml

=====Resposta===== 

Retorno cabeçalho: 
Connection →keep-alive
Content-Length →495
Content-Type →application/json; charset=utf-8
Date →Tue, 28 Jun 2016 00:25:59 GMT
ETag →W/"1ef-4PIKqX0762kGtsv7eWywww"
Link →<http://localhost/pokemons?page=2>; rel="next", <http://localhost/pokemons?page=204>; rel="last"
Vary →Accept
X-Powered-By →Express
```

```json
[
  {
    "_id": "564b1dad25337263280d047c",
    "defense": 80,
    "height": 10,
    "hp": 59,
    "name": "Wartortle",
    "speed": 58,
    "types": [
      "water"
    ],
    "attack": 63
  },
  {
    "_id": "564b1dad25337263280d047b",
    "defense": 58,
    "height": 11,
    "hp": 58,
    "name": "Charmeleon",
    "speed": 80,
    "types": [
      "fire"
    ],
    "attack": 64
  },
  {
    "_id": "564b1dad25337263280d047a",
    "defense": 43,
    "height": 6,
    "hp": 39,
    "name": "Charmander",
    "speed": 65,
    "types": [
      "fire"
    ],
    "attack": 52
  }
]
```

### parametro "Accept" html
```
Parametros requisição
Method: GET
Chamada: localhost:3000/pokemons?page=10
Headers:  Accept - text/html

=====Resposta=====

Retorno cabeçalho: 
Connection →keep-alive
Content-Length →509
Content-Type →text/html; charset=utf-8
Date →Tue, 28 Jun 2016 00:31:10 GMT
ETag →W/"1fd-rGoXU5HAyva5iOyAe3VwdA"
Link →<http://localhost/pokemons?page=1>; rel="first", <http://localhost/pokemons?page=9>; rel="previous", <http://localhost/pokemons?page=11>; rel="next", <http://localhost/pokemons?page=204>; rel="last"
Vary →Accept
X-Powered-By →Express
```

```html
<ul>
<li>564b1daf25337263280d0495</li>
    <li>35</li>
    <li>7</li>
    <li>Bellsprout</li>
    <li>40</li>
    <li>poison - grass</li>
    <li>75</li>
</ul>
<ul>
<li>564b1db025337263280d0497</li>
    <li>67</li>
    <li>8</li>
    <li>Nidorina</li>
    <li>56</li>
    <li>poison</li>
    <li>62</li>
</ul>
<ul>
    <li>564b1db025337263280d0498</li>
    <li>85</li>
    <li>6</li>
    <li>Sandshrew</li>
    <li>40</li>
    <li>ground</li>
    <li>75</li>
</ul>
```
