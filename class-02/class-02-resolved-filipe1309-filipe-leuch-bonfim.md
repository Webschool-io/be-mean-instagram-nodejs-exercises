# Node.js - Aula 02 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim

## Quais são os 4 verbos que utilizamos para o CRUD?
  - [**C**] = POST
  - [**R**] = GET
  - [**U**] = PUT
  - [**D**] = DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os `Status Codes` foram inventados com o intuito de padronizar os retornos das requisições entre o cliente e o servidor, assim podendo ser útil para ajudar a identificar a causa de problemas quando uma página web ou outro recurso não carrega como deveria.

#### 1XX - Informacional
![101](https://http.cat/101)

#### 2XX - Sucesso
![204](https://http.cat/204)

#### 3XX - Redirecionamento
![302](https://http.cat/302)

#### 4XX - Erro do cliente
![403](https://http.cat/403)

#### 5XX - Erro do servidor
![599](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.
#### Request
O `request` é um objeto que contêm informações sobre o `request` emitido pelo cliente, como por exemplo o cabeçalho HTTP, a URL, etc.

#### Response
O `responce` é um objeto, com diversos métodos, utilizado para retornar dados para o cliente.

## O que é e para que serve a Querystring?
#### O que é?
  `Querystring` é a parte da URL que contem dados. Estes dados são passados como parâmetros no formato de `chave=valor`.

#### Para quer serve?
Serve para passar dados através da URL, utilizando o método `GET`.

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
  var url_route = '/api/pokemons/';
  var responseStatusCode = 404;
  var responseObj = ERROR;

  switch (req.url) {
    case url_route+'create':
    case url_route+'read':
    case url_route+'update':
    case url_route+'delete':
      responseStatusCode = 200;
      responseObj = SUCCESS;
      break;
  }

  res.writeHead(responseStatusCode, {'Content-Type': 'application/json; charset=utf-8'});
  res.write(JSON.stringify(responseObj));
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
