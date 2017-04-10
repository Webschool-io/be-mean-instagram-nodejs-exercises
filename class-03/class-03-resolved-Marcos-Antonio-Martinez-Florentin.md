# Node.js - Aula 03 - Exercício
**user:** [Marcos](https://github.com/marks88martinez)

**autor:** Marcos Antonio Martinez Florentin

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

O Chrome, além da requisição que foi solicitada executa outro GET para buscar o favicon.icon e como não encontra retorna vazio.


## Qual a DIFERENÇA entre o GET e o POST?
- **GET** é o metodo de leitura, para obter dados passados na querystring.
- **POST** é o  metodo de inserção, cria um objeto.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"58","etag":"W/\"3a-sjfHHWizYlGIpgfVrIYyiw\"","date":"Wed, 09 Mar 2016 04:53:26 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Mateus","_id":"56dfac46526e7011009a58ec"}
```

```js
STATUS:201
HEADERS{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"83","etag":"W/\"53-u5Z+ipnVIkEOCLIKIHGoPA\"","date":"Wed, 13 Jul 2016 14:22:59 GMT","via":"1.1 vegur"}
Datos finalizados {"__v":0,"name":"Marcos Martinez","type":"Alumno","_id":"57864ec3d2fdf3110011f462"}

```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
STATUS:204
HEADERS{"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 13 Jul 2016 17:26:58 GMT","via":"1.1 vegur"}
Dados finalizados.

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```js

'use strict';

const http = require('http'); //libreria que se encarga de la requisiciones
const options = {
  host: 'webschool-io.herokuapp.com',
  path: '/api/pokemons',
  method: 'GET',
  headers: {
      'User-Agent': 'Chrome',
      'Content-Type': 'text/html'
  }

};

const req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('<html><body><h4> ' +chunk+'</code></body></html>');
  });
});

req.on('error', function(e) {
  console.log('Error: ' + e.message);
});

req.end();



```
