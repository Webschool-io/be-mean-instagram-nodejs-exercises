# NodeJS - Aula 02 - Exercício
**User:** [daniofilho](https://github.com/daniofilho)

**Autor:** Dânio Filho

**Date:** 1452553737957

## Quais são os 4 verbos que utilizamos para o CRUD?

Os principais métodos/verbos são:

- POST
- GET
- PUT
- DELETE

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os Status Codes são códigos de 3 digitos que seguem um certo padrão e que são retornados para especificar qual foi o resultado de uma requisição.

### 1XX - Informacional ###

Mostra que a informação recebida está sendo processada. Não diz que finalizou ou quando o fará, apenas mostra que está em processo.

Exemplo:

![](https://http.cat/101)

### 2XX - Sucesso ###

Avisa que a requisição foi processada com sucesso. Esta á a informação padrão que se recebe ao carregar um site, por exemplo.

Exemplo:

![](https://http.cat/202)

### 3XX - Redirecionamento ###

Retorna a informação de que aquela url especificada foi movida para outro local.

Exemplo:

![](https://http.cat/301)

### 4XX - Erro do cliente ###

Informa que houve algum problema na requisição, mas foi causado pelo lado do cliente.

Exemplo:

![](https://http.cat/404)

### 5XX - Erro do servidor ###

Informa que houve algum problema na requisição, mas foi causado pelo lado do servidor.

Exemplo:

![](https://http.cat/509)


## Explique o que é cada parâmetro da função recebida no `createServer`.

O **request** exibe as informações da requisição feita pelo cliente/usuário e o **response** é o retorno que ele receberá.


## O que é e para que serve a Querystring?

São parâmetros que são enviados junto com a URL via GET. Esses parâmetros seguem o padrão de `'key': 'value'` e servem para requisitar algo para o servidor.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

~~~ js
'use strict';

var date = (new Date()).toJSON();

const http = require('http'),
      SUCCESS = {
         version: 1.1,
         code: 200,
         name: 'Be MEAN',
         created_at: date
      },
      ERROR = {
         message: "Não encontrado!"
      };

http.createServer(function(req, res){

   let url = req.url;

   switch(url){

      case "/api/pokemons/create":
         create();
         break;

      case "/api/pokemons/read":
         read();
         break;

      case "/api/pokemons/update":
         update();
         break;

      case "/api/pokemons/delete":
         delete();
         break;

      default:
         res.writeHead(404, { 'Content-Type': 'application/json;' });
         res.write(JSON.stringify(ERROR));
         break;
   }

   res.end();

}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});

function create(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function read(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function update(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function delete(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

~~~
