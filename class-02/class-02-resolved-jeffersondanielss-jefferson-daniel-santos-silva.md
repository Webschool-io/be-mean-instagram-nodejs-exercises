# Node.js - Aula 02 - Exercício

**user:** [jeffersondanielss](https://github.com/jeffersondanielss)

**autor:** Jefferson Daniel Santos Silva

## Quais são os 4 verbos que utilizamos para o CRUD?
+ CREATE
+ RETRIVE/READ
+ UPDATE
+ DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

##### 100
Quando o servidor recebeu os cabeçalhos da solicitação.
![100](https://http.cat/100.jpg)

##### 200
O modelo de resposta para solicitações http de sucesso.
![200](https://http.cat/200.jpg)

##### 404
Indica que o recurso requisitado não foi encontrado.
![404](https://http.cat/404.jpg)

##### 503
O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos.
![503](https://http.cat/503.jpg)


## Explique o que é cada parâmetro da função recebida no `createServer`.
request: O objeto de solicitação contém informações sobre a solicitação do cliente, tais como a URL, cabeçalhos HTTP, e muito mais.

response: Utilizado para devolver dados de volta para o cliente.

## O que é e para que serve a Querystring?
A querystring é um conjunto de parametros passados para o browser que é enviado para um programa de consulta e serve para recuperar informações específicas a partir de um banco de dados.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```
  'use strict';

  var date = (new Date()).toJSON();

    const http = require('http')
        , SUCCESS = {
            version: '1.0'
          , name: 'Be MEAN'
          , returned_at: date
          }
        , ERROR = {
          message: 'Não encontrado'
        }

  http.createServer(function( req, res ){

    function success() {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(SUCCESS));
    }

    switch(req.url) {
      case '/api/pokemons/create':
        success();
        break;

      case '/api/pokemons/read':
        success();
        break;

      case '/api/pokemons/update':
        success();
        break;

      case '/api/pokemons/delete':
        success();
        break;

      default:
        res.writeHead(400, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(ERROR));
        break;
    }

    res.end();
  }).listen(3000, function(){
    console.log( 'Servidor rodando em localhost:3000' )
  });
```