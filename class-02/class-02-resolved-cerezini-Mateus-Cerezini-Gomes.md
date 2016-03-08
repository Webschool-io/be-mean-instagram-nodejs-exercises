# Node.js - Aula 02 - Exercício
**user:** [Cerezini](https://github.com/Cerezini)
**autor:** Mateus Cerezini Gomes

## Quais são os 4 verbos que utilizamos para o CRUD?

- POST = Create
- GET = Read/Retrieve
- PUT = Update
- DELETE

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Foram inventados para informar sobre o processamento (sucesso, erros, informações) da requisição através do header da resposta.

**1XX - Informação**
![alt text](https://http.cat/100 "100")

**2XX - Sucesso**
![alt text](https://http.cat/202 "202")

**3XX - Redirecionamento**
![alt text](https://http.cat/304 "304")

**4XX - Erro no Cliente**
![alt text](https://http.cat/413 "413")

**5XX - Erro no Servidor**
![alt text](https://http.cat/599 "599")

## Explique o que é cada parâmetro da função recebida no `createServer`.

- **Request** é o objeto que contém os dados do pedido feito ao servidor. 
- **Response** é o objeto resposta com as informações requeridas no pedido que será retornado ao cliente.

## O que é e para que serve a Querystring?

A *querystring* é uma string com os parâmetros de busca passados em uma chamada HTTP GET, ou seja, são informações necessárias para retornar o(s) objeto(s) desejado(s) na chamada GET. 
Ex: Gostaria de receber todos os carros feitos em 2008 da cor azul, logo a *querystring* teria algo como `carro?ano=2008&cor=azul`.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

**DICA: NÃO USE IF!!!**

```js
// server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , url = require('url')
    , SUCCESS = {
        version: '1.0'
        , name: 'Be MEAN'
        , returned_at: date
        }
    , ERROR = {
        message: 'Não encontrado'
    };

http.createServer(function(req, res){
    var route = url.parse(req.url, true).pathname;

    switch (route) {
        case '/api/pokemons/create': 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(SUCCESS));
            break;

        case '/api/pokemons/read': 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(SUCCESS));
            break;

        case '/api/pokemons/update': 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(SUCCESS));
            break;


        case '/api/pokemons/delete': 
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(SUCCESS));
            break;

        default: 
            res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});
```
