# Node.js - Aula 02 - Exercício
**user:** [fernandobd42](https://github.com/fernandobd42)
**autor:** Fernando Lucas
**date:** 1467347548312

## Estrutura

## Quais são os 4 verbos que utilizamos para o CRUD?
CRUD - (Create, Retrive/Read, Update, Delete)

-Create (POST)
-Retrive/Read (GET)
-Update (PUT)
-Delete (DELETE)

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Para padronizar o retorno das requisições HTTP cliente-servidor.

###1XX Informação### 
![Imagem 100](https://http.cat/100)

###2XX Sucesso###
![Imagem 200](https://http.cat/200)

###3XX Redirecionamento###
![Imagem 300](https://http.cat/300)

###4XX Erro do cliente###
![Imagem 400](https://http.cat/400)

###5XX Erro do servidor###
![Imagem 500](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.
Request recebe os parâmetros utilizados pelo usuário na requisição.
Response manipula a responsta a ser enviada ao usuário.

## O que é e para que serve a Querystring?
Querystring é um padrão que utiliza o método GET para receber valores na url.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
   , SUCCESS = {
       version: 1.0
       , name: 'Be MEAN'
       , created_at: date }
    , ERROR = {
       message: 'Não encontrado'
    };

http.createServer(function(req, res){
   switch (req.url) {
     case"/api/v1/pokemons/create":
       res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
       res.write(JSON.stringify(SUCCESS));
       break;

     case "/api/v1/pokemons/read":
       res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
       res.write(JSON.stringify(SUCCESS));
       break;

     case "/api/v1/pokemons/update":
       res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
       res.write(JSON.stringify(SUCCESS));
       break;

     case "/api/v1/pokemons/delete":
       res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
       res.write(JSON.stringify(SUCCESS));
       break;

     default:
       res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
       res.write(JSON.stringify(ERROR));
       break;
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});
```