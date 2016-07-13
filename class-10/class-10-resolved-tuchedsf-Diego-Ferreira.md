# Node.js - Aula 10 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira

##PARTE 01
###1) Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para url/404.
```js
//modulo
'use strict'
module.exports = (req,res) => {
  res.redirect('/404');
}

//Principal
'use strict';

const express = require('express');
const app = express();
const callback404 = require('./modulo.redirect');

app.get('/', (req,res) => {
  res.send('<h1> Hello World </h1>');
}).get('/404', (req,res) => {
  res.status(404).send('404 - Not Found');
}).get('/*', (req,res) => {
  callback404(req,res);
});

app.listen(3000, () =>{
  console.log('Servidor sendo executado');
});
```

### 2) Criar módulo onde seja passado o retorno, podendo ser string ou buffer, caso seja String definir cabeçalho correto mesmo usando res.send.
```js
//modulo
module.exports = (req,res) => {
  res.set('Content-Type', 'text-html'); //seta o content type para text-html, senao iria mostrar 8ctrestrem
  res.send(new Buffer('<h1> Hello World </h1>'));
}

//Principal
'use strict';

const express = require('express');
const app = express();
const Content = require('./modules/Content');

app.get('/', (req,res) => {
  return Content(req,res);
});

app.listen(3000, () =>{
  console.log('Servidor sendo executado');
});
```

Cabeçalho:
```
Connection →keep-alive
Content-Length →22
Content-Type →text-html
Date →Sat, 28 May 2016 16:24:07 GMT
ETag →W/"16-JxTuzBN3iv2w2JCcxw774w"
X-Powered-By →Express
```

## PARTE 2
### 3) Criar um módulo para renderização de views, onde o mesmo recebe o caminho para a view e o tipo do template engine, para retornar a view corretamente.
No meu exemplo são utilizados os templates pug e jade, ou seja, o modulo recebe dois parametros o primeiro template que pode ser pug ou jade e o segundo a view que o mesmo deseja exibir.

app-exercicio3.js
```js
'use strict';

const express = require('express');
const app = express();
const path =  require('path');

const users = [
  {name : "Diego"}
  ,{name: "Jose "}
];  

app.get('/users/:template/:view', function (req, res, next) {

  const template = req.params.template;
  const view = req.params.view;
  console.log(template);
  app.set('view engine',template);

  switch(view) {
     case 'list':
      res.render(path.join(__dirname,'/modules/users/views/'+view), {title: 'list user', message: 'Lista Usuarios',  template: template, view: view,users: users});
      break;
     case 'index':
     res.render(path.join(__dirname,'/modules/users/views/'+view), {title: 'Index file', message: 'Seja bem vindo pagina inicial', template: template, view: view});
   default:
     res.send(404, 'Não achei!');  
}
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Obs.: Por padrão o pug e o jade utilizam da mesma formatação então apenas exibi o código de montagem da tela uma unica vez.
views/index.jade === views/index.pug
```
html
  head
    title= title
  body
    h1= template + ' - ' + view
    br
    h2= message
```

views/list.jade === views/list.pug 
```
html
  head
    title= title
  body
    h1= template + ' - ' + view
    br
    h2= message
    ul
      each user in users
        li= user.name
```

Chamadas
```
http://localhost:3000/users/jade/index
http://localhost:3000/users/pug/index

jade - index

Seja bem vindo pagina inicial

http://localhost:3000/users/jade/list
http://localhost:3000/users/pug/list

jade - list

Lista Usuarios

Diego
Jose
```


### 4) Criar um módulo para entrega de arquivos, onde o mesmo recebe o caminho para o arquivo e o tipo do arquivo, para retornar o arquivo corretamente.

module/SendFiles.js
```js
'use strict';

module.exports = (req, res) => {

  const options = {
    root: __dirname + '/public/',
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
      fileName = fileName +'.'+fileType;
      break;
    default:
      res.status(400).send('tipo do arquivo solicitado invalido');
      break;
  }

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
};
```

app-exercicio4.js
```js
'use strict';

const express = require('express');
const app = express();
const SendFiles = require('./modules/files/SendFiles');

