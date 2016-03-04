# Node.js - Aula 02 - Exercício
**User:** [matheusjkweber](https://github.com/matheusjkweber)

**Autor:** Matheus José Krumenauer Weber

**Date:** 1456532077731

## Quais são os 4 verbos que utilizamos para o CRUD?
Post para o create, get para o retrieve, put para o update e delete para o delete.

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os `Status Codes` foram inventados para padronizar os tipos de retorno do servidor, facilitando o entendimento deles.

- 1xx - Informação

<img src="https://http.cat/101">

- 2xx - Sucesso

<img src="https://http.cat/204">

- 3xx - Redirecionamento

<img src="https://http.cat/300">


- 4xx - Erro no lado do cliente

<img src="https://http.cat/404">

- 5xx - Erro no lado do servidor

<img src="https://http.cat/500">

## Explique o que é cada parâmetro da função recebida no `createServer`.
Request que possui os parâmetros utilizados na requisição do usuário e Response que possui os métodos utilizados para o envio de respostas ao usuário.

## O que é e para que serve a Querystring?
São valores passados após o nome da url, servem para passar parametros de uma página para outra.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

http.createServer(function(req, res){
  if(req.url === '/api/v1') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(SUCCESS));
  } else if (req.url === '/api/v2'){
        res.writeHead(204, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(SUCCESS));
  }else if (req.url === '/api/v3'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(SUCCESS));
  }
  else {
    res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});


```
