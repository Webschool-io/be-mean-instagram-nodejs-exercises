# Node.js - Aula 10 - Exercício  
 **User:** [gkal19](https://github.com/gkal19)  
 **Autor:** Gabriel Kalani
 **Data:** 1467298046775
 
## Índice
 
##### [Exercício 01](#1---criar-um-módulo-de-redirecionamento-para-quando-não-encontrar-a-rota-redirecionar-para-url404)
 
##### [Exercício 02](#2---adicionar-o-retorno-correto-para-os-seguinte-códigos)
 
##### [Exercício 03](#3---criar-um-módulo-onde-seja-passado-o-retorno-podendo-ser-string-ou-buffer-caso-seja-string-definir-cabeçalho-correto-mesmo-usando-ressend)
 
##### [Exercício 04](#4---criar-um-módulo-para-renderização-de-views-onde-o-mesmo-recebe-o-caminho-para-a-view-e-o-tipo-do-template-engine-para-retornar-a-view-corretamente)
 
##### [Exercício 05](#5---criar-um-módulo-para-entrega-de-arquivos-onde-o-mesmo-recebe-o-caminho-para-o-arquivo-e-o-tipo-do-arquivo-para-retornar-o-arquivo-corretamente)
 
##### [Exercício 06](#6---criar-uma-busca-dos-pokemons-com-o-mongoose-que-pagine-o-resultado-retornando-os-links-corretamente-e-que-essa-busca-seja-retornada-como)
 
 
### 1 - Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para `url/404`
 ```js
 'use strict';
 
 app.get('/', (req,res) => {
   res.send('<h1> OI, POKÉMON </h1>');
 }).get('/404', (req,res) => {
   res.status(404).send('404 - NÃO ENCONTRADO');
 }).get('/*', (req,res) => {
   res.redirect('/404');
 });
 
 app.listen(3000, function () {
   console.log('Servidor rodando em localhost:3000');
 });
 ```
 
### 2 - Adicionar o retorno correto para os seguinte códigos:
 > 200,201,202,405,500
 
 ```js
 // 200
 app.get('/', function (req, res) {
     res.status(200).send('AEE CARAI, DE BOA!')
 });
 
 // 201
 app.get('/', function (req, res) {
     res.status(201).send('DE BOA!')
 });
 
 // 202
 app.get('/', function (req, res) {
     res.status(202).send('EHH, PODE SER!')
 });
 
 // 405
 app.get('/', function (req, res) {
     res.status(405).send('NÃO PERMITIDO!')
 });
 
 // 500
 app.get('/', function (req, res) {
     res.status(500).send('ERRO NO SERVIDOR!')
 });
 ```
 
### 3 - Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send
 ```js
 // modulo.js
 module.exports = (req,res) => {
   res.set('Content-Type', 'text-html');
   res.send(new Buffer('<h1> Hello World </h1>'));
 }
 ```
 <br>
 ```js
 // js.js
 'use strict';
 
 const express = require('express');
 const app = express();
 const Content = require('./modulo');
 
 app.get('/', (req,res) => {
   return Content(req,res);
 });
 
 app.listen(3000, () =>{
   console.log('EETAA PORRA! TA EXECUTANDO O SERVIDOR PORRA');
 });
 
 ```
 
### 4 - Criar um módulo para renderização de views, onde o mesmo recebe o caminho para a view e o tipo do template engine, para retornar a view corretamente.
 ```js
 'use strict';
 
 const express = require('express');
 const app = express();
 const path =  require('path');
 
 const users = [
   {name : "Kleber Bambam"},
   {name: "Felipe Franco "}
 ];
 
 app.get('/users/:template/:view', function (req, res, next) {
 
   const template = req.params.template;
   const view = req.params.view;
   console.log(template);
   app.set('viewEngine',template);
 
   switch(view) {
      case 'list':
       res.render(path.join(__dirname,'/modules/users/views/'view),
       {title: 'Lista',
       message: 'LISTA DE BODYBUILDERS',
       template: template,
       view: view,
       users: users
     }
   );
       break;
 
      case 'index':
      res.render(path.join(__dirname,'/modules/users/views/'view),
      {title: 'Principal',
      message: 'BEM VINDO A PÁGINA INICIAL DO TRAPÉZIO DESCENDENTE',
      template: template,
      view: view
    }
  );
 
    default:
      res.send(404, 'O MONSTRO SAIU DA JAULA E NÃO FOI ENCONTRADO!');
    }
   }
 );
 
 app.listen(3000, function () {
   console.log('EXECUTANDO O SERVIDOR NA MERDA DO locahost:3000');
 });
 ```
 
### 5 - Criar um módulo para entrega de arquivos, onde o mesmo recebe o caminho para o arquivo e o tipo do arquivo, para retornar o arquivo corretamente.
 
 ```js
 // module/SendFiles.js
 'use strict';
 
 module.exports = (req, res) => {
 
   const options = {
     root: __dirname  '/public/',
     dotfiles: 'NEGADO',
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
       fileName = fileName '.'fileType;
       break;
     default:
       res.status(400).send('PQP! ARQUIVO INVÁLIDO');
       break;
   }
 
   res.sendFile(fileName, options, function (err) {
     if (err) {
       console.log(err);
       res.status(err.status).end();
     }
     else {
       console.log('ARQUIVO:', fileName , 'INVÁLIDO!');
     }
   });
 };
 ```
 
 ```js
 // ex04.js
 'use strict';
 
 const express = require('express');
 const app = express();
 const SendFiles = require('./modules/files/SendFiles');
 
 app.get('/file/:name/:type', function (req, res, next) {
   return SendFiles(req, res);
 });
 
 app.listen(3000, function () {
   console.log('EXECUTANDO EM locahost:3000');
 });
 ```
 
### 6 - Criar uma busca, dos Pokemons, com o Mongoose que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:
 > html, json
 
 ```js
 // modules/pokemons/db-config.js
 const mongoose = require('mongoose');
 const uriDB = 'mongodb://localhost/be-mean-pokemons';
 
 mongoose.connect(uriDB);
 mongoose.connection.on('connected', function(){
  console.log("Mongo default connection connected to "  uriDB);
 });
 mongoose.connection.on('error', function(err){
  console.log("Mongo default connection error"  err);
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
 
 
 ```js 
 // modules/pokemons/model.js
 'use strict';
 module.exports = function(Schema, ModelName) {
     const mongoose = require('mongoose');
     return mongoose.model(ModelName, Schema);
 }
 ```
 
 
 ```js
 'use strict';
 // modules/pokemons/molecule.js
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
 
 ```js 
 // modules/pokemons/organism.js
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
 
 ```js
 // modules/pokemons/callback.js
 'use strict'
 
 const formataHtml = (data) => {
     let html = '';
     data.forEach(function (element, index, array) {
     console.log(element);
     html = html  '<ul>';
         html = html  '<li>'  element.id  '</li>';
         html = html  '<li>'  new Date(element.created)  '</li>';
         html = html  '<li>'  element.defense  '</li>';
         html = html  '<li>'  element.height  '</li>';
         html = html  '<li>'  element.name  '</li>';
         html = html  '<li>'  element.speed  '</li>';
         html = html  '<li>'  element.types.join(" - ")  '</li>';
         html = html  '<li>'  element.attack  '</li>';
         html = html  '</ul>';
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
             next: 'http://localhost/pokemons?page=' Number(page  1) ,
             last: 'http://localhost/pokemons?page=' maxPages
         });
     } else if (page > 1 && page < maxPages){
         res.links({
             first: 'http://localhost/pokemons?page=1',
             previous: 'http://localhost/pokemons?page=' (page - 1),
             next: 'http://localhost/pokemons?page=' (page  1),
             last: 'http://localhost/pokemons?page=' maxPages
         });
     }else if (page === maxPages){
         res.links({
             first: 'http://localhost/pokemons?page=1',
             previous: 'http://localhost/pokemons?page=' (page - 1)
         });
     }
 
     res.format({
         'text/html' : function() {
             const html = formataHtml(data);
             res.type('html');
             res.send(html);
         }
         , 'application/json' : function() {
             res.type('json');
             res.json(data);
         }
         , 'default' : function() {
             res.status(404).send('FORMATO NÃO ACEITO');
         }
     });
 };
 ```
 
## Resultado
 
 > Ants de alguém vim falando merda, vou logo falando que os pokemons foram pegos do professor do WBrunho, que é o mesmo então que o Diego Ferreira apareceu em seus resultados. Não culpo ninguém, mas não venha falar merda depois.
 
 ```html
 <body>
     <ul>
         <li>564a7c362c153ed825a69054</li>
         <li>Sun Nov 03 2013 15:05:41 GMT0000 (UTC)</li>
         <li>40</li>
         <li>10</li>
         <li>Beedrill</li>
         <li>75</li>
         <li>poison - bug</li>
         <li>90</li>
     </ul>
     <ul>
         <li>564a7c362c153ed825a69055</li>
         <li>Sun Nov 03 2013 15:05:41 GMT0000 (UTC)</li>
         <li>40</li>
         <li>3</li>
         <li>Pidgey</li>
         <li>56</li>
         <li>normal - flying</li>
         <li>45</li>
     </ul>
     <ul>
         <li>564a7c362c153ed825a69056</li>
         <li>Sun Nov 03 2013 15:05:41 GMT0000 (UTC)</li>
         <li>55</li>
         <li>11</li>
         <li>Pidgeotto</li>
         <li>71</li>
         <li>normal - flying</li>
         <li>60</li>
     </ul>
 </body>
 ```
 
 > Este aqui foi o retorno em HTML
 > Vamos para o retorno em JSON (Dificl para caramba)
 
 ```json
 [
   {
     "_id": "564a7c702c153ed825a692b7",
     "created": "2013-11-03T15:05:42.420Z",
     "defense": 62,
     "height": 49,
     "hp": 7,
     "name": "Bulbasaur",
     "speed": 45,
     "types": [
       "grass"
     ],
     "attack": 49
   }
 ]
 ```
