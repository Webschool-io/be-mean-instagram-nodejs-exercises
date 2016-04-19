# Node.js - Aula 03 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Sat Mar 05 2016 00:51:06 GMT-0300 (BRT)


## Por que quando requisitamos ao nosso servidor de *Query String*, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?

Porque a segunda requisição se trata de uma requisição do favicon.ico do site, como o script que foi implementado na aula não da essa informação sobre o caminho do favicon.ico, ele retorna vazio.

## Qual a diferença entre GET e o POST

O GET é utilizado para requisitar informações do servidor, já o POST é utilizado para enviar informações ao servidor para criação de uma entidade.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.

#### Criação do pokemon com meu nome
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Paulo Roberto da Silva'
      , type: 'Aluno'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons'
      , method: 'POST'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

##### Reposta

```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"89","etag":"W/\"59-vUcwx+2vIgWhwIrlPOqnug\"","date":"Tue, 01 Mar 2016 00:38:04 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Paulo Roberto da Silva","type":"Aluno","_id":"56d4e46cd537501100aa9722"}
```

#### Modificando o nome para meu user do Github
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'paulosilva92'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/56d4e46cd537501100aa9722'
      , method: 'PUT'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

##### resposta

```js
➜  aulas git:(master) ✗ node http-request-put.js 
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-cOYquFHX6hzfF+eAuo8bCw\"","date":"Tue, 01 Mar 2016 00:39:02 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6256877183940165633","electionId":"565e25d106dca622271891c4"}}
```

## Depois faça o DELETE, criando o script para tal e colocando aqui a resposta.

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'paulosilva92'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/56d4e46cd537501100aa9722'
      , method: 'DELETE'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
//req.write(postData);
req.end();
```

##### reposta

```js
➜  aulas git:(master) ✗ node http-request-delete.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 02 Mar 2016 16:59:03 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.

```js
'use strict';

const http = require('http');
var RESP = {
  name: 'resposta'
};

http.get({
  hostname : 'pokeapi.co',
  path: '/api/v2/language/5/',
},(response) => {
    let body = "";
    console.log('STATUS:'+ response.statusCode);
    console.log(response.headers);

    response.on('data', data=>{
      body += data;
    });

    response.on('end', function(){
       RESP.result = JSON.parse(body).name;
    });
}); 

http.createServer((request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>'+RESP.result+'<h1>');
  response.end();
}).listen(3000, function(){
  console.log('rodando nas porta 3000');
});
```
