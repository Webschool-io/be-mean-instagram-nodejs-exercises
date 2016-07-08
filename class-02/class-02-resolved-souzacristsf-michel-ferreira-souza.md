# Node.js - Aula 02 - Exercício
**user:** [souzacristsf](https://github.com/souzacristsf)<br/>
**autor:** Michel Ferreira Souza<br/>
**date:** 1457296166387<br/>

## Quais são os 4 verbos que utilizamos para o CRUD?
+ create
+ read
+ update
+ delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
O `Status Code` foi criado para identificar o erro retornado de uma requisição, padronizando o tipo de retorno.

####100
O cliente deve continuar com seu pedido. Esta resposta provisória é usada para informar o cliente que a parte inicial da solicitação foi recebida e ainda não foi rejeitado pelo servidor.<br/> 
![continue](https://http.cat/100)

####200
O pedido foi bem sucedido.<br/>
![ok](https://http.cat/200)

####301
O recurso solicitado foi atribuído um novo endereço permanente e quaisquer futuras referências a este recurso deverá usar um dos endereços devolvidos.<br/>
![moved permanently](https://http.cat/301)

####402
Este código é reservado para o uso futuro. <br/>
![payment required](https://http.cat/402)

####503
O servidor é atualmente incapaz de lidar com o pedido devido a uma sobrecarga temporária ou manutenção do servidor.<br/>
![Service Unavailable](https://http.cat/503)

## Explique o que é cada parâmetro da função recebida no `createServer`.
```js
function (request. response){}
```
*request* requisição feita do lado clienta para o servidor.
*response* analisada a requisição é retornado uma resposta do servidor.

## O que é e para que serve a Querystring?
*Querystring* é um conjunto de valores anexados a **URL** para um propósito no lado servidor. 

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
'use strict';

const PORT=9000;

const http = require('http')
    , date = (new Date()).toJSON()
    , SUCCESS = {
        version: 1
      , name: 'Be Mean'
      , date: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;
var server = http.createServer(function(request, response){
    switch (request.url) {
        case "/api/pokemons/create":
        case "/api/pokemons/read":
        case "/api/pokemons/update":
        case "/api/pokemons/delete":
            response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            response.write(JSON.stringify(SUCCESS));
            break;
        default:
            response.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            response.write(JSON.stringify(ERROR));
            break;
    }
    response.end();
});

server.listen(PORT, function(){
    console.log(server);
    console.log('Servidor rodando em localhost: ' + PORT);
});

```