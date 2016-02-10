# Node.js - Aula 03 - Exercício

**Autor:** Wendell Adriel Luiz Silva - [WendellAdriel](https://github.com/WendellAdriel)  
**Data:** 1455144837454

## Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?

A segunda requisição que o **Chrome** envia é para trazer o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?

- **`GET`**
    - Todas informações são enviadas anexadas à `URL`
    - Há um limite máximo de caracteres que podem ser enviados
    - Dados enviados ficam guardados no `cache` do navegador
    - A mensagem é enviada apenas como uma `string`
- **`POST`**
    - Todas informações são enviadas junto ao corpo da requisição `HTTP`, protegendo para que os dados não sejam vistos na `URL`
    - Não há um limite de caracteres que podem ser enviados
    - Os dados enviados não ficam guardados no `cache` do navegador
    - Pode enviar outros tipos de dados além de `string`

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```
postData name=Wendell%20Adriel&type=student
Tamanho do postData 34
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"83","etag":"W/\"53-FJJpQe0EvnaiYkm2MUIbNQ\"","date":"Wed, 10 Feb 2016 23:06:28 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Wendell Adriel","type":"student","_id":"56bbc27482124e110077f541"}
```

```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-vTjX0L3EIPEGcUjU9U3wNg\"","date":"Wed, 10 Feb 2016 23:09:16 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6249803432933195777","electionId":"565e25d106dca622271891c4"}}
```

## Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.

```
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 10 Feb 2016 23:13:59 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.

```js
// Chamada para API
'use strict';

const http      = require('http');

http.get({
  hostname : 'pokeapi.co'
, path     : '/api/v2/pokemon/212/'
, agent    : false
}, res => {
  let data = '';
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    let json = JSON.parse(data);
    console.log('<h1>' + json.id + ' - ' + json.name + '</id>');
  });
});

// RESPOSTA
STATUS: 200
HEADERS: {"server":"nginx/1.1.19","date":"Wed, 10 Feb 2016 23:39:43 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Cookie","x-frame-options":"SAMEORIGIN","allow":"GET, HEAD, OPTIONS"}
<h1>212 - scizor</id>
```
