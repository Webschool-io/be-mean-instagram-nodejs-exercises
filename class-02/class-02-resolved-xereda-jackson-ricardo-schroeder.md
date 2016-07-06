# Node.js - Aula 02 - Exercício
**User:** [xereda](https://github.com/xereda)

**Autor:** Jackson Ricardo Schroeder

**Date:** 1464932419174

#### 1 - Quais são os 4 verbos que utilizamos para o CRUD?
* **[ C ]** - `POST`    // create
* **[ R ]** - `GET`     // read/retrieve
* **[ U ]** - `PUT`     // update
* **[ D ]** - `DELETE`  // delete


#### 2 -  Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os _Status Codes_ foram introduzidos para que a comunicação entre um cliente e o servidor de internet fosse padronizada. É baseado numa lista de códigos com 3 algarismos cada, normalizando, dessa forma, os possíveis tipos de retorno de um servidor HTTP.

#### 1XX Informacional
###### 100 - Continue

![](https://http.cat/100)

#### 2XX Sucesso

###### 206 - Partial Content

![](https://http.cat/206)

#### 3XX Redirecionamento

###### 304 - Not Modified

![](https://http.cat/304)

#### 4XX Erro do Cliente

###### 409 - Conflict

![](https://http.cat/409)

#### 5XX Erro de Servidor

###### 502 - Bad Gateway

![](https://http.cat/502)


#### 3 - Explique o que é cada parâmetro da função recebida no `createServer`.

* **Request:** - Parâmetro que contém as informações da requisição feita ao script em questão.

* **Response:** - Parâmetro que estabelece um canal de comunicação com o client da requisição. É um handle para fazer as saídas, ou mais precisamente, o retorno, para o "requisitante".


#### 4 - O que é e para que serve a Querystring?

É uma parte da URL que contém informações da requisição no formato chave/valor. Utilizamos ela com o metodo `GET`.


#### 5 - Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

* /api/pokemons/create
* /api/pokemons/read
* /api/pokemons/update
* /api/pokemons/delete

```js

// server.js
"use strict";

var date = (new Date()).toJSON();

const http = require("http");
const SUCCESS = { version: 1.0, name: "Be MEAN", returned_at: date };
const ERROR = { message: "Método inválido para esta rota!" };
const ROTA = { message: "Rota inexistente!" };
const ContentType = { "Content-Type": "application/json; charset=utf-8" };

var server = http.createServer(function(req, res) {

  let url = req.url;
  let method = req.method;

  switch (url) {

    case "/api/pokemons/create":

      if (method === "POST") {
        res.writeHead(200, ContentType);
        res.write(JSON.stringify(SUCCESS));
      }
      else {
        res.writeHead(405, ContentType);
        res.write(JSON.stringify(ERROR));
      }
      break;

    case "/api/pokemons/read":

      if (method === "GET") {
        res.writeHead(200, ContentType);
        res.write(JSON.stringify(SUCCESS));
      }
      else {
        res.writeHead(405, ContentType);
        res.write(JSON.stringify(ERROR));
      }
      break;

    case "/api/pokemons/update":

      if (method === "PUT") {
        res.writeHead(200, ContentType);
        res.write(JSON.stringify(SUCCESS));
      }
      else {
        res.writeHead(405, ContentType);
        res.write(JSON.stringify(ERROR));
      }
      break;

    case "/api/pokemons/delete":

      if (method === "DELETE") {
        res.writeHead(200, ContentType);
        res.write(JSON.stringify(SUCCESS));
      }
      else {
        res.writeHead(405, ContentType);
        res.write(JSON.stringify(ERROR));
      }
      break;

    default:
      res.writeHead(404, ContentType);
      res.write(JSON.stringify(ROTA));

  }

  res.end();

});

server.listen(3000, function() {

  console.log("Servidor rodando em localhost:3000");

});

```
