# Node.js - Aula 01 - Exercício

autor: Bruno Lima da Silva

## 1. Quais são os 4 verbos que utilizamos para o CRUD?
C - Create - Post (Criar)
R - Retrieve/Read - Get (Ler)
U - Update - Put (Atualizar)
D - Delete - Delete (Deletar)

## 2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.
Os Status Codes foram inventados para que toda requisição feita possa receber um código de resposta e padronizar o retorno do servidor, onde com esse código é possivel saber se uma operação foi realizada com sucesso, se foi movide ou se não foi encontrada.
- 101 Switching Protocols (Mudando protocolos): Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo.
https://http.cat/101
- 201 Create (Criado): O pedido foi cumprido e resultou em um novo recurso que está sendo criado.
https://http.cat/201
- 304 Not Modified (Não modificado): O recurso não foi alterado.
https://http.cat/304
- 403 Forbidden (Proibido): O servidor entende a requisição, mas se recusa em atendê-la. O cliente não deve tentar fazer uma nova requisição.
https://http.cat/403
- 503 Service Unavailable (Servidor indisponível): O servidor não é capaz de processar a requisição pois está temporariamente indisponível.
https://http.cat/503

## 3. Explique o que é cada parâmetro da função recebida no `createServer`.
Request: Request é a requisição que o usuário está fazendo para o servidor
Response: Response é a resposta que o servidor está retornando para a requisição do usuário.

## 4. O que é e para que serve a Querystring?
QueryString é um modelo clássico de manutenção do estado da página. É composto porque chaves e valores anexados na URL.
Serve para passar parâmetros para o servidor através do método GET.

## 5. Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes sem if:
## - /api/pokemons/create
## - /api/pokemons/read
## - /api/pokemons/update
## - /api/pokemons/delete

```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http');
const SUCCESS = {
    version: 1.0,
    name: 'Be MEAN',
    returned_at: date
};
const ERROR = {
    message: 'Não encontrado'
};

http.createServer(function(request, response) {
    switch(request.url) {
        case '/api/pokemons/create':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(SUCCESS));
        break;
        case '/api/pokemons/read':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(SUCCESS));
        break;
        case '/api/pokemons/update':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(SUCCESS));
        break;
        case '/api/pokemons/delete':
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(SUCCESS));
        break;
        default:
            response.writeHead(404, {'Content-Type': 'application/josn'});
            response.write(JSON.stringify(ERROR));
        break;
    }
    response.end();
}).listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});
```