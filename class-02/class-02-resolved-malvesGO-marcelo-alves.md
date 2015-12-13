# Node.js - Aula 02 - Exercício
**User:** [MalvesGO](https://github.com/MalvesGO)

**Autor:** Marcelo Alves

**Date:** Dom Dez 13 17:27:57 BRST 2015

## Quais são os 4 verbos que utilizamos para o CRUD?

# Create: POST
# Retrieve: GET
# Update: PUT
# Delete: DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Status Codes foram criados para ter um padrão especifico de erros retornados pelo servidor. Estes códigos nos permitem identificar a causa do problema quando utilizamos uma página web e o recurso não é carregado corretamente.

* **1XX** - Continue

![](https://http.cat/100)

* **2XX** - Accepted

![](https://http.cat/202)

* **3XX** - Unauthorized

![](https://http.cat/401)

* **4XX** - Blocked by Windows Parental Controls

![](https://http.cat/450)

* **5XX** - Network connect timeout error

![](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.

#Request

Possui todos os parâmetros utilizados na requisição de dados solicitada pelo usuário.

#Response

Possui todos os métodos utilizados para o envio de respostas para o usuário.

## O que é e para que serve a Querystring?

É um padrão utilizado no protocolo HTTP que permite o envio de informações através de requisições ao servidor. Podemos observar o seu uso em vários navegadores no seguinte formato pares/valores anexados a URL visitada. Para podermos utilizar precisamos adicionar o valor da seguinte forma: "?Key=value" exemplificando melhor: "?title=nodejs". Se for necessário utilizar mais de um conjunto de chaves/valores precisaremos concatenar usando o caractere especial "&" coringa.

Exemplo: www.malvesgo.github.io?name=Marcelo&ocupation=student

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
    , method = req.method;

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
