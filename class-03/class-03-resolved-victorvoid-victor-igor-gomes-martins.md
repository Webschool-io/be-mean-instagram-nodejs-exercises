# Node.js - Aula 03 - Exercício

**user:** [victorvoid](https://github.com/victorvoid)

**autor:** Victor Igor

## 1. Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Porque na segunda requisição, ele solicita o 'favicon.ico' automaticamente. 

## 2. Qual a DIFERENÇA entre o GET e o POST?

- **GET**: Get é enviado via URL e possui um limite de 1024 caracteres, e caso seja ultrapassado, corre o risco da página dar erro.

- **POST**: O Post utiliza a URI para enviar as informações ao servidor, e não tem limite de capacidade de envio de informações e por isso acaba sendo melhor que o GET.

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```js
/* CRIANDO POKEMON COM MEU NOME */

node class-03.js 
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"78","etag":"W/\"4e-N6xwBCDNRZ6CzrbPXljoNQ\"","date":"Sat, 05 Mar 2016 23:33:43 GMT","via":"1.1 vegur"}
Resultado: {"__v":0,"name":"Victor Igor","type":"aluno","_id":"56db6cd7bdff001100293034"}

/* ALTERANDO MEU POKEMON PELO MEU USE DO GITHUB*/

node class-03-alterandopokemon.js 
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-w8IWqnhJfkE31t3yhBV3iQ\"","date":"Sat, 05 Mar 2016 23:37:19 GMT","via":"1.1 vegur"}
Resultado: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6258716705548140545","electionId":"565e25d106dca622271891c4"}}

```

## 4. Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.
```js
'use strict'

const http        = require('http');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'DELETE'
      , path: '/api/pokemons/56db6f0abdff001100293035'
      };

function callback(res){
  console.log('STATUS: '+ res.statusCode);
  console.log('HEADERS: '+ JSON.stringify(res.headers));
  let data = '';
  res.on('data', (chunk)=>{
    data += chunk;
  });

  res.on('end', ()=>{
    console.log('Resultado: '+data);
  });
}

const req = http.request(options, callback);
req.on('error', (e)=>{
  console.log('Ocorreu um erro =< '+ e.message);
});
req.end();

/* Resultado: */

node class-03-deletandopokemon.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 05 Mar 2016 23:46:36 GMT","via":"1.1 vegur"}
Resultado: 
```

## 5. Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.

```JS

node class-03-getAPI.js
STATUS: 200
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"5517","etag":"W/\"158d-c8PSQN++DR9ObSkS3s0RWA\"","date":"Sun, 06 Mar 2016 00:48:35 GMT","via":"1.1 vegur"}
Resultado: <html><body><div>[{"_id":"568c4f016b71ba1100229ee6","name":"Bilica","type":"professor","__v":0},{"_id":"56954df660679d11000236fe","name":"Bilica","type":"Zica da Balada","__v":0},{"_id":"56983d9d8446e71100c68842","name":"Bilica","type":"Aluno","__v":0},{"_id":"569c402d50a0f01100292c9e","name":"Bilica","type":"Aluno","__v":0},{"_id":"56ad3787200ef511003a086a","name":"Bilica","__v":0},{"_id":"56ae6ede18f5f71100b157c6","name":"Bilica","type":"developer","__v":0},{"_id":"56b09cc25ad7d111001ec9b8","name":"Bilica","type":"professor","__v":0},{"_id":"56b09f485ad7d111001ec9b9","name":"Bilica","type":"professor","__v":0},{"_id":"56b09f6a5ad7d111001ec9bb","name":"Bilica","type":"professor","__v":0},{"_id":"56b0ad877229a31100582ff4","__v":0,"name":"Bilica"},{"_id":"56b0ae837229a31100582ff5","__v":0,"name":"Bilica"},{"_id":"56b0afda7229a31100582ff6","__v":0,"name":"Bilica"},{"_id":"56b0b0be7229a31100582ff7","__v":0,"name":"Bilica"},{"_id":"56b0b12f7229a31100582ff8","__v":0,"name":"Bilica"},{"_id":"56b0b16b7229a31100582ff9","__v":0,"name":"Bilica"},{"_id":"56b0b1d17229a31100582ffa","__v":0,"name":"Bilica"},{"_id":"56b0b2007229a31100582ffb","__v":0,"name":"Bilica"},{"_id":"56b0b5af7229a3110</div><div>0582ffc","__v":0,"name":"Bilica"},{"_id":"56b0b6157229a31100582ffd","__v":0,"name":"Bilica"},{"_id":"56b0b6527229a31100582ffe","__v":0,"name":"Bilica"},{"_id":"56b0b6597229a31100582fff","__v":0,"name":"Bilica"},{"_id":"56b106be64a60411007c3e2b","__v":0,"name":"Bilica"},{"_id":"56b106cc64a60411007c3e2c","__v":0,"name":"Bilica"},{"_id":"56b106dd64a60411007c3e2d","__v":0,"name":"Bilica"},{"_id":"56b1089e64a60411007c3e2e","__v":0,"name":"Bilica"},{"_id":"56b246c5520ef61100b0d75b","name":"Bilica","type":"Analista S.","__v":0},{"_id":"56b32d4d8584471100d6ff1d","__v":0,"name":"Bilica"},{"_id":"56b32d4f8584471100d6ff1e","__v":0,"name":"Bilica"},{"_id":"56b3ea986cb772110086c190","name":"Bilica","type":"professor","__v":0},{"_id":"56b54c365795bb110075fbaf","name":"Bilica","type":"aluno","__v":0},{"_id":"56b6453c4f05f4110063ea08","name":"Bilica","type":"Aluno do Be Mean","__v":0},{"_id":"56b7cf047b9f54110011fa79","name":"Bilica","type":"Aluno","__v":0},{"_id":"56b7d6c97b9f54110011fa7a","name":"Bilica","type":"aluno","__v":0},{"_id":"56b7d7ed7b9f54110011fa7b","name":"Bilica","type":"aluno","__v":0},{"_id":"56b7ff3b510b5d110014a6ed","name":"Bilica","type":"Aluno","__v":0},{"_id":"56b80d35ff45d31100182507","name":"Bilica","type":"aluno","__v":0},{"_id":"56b8a337c636191100dea91c","__v":0,"name":"Bilica"},{"_id":"56b8a79bc636191100dea91e","name":"Bilica","type":"aluno","__v":0},{"_id":"56b8a982c636191100dea91f","name":"Bilica","type":"aluno","__v":0},{"_id":"56b8a9e0c636191100dea921","name":"Bilica","type":"aluno","__v":0},{"_id":"56b8c8eb56b97311007c7ebf","name":"Bilica","type":"professor","__v":0},{"_id":"56b8dcbd7586941100aaf254","name":"Bilica","type":"Professor","__v":0},{"_id":"56b8df8f7586941100aaf255","name":"Bilica","type":"Professor","__v":0},{"_id":"56ba0d6adaf4af110073de78","__v":0,"name":"Bilica"},{"_id":"56bb6c7b81fa011100369fc3","name":"Bilica","type":"Water","height":1.6,"__v":0},{"_id":"56bbbcc182124e110077f53e","name":"Bilica","type":"teacher","__v":0},{"_id":"56bbc22b82124e110077f53f","name":"Bilica","__v":0},{"_id":"56bbc25c82124e110077f540","name":"Bilica","__v":0},{"_id":"56bd1aa22c257311009b5723","name":"Bilica","type":"aluno","__v":0},{"_id":"56c0f66664bae31100ebb879","name":"Bilica","type":"Aluno","__v":0},{"_id":"56c1fca27d062611000a1113","name":"Bilica","type":"aluno","__v":0},{"_id":"56c1fdab7d062611000a1114","name":"Bilica","type":"fire","__v":0},{"_id":"56c333e192ca4e110026e8e8","name":"Bilica","type":"Loko dos Baguio","__v":0},{"_id":"56c466ab1b09dc11002f3b9a","name":"Bilica","type":"voador","__v":0},{"_id":"56c8cda4a0299011005601d3","name":"Bilica","type":"Aluno","__v":0},{"_id":"56c922da8583cb11008176a9","name":"Bilica","type":"professor","__v":0},{"_id":"56cb86c82847fb1100a035e4","__v":0,"name":"Bilica"},{"_id":"56cb88bb2847fb1100a035e5","__v":0,"name":"Bilica"},{"_id":"56cb89352847fb1100a035e6","__v":0,"name":"Bilica"},{"_id":"56cb89492847fb1100a035e7","__v":0,"name":"Bilica"},{"_id":"56cb895b2847fb1100a035e8","__v":0,"name":"Bilica"},{"_id":"56cb895e2847fb1100a035e9","__v":0,"name":"Bilica"},{"_id":"56cc86fcd7b91611009bfe4b","__v":0,"name":"Bilica"},{"_id":"56cc89f5d7b91611009bfe4c","__v":0,"name":"Bilica"},{"_id":"56cc8a30d7b91611009bfe4d","name":"Bilica","type":"Fat","__v":0},{"_id":"56cca9450f4ac811005fb173","name":"Bilica","type":"Fat","__v":0},{"_id":"56cd27e473a6431100ba1de9","name":"Bilica","type":"professor","__v":0},{"_id":"56ce4dca8423d41100c0a9dc","name":"Bilica","type":"professor","__v":0},{"_id":"56ce85ddac1315110043cffa","name":"Bilica","type":"professor","__v":0},{"_id":"56ce865aac1315110043cffb","name":"Bilica","type":"aluno","__v":0},{"_id":"56d1f4e5e7973e11003588ba","name":"Bilica","type":"professor","__v":0},{"_id":"56d1f61ce7973e11003588bb","name":"Bilica","type":"aluno","__v":0},{"_id":"56d3772f835b421100aaed6c","name":"Eduardo Garcia","type":"aluno","__v":0},{"_id":"56d4ae6361ebc311008a82d1","__v":0},{"_id":"56d4b37d61ebc311008a82d2","name":"Jean Nascimento","type":"professor","__v":0},{"_id":"56db63edbdff001100293031","name":"Victor Igor","type":"aluno","__v":0},{"_id":"56d610e1b9f4861100c2cd57","name":"Jack Baura","type":"maconheiro","__v":0},{"_id":"56d75a62654832110058d892","name":"Eduardo Garcia","type":"aluno","__v":0},{"_id":"56db6693bdff001100293033","name":"Guitarra Modificada","type":"stratocaster","__v":0}]</div></body></html>

```
