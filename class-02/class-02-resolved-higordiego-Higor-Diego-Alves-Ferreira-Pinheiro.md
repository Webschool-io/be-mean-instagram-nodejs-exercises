# Node.js - Aula 02 - Exercício
**User:** [higordiego](https://github.com/higordiego)

**Autor:** Higor Diego

**Date:** Thu Jan 28 2016 18:53:31 GMT-0300 (BRT)

## Quais são os 4 verbos que utilizamos para o CRUD?
C - Crear - POST
R - Leitura - GET
U - Alterar - PUT
D - Deletar - DELETE

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
O 'Status Code' foi inventado para padronização de erro e facilitando a conversa de cliente e servidor.

* **1XX** - Informação

![](https://http.cat/101)

* **2XX** - Sucesso

![](https://http.cat/200)

* **3XX** - Redirecionamento

![](https://http.cat/304)

* **4XX** - Cliente Error

![](https://http.cat/400)

* **5XX** - Servidor error

![](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.

Requisão - São os parametros da requisão do feita pelo o usuário.

Resposta - Contém o retorno do servidor ( resposta requerida pelo o usuário )

## O que é e para que serve a Querystring?
QueryString o conjunto de parametro enviado para o servidor, serve para passar parametros para o servidor (na requisição.) obtendo resposta.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';
var http = require('http');

    var primeira = {
        status: 01,
        messagem: 'Primeira pagina'
    },  
    segunda = {
        status: 02,
        messagem: 'Segunda pagina'
    },
    terceira = {
        status: 03,
        messagem: 'Terceira Pagina' 
    },
    quarta = {
        status: 04,
        messagem: 'Quarta pagina'
    },
    error = {
        status: false,
        messagem: 'Quarta pagina'   
    };

    http.createServer(function(req, res){
        var method = req.method
        ,   url    = req.url;
        switch(url){
            case '/t1':
            if(method == 'GET'){
                 res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(JSON.stringify(primeira));
            }else{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(error);
            }
            break;

            case '/t2':
            if(method == 'POST'){
                 res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(JSON.stringify(segunda));
            }else{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(error);
            }
            break;
            case '/t3':
            if(method == 'PUT'){
                 res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(JSON.stringify(terceira));
            }else{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(error);
            }
            break;
            
            case '/t4':
            if(method == 'POST'){
                 res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(JSON.stringify(quarta));
            }else{
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                 res.write(error);
            }
            break;

            default:
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.write('error: 404');
            break;

        }
    }).listen(3000,function(){
        console.log('servidor rodando porta http://localhost:3000');
    });

```
