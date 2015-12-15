# Node.js - Aula 02 - Exercício
autor: Igor Vidotto Felipe

#### 1 - Quais são os 4 verbos que utilizamos para o CRUD?

* POST
* GET
* PUT 
* DELETE

#### 2 - Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.
Os *Status Codes*, também chamados de [*Response Codes*](https://developer.mozilla.org/en-US/docs/Web/HTTP), foram criados para responder uma requisição do cliente. O servidor envia um número de três dígitos se a requisição foi processada corretamente, sendo que esse número é determinado pelo estado do servidor mediante a requisição realizada.

#### 1XX Informacional

###### 100 - Continue
Essa resposta provisória indica que tudo até agora está OK e que o cliente deve continuar com a requisição ou apenas ignorar, se sua requisição já foi finalizada.

![Status Code 100](https://http.cat/100)

#### 2XX Sucesso

###### 201 - Created
A requisição foi realizada com sucesso e um novo recurso foi criado como resultado. Esta é uma resposta enviada tipicamente após uma requisição de *PUT*.

![Status Code 201](https://http.cat/201)

#### 3XX Redirecionamento

###### 304 - Not Modified
Se o cliente executou uma requisição de condição *GET* e o acesso é permitido, mas o documento não foi modificado, o servidor deve responder com o mesmo status code. A resposta 304 não deve conter uma *message-body*, e deste modo é sempre terminada pela primeira linha vazia após os campos do *header*.

![Status Code 304](https://http.cat/304)

#### 4XX Erro do Cliente

###### 400 - Bad Request
A requisição não foi entendida pelo servidor devido a sintaxe mal estruturada. O cliente não deve repetir a requisição sem antes modificá-la.

![Status Code 400](https://http.cat/400)

#### 5XX Erro de Servidor

###### 502 - Bad Gateway
O servidor, enquanto agindo como um *gateway* ou *proxy*, recebeu uma resposta inválida do servidor *upstream* que acessou na tentativa de completar a requisição.

![Status Code 502](https://http.cat/502)

#### 3 - Explique o que é cada parâmetro da função recebida no `createServer`.
Essa função é uma função de *callback* que recebe dois parâmetros: **request**, que é o parâmetro que contém a requisição do cliente e **response**, que o servidor utiliza para providenciar a resposta de acordo com a requisição do cliente.

#### 4 - O que é e para que serve a Querystring?
São as variáveis e valores que são obtidos através de formulários ou requisições do usuário e que são enviados à **url**, como `?name=Igor`, por exemplo. No Node.js, existe um módulo nativo chamado `url`, que é responsável por fazer *parser* e formatação de urls.

A função `url.parse()` retorna um objeto com vários atributos da url, dentre eles o atributo **query** que é o responsável por retornar a **query string** em formato JSON.

#### 5 - Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
* /api/pokemons/create
* /api/pokemons/read
* /api/pokemons/update
* /api/pokemons/delete

```js
// server.js

'use strict';

var date = (new Date()).toJSON();

var http = require('http')
  , url = require('url')
  , SUCESS = 
    { version: '1.0'
    , name: 'Exercício 02 Node.js'
    , returned_at: date
    }
  ;

http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname
    , routes = 
      [ '/api/pokemons/create'
      , '/api/pokemons/read'
      , '/api/pokemons/update'
      , '/api/pokemons/delete'
      ]
    ;

  for(var key in routes){
    if (routes[key] === pathname) {
      response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
      response.write(JSON.stringify(SUCESS));
    }
  }

  response.end();

}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
