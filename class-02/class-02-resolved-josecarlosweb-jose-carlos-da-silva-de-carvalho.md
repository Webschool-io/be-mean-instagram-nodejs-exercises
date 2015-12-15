```md
# Node.js - Aula 02 - Exercício
**user:** [josecarlosweb](https://github.com/josecarlosweb)
**autor:** SEU NOME COMPLETO

## Quais são os 4 verbos que utilizamos para o CRUD?
C - Create - Criar/Inserir/Salvar
R - Retrieve - Recuperar/Pegar
U - Update - Atualizar
D - Delete - Apagar

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os Status Code são uma maneira de informar o status da comunicação entre cliente e servidor. Utilizando de códigos numéricos, uma aplicação no servidor ou no cliente podem identificar ou informar quando um determinado evento aconteceu (Ex. erro, endereço movido, não autorizado dentre outros).
Exemplo do erro 500 (erro interno do servidor):
![500](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.
A função createServer recebe uma função de _callback_ que tem dois parâmetros:
1. request: Chamado sempre há uma solicitação. Note-se que pode haver vários pedidos por conexão (no caso de conexões keep-alive). request é uma instância de http.IncomingMessage
2. response é uma instância de http.ServerResponse. Chamado quando é recebida uma resposta a esse pedido. Este evento é executado apenas uma vez. 

## O que é e para que serve a Querystring?

É uma forma de passar variáveis e valores via URL, ou seja, via requisição GET.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
//server js

'use strict';

var date = (new Date()).toJSON();

const http = require('http'),
metadados = {
    version: 1.0,
    returned_at: date,
}
, CREATE = {
    name: 'CREATE A POKEMON',
    meta: metadados,
}
, READ = {
    name: 'READ A POKEMON',
    meta: metadados,
}
, UPDATE = {
    name: 'UPDATE A POKEMON',
    meta: metadados,
}
, DELETE = {
    name: 'DELETE A POKEMON',
    meta: metadados,
}
, ERROR = {
    message: "Erro! Digite uma url válida"
};

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'}); 
    var write = ERROR;
    
    switch(req.url){
        case '/api/pokemons/create': write = CREATE; break;
        case '/api/pokemons/read': write = READ; break;
        case '/api/pokemons/update': write = UPDATE; break;
        case '/api/pokemons/delete': write = DELETE; break

        default: res.writeHead(404, {'Content-Type':'application/json; charset=utf-8'}); break;
    }

    res.write(JSON.stringify(write));
    res.end();

}).listen(3000, function(){
    console.log("Server Js na porta 3000");
})

```