app.get('/file/:name/:type', function (req, res, next) {
  return SendFiles(req, res);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
```

Resultado
```
Chamada: localhost:3000/files/logo/png

Retorno: arquivo imagem png da pasta public com o nome logo e extensão png.
![](http://i35.tinypic.com/vmzl1e.jpg)

Caso for informado uma extensão invalida exemplo jpg, o retorno sera uma mensagem informando que o tipo do arquivo solicitado é invalido.
Chamada: localhost:3000/files/logo/jpg

Retorno: 
tipo do arquivo solicitado invalido
```

## PARTE 3
### 5)  criar uma busca, dos pokemons, com o mongoose que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:
- html
- json 
Obs.: Não esquecer do link para previous e first quando necessários.

modules/pokemons/db-config.js
```js
//importar o mongoose 
const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/be-mean-pokemons';
//criar uma conexão com mongo
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

modules/pokemons/model.js
```js 
'use strict';
module.exports = function(Schema, ModelName) {
    const mongoose = require('mongoose');
    return mongoose.model(ModelName, Schema);
}
```

modules/pokemons/molecule.js
```js
'use strict';

const mongoose = require('mongoose');

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

module.exports = PokemonSchema;
```

modules/pokemons/organism.js
```js 
'use strict'

const Molecule = require('./molecule');
const Organism = require('./model')(Molecule, 'Pokemons');
const callback = require('./callback');

const find = (res, query, page) => {
        Organism.count({}, (err, count) => {
            const maxPages = Math.ceil(count/3);
            Organism.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(3).skip(3 * (page - 1));
        });
};

const CRUD = {
    find 
}
module.exports = CRUD;
```

modules/pokemons/callback.js
```js
'use strict'

const formataHtml = (data) => {
    let html = '';
    data.forEach(function (element, index, array) {
    console.log(element);
    html = html + '<ul>';
        html = html + '<li>' + element.id + '</li>';
        html = html + '<li>' + new Date(element.created) + '</li>';
        html = html + '<li>' + element.defense + '</li>';
        html = html + '<li>' + element.height + '</li>';
        html = html + '<li>' + element.name + '</li>';
        html = html + '<li>' + element.speed + '</li>';
        html = html + '<li>' + element.types.join(" - ") + '</li>';
        html = html + '<li>' + element.attack + '</li>';
        html = html + '</ul>';
    });
    return html;
}

module.exports = (err,data,res,page,maxPages) => {
    if (err) {
        console.log(err);
        res.status(404, err).end();
    }

    if ( page === 1 ) {
        res.links({
            next: 'http://localhost/pokemons?page='+ Number(page + 1) ,
            last: 'http://localhost/pokemons?page='+ maxPages
        });
    } else if (page > 1 && page < maxPages){
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: 'http://localhost/pokemons?page='+ (page - 1),
            next: 'http://localhost/pokemons?page='+ (page + 1),
            last: 'http://localhost/pokemons?page='+ maxPages
        });
    }else if (page === maxPages){ 
        res.links({
            first: 'http://localhost/pokemons?page=1',
            previous: 'http://localhost/pokemons?page='+ (page - 1)
        });
    }

    res.format({
        'text/html' : function() {
            // res.set('ContentType','text/html');
            const html = formataHtml(data);
            res.type('html');
            res.send(html);
        }
        , 'application/json' : function() {
            //res.set('ContentType','json');
            res.type('json');
            res.json(data);
        }
        , 'default' : function() {
            res.status(406).send('Formato não aceito');
        } 
    });
};
```

app-exercicio5.js
```js
'use strict'

require('./modules/pokemons/db-config');
const express = require('express');
const app = express();
const Pokemon = require('./modules/pokemons/organism');


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

###### parametro "Accept" no headers diferente de html e diferente de json
```
Method: GET
Chamada: localhost:3000/pokemons
Headers:  Accept - application/xml

Retorno: 
Formato não aceito
```


###### parametro "Accept" json, retorno 3 primeiros elementos da coleção e no cabeçalho da resposta os links de navegação. Como é a primeira página aparecem apenas next e last.
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

Retorno json:
[
  {
    "_id": "564b1dad25337263280d047c",
    "created": "2013-11-03T15:05:41.280Z",
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
    "created": "2013-11-03T15:05:41.273Z",
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
    "created": "2013-11-03T15:05:41.271Z",
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

###### parametro "Accept" html para mostrar que alem do json aceita html,e passado uma página intermediária como parametro, então é retornado 3 elementos e nos headers da resposta os links first/previous/next/last de navegação.

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

Retorno html
<ul>
    <li>564b1daf25337263280d0495</li>
    <li>Sun Nov 03 2013 13:05:41 GMT-0200 (BRST)</li>
    <li>35</li>
    <li>7</li>
    <li>Bellsprout</li>
    <li>40</li>
    <li>poison - grass</li>
    <li>75</li>
</ul>
<ul>
    <li>564b1db025337263280d0497</li>
    <li>Sun Nov 03 2013 13:05:41 GMT-0200 (BRST)</li>
    <li>67</li>
    <li>8</li>
    <li>Nidorina</li>
    <li>56</li>
    <li>poison</li>
    <li>62</li>
</ul>
<ul>
    <li>564b1db025337263280d0498</li>
    <li>Sun Nov 03 2013 13:05:41 GMT-0200 (BRST)</li>
    <li>85</li>
    <li>6</li>
    <li>Sandshrew</li>
    <li>40</li>
    <li>ground</li>
    <li>75</li>
</ul>
```

###### parametro "Accept" json novamente,e passado a última página como parametro, é retornado a última página de elementos e nos headers da resposta os links first/previous de navegação.
```
Parametros requisição
Method: GET
Chamada: localhost:3000/pokemons?page=204
Headers:  Accept - application/json

=====Resposta===== 
Retorno cabeçalho: 
Connection →keep-alive
Content-Length →164
Content-Type →application/json; charset=utf-8
Date →Tue, 28 Jun 2016 00:32:20 GMT
ETag →W/"a4-YzzkHzo/NR9bvbxRKGlKHQ"
Link →<http://localhost/pokemons?page=1>; rel="first", <http://localhost/pokemons?page=203>; rel="previous"
Vary →Accept
X-Powered-By →Express

Retorno json
[
  {
    "_id": "564b1de725337263280d06da",
    "created": "2013-11-03T15:05:42.420Z",
    "defense": 62,
    "height": 0,
    "hp": 123,
    "name": "Gogoat",
    "speed": 68,
    "types": [
      "grass"
    ],
    "attack": 100
  }
]
```
