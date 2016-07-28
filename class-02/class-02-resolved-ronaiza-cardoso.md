# Node.js - Aula 02 - Exercício
**user:** [yesroh](https://github.com/yesroh)

**autor:** Ronaiza Cardoso

**Date:** 1469731861509

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create
- Retrieve
- Update
- Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Serve para informar o que o servidor esta respondendo.

## 1XX - Informação
![100](https://http.cat/100)

## 2XX - Sucesso
![200](https://http.cat/200)

## 3XX - Redirecionamento
![303](https://http.cat/303)

## 4XX- Erro de cliente
![403](https://http.cat/403)

## 5XX - Erro de servidor
![500](https://http.cat/500)


## Explique o que é cada parâmetro da função recebida no `createServer`.


- request: informações de requisição feita pelo cliente;
- response: informações de resposta do servidor para o cliente.


## O que é e para que serve a Querystring?

Querystring é uma forma de passar os valores pela url, assim podemos pegar os valores da nossa url com nosso request.

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
    switch(req.url) {
        case '/rota/v1':
        case '/rota/v2':
        case '/rota/v3':
        case '/rota/v4':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(SUCCESS));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(ERROR));
    }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

```