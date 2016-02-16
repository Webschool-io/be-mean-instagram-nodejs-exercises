# Node.js - Aula 02 - Exercício

**user:** [victorvoid](https://github.com/VictorVoid)

**autor:** Victor Igor Gomes Martins

**date:** 1453957583405

## Quais são os 4 verbos que utilizamos para o CRUD?

1. Create
2. Read
3. Update
4. Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

*Status Codes* eles são códigos de retorno do nosso servidor, ele possui uma padronização para poder saber a informação que ele trás.

1º Exemplo: 100

![](https://http.cat/100)

2º Exemplo: 200

![](https://http.cat/200)

3º Exemplo: 301 Movido

![](https://http.cat/301)

4º Exemplo: 404

![](https://http.cat/404)

5º Exemplo: 500

![](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no *createServer*.

Ela recebe uma função anônima com dois parâmetros:

1. request
2. response

`request`: recebe informação da solicitação feita ao servidor

`response`: a resposta dada requisição solicitada

## O que é e para que serve a Querystring ?


QueryString é os valores que passamos por parâmetro na url, como por exemplo:

http://localhost:3000/name=1&idade=12

Como o próprio nome diz, é de uma certa forma uma query, onde serve para pegar seu
valor e trabalhar no código.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:


```js
'use strict';

var date = (new Date()).toJSON();
const http = require('http')
      , SUCCESS = {
          version: '1.0'
        , name   : 'Victor Igor'
        , returned_at: date
      }
      , ERRO = {
          message: 'Não encontrado !!!'
      }
    ;
http.createServer((request, response)=>{
    var routes = ['/api/pokemons/create', '/api/pokemons/read',
                  '/api/pokemons/update', '/api/pokemons/delete'
                 ];
  function successRes(){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(SUCCESS));
  }
  function erroRes(){
    response.writeHead(404, {'Content-Type':'application/json;charset=utf-8'});
    response.write(JSON.stringify(ERRO));
  }
  switch (request.url) {
    case routes[0]:
      successRes();
      break;
    case routes[1]:
      successRes();
      break;
    case routes[2]:
      successRes();
      break;
    case routes[3]:
      successRes();
      break;
    default:
      erroRes();

  }
  response.end();
}).listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000');
});

```
