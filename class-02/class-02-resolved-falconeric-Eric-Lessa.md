# Node.js - Aula 01 - Exercício
**user:** [falconeric](https://github.com/falconeric)
**autor:** Eric Lessa
**Data:**

## Quais são os 4 verbos que utilizamos para o CRUD?
Para o CRUD utilizamos seguintes verbos http: Post (**C**reate), Get (**R**etrieve), Put (**U**pdate) e Delete (**D**elete).


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os códigos de retorno HTTP foram criados para a identificação do retorno do servidor. Compostos por 3 dígitos padronizam a identificação do retorno.

**1xx Informacional**

!['Informacional'](https://http.cat/100)

**2xx Sucesso**

!['Successfull'](https://http.cat/200)

**3xx Redirecionamento**

!['Redirection'](https://http.cat/300)

**4xx Erro do Cliente**

!['Client Error'](https://http.cat/400)

**5xx Erro do Servidor**

!['Server Error'](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.
**Request:** Objeto com as informações de requisição do cliente, como URL, Headers e outras.

**Response:** O objeto response é usado para retornar a solicitação do cliente. Deve inicialmente chamar o método *response.writeHead()*, este método envia um HTTP status code e uma coleção de response headers ao cliente, após escrevermos os headers podemos escrever html utilizando o método *response.write()*, depois devemos chamar *response.end()*

## O que é e para que serve a Querystring?
Querystring são conjuntos de chave/valor anexados a URL.
Basicamente servem para recuperarmos valores de uma requisição.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```
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
