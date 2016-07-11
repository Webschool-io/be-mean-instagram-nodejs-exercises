# Node.js - Aula 02 - Exercício
**user:** [Marcos](https://github.com/marks88martinez)

**autor:** Marcos Antonio Martinez Florentin

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create, Retrieve, Update, Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Serve para padronizar a comunicação entre cliente e servidor, sabendo assim qual é a resposta que ela retorna.



## 1XX - Informação - Continue
![](https://http.cat/100)

## 2XX - Sucesso - ok
![](https://http.cat/200)

## 3XX - Redirecionamento - Temporary Redirect
![](https://http.cat/307)

## 4XX- Erro de cliente - Unauthorized
![](https://http.cat/401)

## 5XX - Erro de servidor - Internal Serve Error
![](https://http.cat/500)


## Explique o que é cada parâmetro da função recebida no `createServer`.

#Request:
Requisição feita pelo cliente;
#Response:
Resposta do servidor para o cliente.


## O que é e para que serve a Querystring?

Usada normalmente para armazenar valores de variáveis, tais valores são armazenados no final da URL.
## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';
var date = (new Date()).toJSON();
const http = require('http'),
V1 = {
  version:'1.0',
  name:'Rota1',
  created_at: date
},V2 = {
  version:'2.0',
  name:'Rota2',
  created_at: date
},V3 = {
  version:'3.0',
  name:'Rota3',
  created_at:date
},V4 = {
  version:'4.0',
  name:'Rota4',
  created_at:date
},ERROR = {
  message : "DEU MERDA FI!!!!"
  };

  http.createServer(function(req, res){


    switch (req.url) {
      case '/api/v1':
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON.stringify(V1));
      break;
      case '/api/v2':
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON.stringify(V2))
      break;
      case '/api/v3':
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON, stringify(V3));
      break;
      case '/api/v4':
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON.stringify(V4));
      break;
      default:
      res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
      res.write(JSON.stringify(ERROR));

    }
    res.end();
  }).listen(3000, function(){
    console.log('Servidor esta funcionando en localhost:3000');
  });


```
