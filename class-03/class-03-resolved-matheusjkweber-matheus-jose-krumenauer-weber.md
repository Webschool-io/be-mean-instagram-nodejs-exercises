# Node.js - Aula 03 - Exercício
**user:** [matheusjkweber](https://github.com/matheusjkweber)<br> 
**autor:** Matheus José Krumenauer Weber<br>
**date:** 1456600950642

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Ele envia a segunda requisição porque ele está requisitando o favicon.


## Qual a DIFERENÇA entre o GET e o POST?

O GET é utilizado para quando queremos acessar alguma informação no servidor, outra coisa, o mesmo é visualizado através da url(a querystring após o endereço do servidor), e só pode enviar texto.

O POST é utilizado para quando queremos gravar alguma informação no servidor, pode enviar diversos tipos de dados(texto, arquivos, etc...).

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

Criando o Pokemon

```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"96","etag":"W/\"60-KBGEvOm+tN4IZCOXBi7JbA\"","date":"Sat, 27 Feb 2016 19:25:42 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Matheus Jose Krumenauer Weber","type":"aluno","_id":"56d1f836e7973e11003588bc"}


```

Editando o Pokemon

```js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-Q0c57XIKE+tyOOl5YY+7yA\"","date":"Sat, 27 Feb 2016 19:27:09 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6256054641868406785","electionId":"565e25d106dca622271891c4"}}


```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 27 Feb 2016 19:27:53 GMT","via":"1.1 vegur"}

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

Utilizei a api do pokeapi.co.
```js
'use strict';

const http = require('http');
const json2Html = require('node-json2html')
http.get({
  hostname: 'pokeapi.co',
  path: '/api/v2/pokemon/137/',
  agent: false

}, (response) =>  {
   let body = '';

    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));

    response.on('data', function(data) {
      body += data;
    });
    response.on('end', function() {
       var html = json2html.transform(body, {"tag": "div","id": "${id}","html": "${name}"});  

       console.log(html);
    });
});
```

Resposta

```js
STATUS: 200
HEADERS: {"server":"nginx/1.1.19","date":"Sat, 27 Feb 2016 19:36:56 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Cookie","x-frame-options":"SAMEORIGIN","allow":"GET, HEAD, OPTIONS"}
<div id="137">porygon</div>
```