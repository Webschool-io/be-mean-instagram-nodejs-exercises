# Node.js - Aula 02 - Exercício
**User:** [DouglasHennrich](https://github.com/DouglasHennrich)
**Autor:** Douglas Hennrich
**Date:** Date.now()

## Quais são os 4 verbos que utilizamos para o CRUD?
* **C** reate   - `POST`
* **R** etrieve - `GET`
* **U** pdate   - `PUT`
* **D** elete   - `DELETE`

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os `Status Codes` foram inventados para padronizar os tipos de retorno do servidor, facilitando o entendimento deles.

* **1XX** - Information
![](https://http.cat/101)

* **2XX** - Successful
![](https://http.cat/206)

* **3XX** - Redirection
![](https://http.cat/307)

* **4XX** - Client Error
![](https://http.cat/409)

* **5XX** - Server Error
![](https://http.cat/509)

## Explique o que é cada parâmetro da função recebida no `createServer`.
* **Request** - Contêm os parâmetros da requisição feita pelo Usuário

* **Response** - Contêm métodos para escrever respostas para o Usuário

## O que é e para que serve a Querystring?
* **O que é** - Conjunto de `key`/`value` anexados a URL

* **Para o que serve** - Passar parâmetros para o servidor através do método `GET`

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
      version: 1.0
    , code: 200
    , name: 'Be MEAN'
    , created_at: date
    }
  , ERROR = {
      message: "Method Not Allowed"
    , code: 405
    }
  ;

http.createServer(function(req, res){
    let url = req.url
      , method = req.method
      ;

    switch(url){
        case "/api/pokemons/create":
            if(method === "POST"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/pokemons/read":
            if(method === "GET"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/pokemons/update":
            if(method === "PUT"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/pokemons/delete":
            if(method === "DELETE"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            ERROR.message = "Not Found";
            ERROR.code = 404
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
})
 .listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
 });
```
