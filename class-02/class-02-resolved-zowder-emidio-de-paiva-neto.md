# Node.js - Aula 02 - Exercício
**user:** [Zowder](https://github.com/Zowder)
**autor:** Emídio de Paiva Neto

## Quais são os 4 verbos que utilizamos para o CRUD?
>* Create(POST) - Read/Retrieve(GET) - Update(PUT) - Delete(DELETE)


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Surgiu com a necessidade de padronização de retorno do servidor, facilitando o entendimento de cada um.

*  **1XX - Informacional**

![](https://http.cat/100)

*  **2XX - Sucesso**

![](https://http.cat/200)

*  **3XX - Redirecionamento**

![](https://http.cat/307)

* **4XX- Erro de cliente**

![](https://http.cat/404)

*  **5XX - Erro de servidor**

![](https://http.cat/502)

## Explique o que é cada parâmetro da função recebida no `createServer`.
**Request:** Parâmetro da requisição feita pelo usuário.
**Response:** Parâmetro que retorna as informações para o usuário.

## O que é e para que serve a Querystring?

>Na Internet, uma string de consulta (também chamado de querystring HTTP) faz parte do conjunto de caracteres de entrada automaticamente na barra de endereço de um site dinâmico quando um usuário faz uma solicitação de informação de acordo com certos critérios.

Exemplo:

    http://example.com/over/there?name=ferret


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
//server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }

    , ERROR = {
        message: "Não encontrado!"
      }
    ;

http.createServer(function(req, response){
  switch(req.url){

  			case "/api/pokemons/create" :
  				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  				response.end(JSON.stringify([SUCCESS, {info: "Create: Ok"}]));
  			break;
  			case "/api/pokemons/update" :
  				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  				response.end(JSON.stringify([SUCCESS, {info: "Update: Ok"}]));
  			break;
  			case "/api/pokemons/read" :
  				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  				response.end(JSON.stringify([SUCCESS, {info: "Retrieve: Ok"}]));
  			break;
  			case "/api/pokemons/delete" :
  				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  				response.end(JSON.stringify([SUCCESS, {info: "Delete: Ok"}]));
  			break;
  			default:
  				response.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'})
  				response.end(JSON.stringify(ERROR));
  			break;
  	}
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
