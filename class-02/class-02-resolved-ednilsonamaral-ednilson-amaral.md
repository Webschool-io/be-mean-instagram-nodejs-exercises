# Node.js - Aula 02 - Exercício  
**Autor:** Ednilson Amaral  
**Data:** 1450649579988

## Quais são os 4 verbos que utilizamos para o CRUD?  

* Create > POST;  
* Retrieve/Read > GET;  
* Update > PUT;  
* Delete > DELETE.


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.  

Toda vez que é enviada uma requisição para o servidor, é enviada como resultado um código de número inteiro, contendo 3 dígitos. Isso, com o intuito de entender a requisição e realizar ou não a requisição. Esse código de 3 dígitos é chamado de **status code**.  

Esses códigos são divididos em grupos. Tais grupos são divididos pelo primeiro dígito do código, conforme os exemplos abaixo:

### 1xx Informações  

Esse grupo serve apenas para informar que a informação foi recebida e que o processo irá continuar.  

![100 - Continue](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/100.jpg)


### 2xx Sucesso  

Esse grupo significa que a requisição foi recebida com sucesso.  

![202 - Accepted](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/202.jpg)


### 3xx Redirecionamento  

Esse grupo serve para avisar diretamente no cabeçalho do HTTP uma mudança de página.  

![301 - Moved Permanently](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/301.jpg)


### 4xx Erro do Cliente  

Esse grupo serve para nos dizer que o conteúdo não está acessível para o usuário (visitante) e nem para os motores de busca.  

![400 - Bad Request](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/400.jpg)


### 5xx Erro de Servidor  

Esse grupo serve para mostrar que alguma coisa aconteceu para que o servidor não tenha atendido a requisição, devido à algum erro.  

![507 - Insufficient Storage](https://raw.githubusercontent.com/ednilsonamaral/be-mean-instagram-nodejs/master/img/507.jpg)


## Explique o que é cada parâmetro da função recebida no `createServer`.

```js  
var http = require('http');  

http.createServer(function(request, response){  
  response.writeHead(200, {"Content-Type": "text/plain"});  
  response.write("Be MEAN");  
  response.end();  
}).listen(3000, function(){  
  console.log('Servidor rodando em localhost:3000');  
});  
```  

* Request: possui a requisição do usuário para o servidor;  
* Response: é quando o servidor irá dar a resposta da requisição do usuário.


## O que é e para que serve a Querystring?  

`index.html?nome=Ednilson&idade=23`  

No link acima, vemos a variável `nome=Ednilson` e a variável `idade=23`, logo após o `?`. Essas variáveis e valores são *querystring*. Elas são enviadas via **URL**. São enviadas através de formulários via `GET`.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes.  

```js  
'use strict';

var date = (new Date()).toJSON();

var http = require('http')
  , url = require('url')
  , SUCCCESS = 
    { version: '1.0'
    , name: 'JSON para 4 rotas diferentes'
    , returned_at: date
    }
    , ERROR = {
        message: "Deu alguma merda, mano!"
    }
  ;

http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname
    , routes = [ 
    	'/api/pokemons/create'
      , '/api/pokemons/read'
      , '/api/pokemons/update'
      , '/api/pokemons/delete'
      ]
    ;

  for(var key in routes){
    if (routes[key] === pathname) {
      response.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
      response.write(JSON.stringify(SUCCESS));
    } else {
      response.writeHead(404, {'Content-Type': 'application/json; charset=UTF-8'});
      response.write(JSON.stringfy(ERROR));
    }
  }

  response.end();

}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
