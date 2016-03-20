# Node.js - Aula 02 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2015

##01.Quais são os 4 verbos que utilizamos para o CRUD
-CREATE , READ , UPDATE , DELETE.

##02.Para que foram inventados os status codes? de um exemplo de 1 código por grupo e a imagem do cat Status Code.

-Servem para padronizar erros que acontecem 

### 100 - Switching protocols

![100](https://http.cat/101)

### 202 - Accepted

![202](https://http.cat/202)

### 307 - Temporary Redirect

![307](https://http.cat/307)

### 414 - Requested URI too long

![414](https://http.cat/414)

### 507 - Insuficient storage

![507](https://http.cat/507)


##03.Explique o que é cada parâmetro da função recebida no createServer
-Request métodos para lidar com a requisição do cliente
-Response métodos para lidar com a resposta do servidor

##04.Oque é e para que serve a QueryString
é um conjunto de chave valor anexado a URL e com ela podemos passar parametros para o servidor

##05.Escreva o código do server.js uma forma de entregar um JSON de sucesso em 4 rotas diferentes
```
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
      version: 1.0
    , code: 200
    , name: 'MEAN'
    , created_at: date
    }
  , ERROR = {
      message: "DEU MERDA"
    , code: 405
    };

http.createServer(function(req, res){
    let url = req.url
      , method = req.method;

    switch(url){
        case "/api/cliente/create":
            if(method === "POST"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/read":
            if(method === "GET"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/update":
            if(method === "PUT"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;

        case "/api/cliente/delete":
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
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
 });

```