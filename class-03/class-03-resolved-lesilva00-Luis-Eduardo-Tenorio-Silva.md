# Node.js - Aula 03 - Exercício
**user:** [lesilva00](https://github.com/lesilva00)
**autor:** Luís Eduardo Tenório Silva
**date:** 1456600950642

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Em vários navegadores, a segunda requisição é realizada para requisitar o componente _favicon.ico_.


## Qual a DIFERENÇA entre o GET e o POST?
GET e POST são métodos utilizados no protocolo HTTP para realizar uma atividade específica.
O método GET é utilizado quando requisitamos alguma informação do servidor.
O método POST é utilizado quando desejamos inserir no servidor um ou mais dados.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

### Criando o Pokemon

```js
'use strict';

var querystring = require('querystring');
var http = require('http');

const postData = querystring.stringify({
  name:'Luís Eduardo',
  type:'Aluno'  
});

const options = {
  host:'webschool-io.herokuapp.com',
  method:'POST',
  path:'/api/pokemons',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Content-Length':postData.length
  }
}

function callback(res){
  console.log('STATUS CODE: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';
  res.setEncoding('utf-8');
  res.on('data', chunck => {
    data += chunck;
  });

  res.on('end', () => {
    console.log("Dados totais recebidos: " + data);
  });
}

var request = http.request(options,callback);

request.on('error', error => {
  console.log('Error: ' + error.message);
});

request.write(postData);
request.end();

```

Saída do Node.js

```
$ node http-post-execution.js
STATUS CODE: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"80","etag":"W/\"50-qpBmZ7pdtUhKR33kqXXBzw\"","date":"Tue, 09 Aug 2016 14:10:24 GMT","via":"1.1 vegur"}
Dados totais recebidos: {"__v":0,"name":"Luís Eduardo","type":"Aluno","_id":"57a9e450d3285e1100a0deb8"}
```

###Editando o Pokemon

```js
'use strict';

var querystring = require('querystring');
var http = require('http');

const putData = querystring.stringify({
  name:'lesilva00'
});

const options = {
  host:'webschool-io.herokuapp.com',
  method:'PUT',
  path:'/api/pokemons/57a9e450d3285e1100a0deb8',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Content-Length':putData.length
  }
}

function callback(res){
  console.log('STATUS CODE: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';
  res.setEncoding('utf-8');
  res.on('data', chunck => {
    data += chunck;
  });

  res.on('end', () => {
    console.log("Dados totais recebidos: " + data);
  });
}

var request = http.request(options,callback);

request.on('error', error => {
  console.log('Error: ' + error.message);
});

request.write(putData);
request.end();

```

Saída do Node.js

```
$ node http-put-execution.js
STATUS CODE: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-eWEgyhvz97x3SSsZRX7m0A\"","date":"Tue, 09 Aug 2016 14:17:38 GMT","via":"1.1 vegur"}
Dados totais recebidos: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6316832848628154369","electionId":"576451dfece94f32689e021d"}}

```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
'use strict';

var querystring = require('querystring');
var http = require('http');

const options = {
  host:'webschool-io.herokuapp.com',
  method:'DELETE',
  path:'/api/pokemons/57a9e450d3285e1100a0deb8',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  }
}

function callback(res){
  console.log('STATUS CODE: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';
  res.setEncoding('utf-8');
  res.on('data', chunck => {
    data += chunck;
  });

  res.on('end', () => {
    console.log("Dados totais recebidos: " + data);
  });
}

var request = http.request(options,callback);

request.on('error', error => {
  console.log('Error: ' + error.message);
});
request.end();
```

Saída do Node.js
```
STATUS CODE: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Tue, 09 Aug 2016 14:24:08 GMT","via":"1.1 vegur"}
Dados totais recebidos:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

Utilizei a api do [Star Wars](http://swapi.co/api/people) após observar os exemplos dos meus colegas.

```js
'use strict';

const http = require('http');

const options = {
  host:'swapi.co',
  path:'/api/people/10',
  headers:{
    'Content-Type':'text/html'
  }
}

function callback(res){
  console.log('STATUS CODE: ' + res.statusCode);
  console.log('HEADERS: '+ JSON.stringify(res.headers));
  let data = '';

  res.on('data', chunck => {
    data += chunck;
  });

  res.on('end', () => {
    console.log('Dados finais: ' + data);
  });
}

http.get(options,callback);
```

Resposta

```js
STATUS CODE: 301
HEADERS: {"date":"Tue, 09 Aug 2016 14:37:48 GMT","content-type":"text/html; charset=utf-8","transfer-encoding":"chunked","connection":"close","set-cookie":["__cfduid=d5018a39ef2846e3f8467399e75dee42e1470753468; expires=Wed, 09-Aug-17 14:37:48 GMT; path=/; domain=.swapi.co; HttpOnly"],"location":"http://swapi.co/api/people/10/","x-frame-options":"SAMEORIGIN","via":"1.1 vegur","server":"cloudflare-nginx","cf-ray":"2cfbf2bb35854a96-GRU"}

```
