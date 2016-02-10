# Node.js - Aula 02 - Exercício

**Autor:** Wendell Adriel Luiz Silva - [WendellAdriel](https://github.com/WendellAdriel)  
**Data:** 1455123299354

## Quais são os 4 verbos que utilizamos para o CRUD?

- **Create:** `POST`
- **Retrieve:** `GET`
- **Update:** `PUT`
- **Delete:** `DELETE`

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat).

Foram inventados a fim de padronizar os retornos possíveis utilizados por servidores.

- **1XX:** Códigos de informação  
![100](https://http.cat/100.jpg)

- **2XX:** Códigos de sucesso
![202](https://http.cat/202.jpg)

- **3XX:** Códigos de redirecionamento
![301](https://http.cat/301.jpg)

- **4XX:** Códigos de erro do `cliente`
![409](https://http.cat/409.jpg)

- **5XX:** Códigos de erro do `servidor`
![507](https://http.cat/507.jpg)

## Explique o que é cada parâmetro da função recebida no `createServer`.

- **request:** parâmetro com todos dados da requisição feita pelo usuário.
- **response:** parâmetro com métodos utilizados para devolver uma resposta ao usuário.

## O que é e para que serve a Querystring?

- **O que é:** uma parte da URL que contém um ou mais parâmetros passados como `chave=valor`.
- **Para que serve:** para passar dados (parâmetros) necessários para o servidor através do método `GET`.

## Escreva no código do server.js uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

var now = (new Date()).toJSON();

const http = require('http')
    , API_ROUTE = '/api/pokemons/'
    , SUCCESS = {
        message : 'Route OK'
      , returned_at : now
      }
    , ERROR = {
        message : 'Warning: Route NOT OK!!!'
      , returned_at : now
    };

http.createServer(function(req, res) {
  switch(req.url) {
    case API_ROUTE + 'create':
    case API_ROUTE + 'read':
    case API_ROUTE + 'update':
    case API_ROUTE + 'delete':
      res.writeHead(200, { 'Content-Type' : 'application/json' });
      res.write(JSON.stringify(SUCCESS));
      break;
    default:
      res.writeHead(404, { 'Content-Type' : 'application/json' });
      res.write(JSON.stringify(ERROR));
      break;
  }
  res.end();
}).listen(3000, function() {
  console.log('Servidor rodando em localhost:3000');
});
```
