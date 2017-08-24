# Node.js - Aula 02 - Exercício
**user:** [carloshenriqueribeiro](https://github.com/carloshenriqueribeiro)  
**autor:** Carlos Henrique Oliveira Ribeiro
**date:** 1501525417786  

## Quais são os 4 verbos que utilizamos para o CRUD?

CRUD | Descrição | Verbo |
-----|-----------|-------|
C|Create|POST
R|Read|GET
U|Update|PUT
D|Delete|DELETE 


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Para padronizar a comunicação entre client e server, com os **status codes** fica clara a resposta do servidor para a requisição feita, permitindo tratá-la adequadamente.

##### 101 - Mudando protocolos
![Mudando protocolos](https://http.cat/101)
Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo

##### 204 - Nenhum Conteúdo
![Nenhum conteúdo](https://http.cat/204)
O servidor processou a solicitação com sucesso, mas não é necessário nenhuma resposta.

##### 301 - Movido permanentemente
![Movido permanentemente](https://http.cat/301)
Esta e todas as solicitações futuras devem ser direcionada para o URI .

##### 404 - Não Encontrado
![Não encontrado](https://http.cat/404)
Conhecido na internet o **status code** 404 é de "page not found" ou "página não encontrada".

##### 500 - Erro interno no servidor
![Erro interno no servidor](https://http.cat/500)
O servidor ainda não suporta a funcionalidade ativada

## Explique o que é cada parâmetro da função recebida no `createServer`.

Existem dois parâmetros ao criar um servidor com a função `createServer`, `request ou req` e `response ou res`.

`Resquest` é um objeto do tipo **http.IncommingMessage**,
Armazena os dados da requisição do cliente.  
`Response` é um objeto do tipo **http.ServerResponse**  
É o callback que será retornado para o cliente que fez a requisição.


## O que é e para que serve a Querystring?

`Querystring` é um modelo de passagem de informações entre client e server. Nele são enviados conjuntos de propriedade e valor, onde a propriedade e valor são separados por "=" e os conjuntos são separados por "&".
São enviado via **url** no final do endereço após um "?".

Ex.: http://enderecoweb/?nome=carlos&idade=29

No final do endereço é introduzido um ponto de interrogação e logo em seguida os pares de propriedade e seu valor.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

```js
//server.js

'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: 1.0
      , name: 'Be MEAN'
      , created_at: date
      }
    , ERROR = {
        message: ":/ Não encontrado!"
      }
    ;

http.createServer(function(request, response) {

  switch (request.url) {

    case '/api/pokemons/create':
      response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
      SUCCESS.url = request.url;
      response.write(JSON.stringify(SUCCESS));
      break;

    case '/api/pokemons/read':
      response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
      SUCCESS.url = request.url;
      response.write(JSON.stringify(SUCCESS));
      break;

    case '/api/pokemons/update':
      response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
      SUCCESS.url = request.url;
      response.write(JSON.stringify(SUCCESS));
      break;

    case '/api/pokemons/delete':
      response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
      SUCCESS.url = request.url;
      response.write(JSON.stringify(SUCCESS));
      break;

    default:
        response.writeHead(404, {'Content-type': 'application/json; charset=utf-8'});
        response.write(JSON.stringify(ERROR));

  }

  response.end();

}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
