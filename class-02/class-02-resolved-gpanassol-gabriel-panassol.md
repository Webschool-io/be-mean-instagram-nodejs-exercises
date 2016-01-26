# Node.js - Aula 02 - Exercício
**user:** [gpanassol](https://github.com/gpanassol)

**autor:** Gabriel Panassol

## Quais são os 4 verbos que utilizamos para o CRUD?

- GET
- PUT
- DELETE
- OPTIONS

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

O Status Codes foram inventados para apresentar ao usuário um codigo/mensagem identificando uma determinada situação do servidor. Os principais são:

## 1XX - Informacional
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

### Request

O Request é a requisição feita pelo servidor ao usuário. Nele contém as informações que foram solicitas, os paramêtros e caminhos necessários para aquela requisição.

### Response

O Response é a resposta fornecida do servidor para o usuário. Por exemplo, uma validação, alterações ou até mesmo uma mensagem de erro.

## O que é e para que serve a Querystring?

A QueryString é usada para passa paramêtro para o servidor. Por exemplo, um metodo especifica à ser executado, paramêtro de acessos entre outros. Veja um exemplo:

```
http://localhost:8080/validaNomeEIdade?nome=Gabriel&idade=29
```

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
        message: "Não encontrado!"
      }
    ;

http.createServer(function(req, res){
    switch(req.url) {
        case '/api/pokemons/create':
        case '/api/pokemons/read':
        case '/api/pokemons/update':
        case '/api/pokemons/delete':
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