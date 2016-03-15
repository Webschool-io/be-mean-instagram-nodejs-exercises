# Node.js - Aula 03 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Este é um **bug**, [já conhecido do Chrome](http://crbug.com/39402), que envia um `request` a mais, solicitando o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?
A principal diferença entre estes métodos HTTP é a **visibilidade**.

|        -         | GET                                                                              | POST|
|------------------------------ | -------------------------------------------------------------------------------- |-----|
|**Quando usar**| poucos dados, e sem necessidade de segurança | grande quantidade de dados e necessidade de segurança|
|**Visibilidade** | os parâmetros do request são passados, de maneira visível, junto á URL | os parâmetros são encapsulados junto com a requisição HTTP, não sendo "visível" pela URL |
|**limite de caracteres** | Sim | Não |
|**Velocidade** | + Rápido | + Lento devido ao encapsulamento |
|**Tipo dos dados** | somente `string` | tanto `strings`, quanto dados binários |
|**Armazenamento [Cache/Favoritos]** | Sim | Não |


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
#### Criando
##### http-request-post.js
```js
// ...
const postData = querystring.stringify({
        name: 'Filipe Leuch Bonfim'
      , type: 'estudante'
      });
// ...
```
```
> node http-request-post.js
postData name=Filipe%20Leuch%20Bonfim&type=estudante
Tamanho do postData 43
STATUS: 201
HEADERS:
{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"90","etag":"W/\"5a-mfMhUZqUwCgMFkJAaSZciQ\"","date":"Thu, 25 Feb 2016 03:17:12 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Filipe Leuch Bonfim","type":"estudante","_id":"56ce7238beca0911007b63d4"}
```
#### Modificando
##### http-request-put.js
```js
// ...
const postData = querystring.stringify({
        name: 'filipe1309'
      , type: 'estudante'
      });
// ...
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/56ce7238beca0911007b63d4'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        , 'Content-Length': postData.length
        }
      };
// ...
```
```
> node http-request-put.js
postData name=filipe1309&type=estudante
Tamanho do postData 30
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-gdBvthDD89Q1hnGOpDGo5A\"","date":"Thu, 25 Feb 2016 03:19:07 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6255063011229171713","electionId":"565e25d106dca622271891c4"}}
```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
node http-request-del.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 25 Feb 2016 03:43:11 GMT","via":"1.1 vegur"}
Dados finalizados:  
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```js
'use strict';

const https = require('https');

const options = {
    host: 'hacker-news.firebaseio.com'
  , path: '/v0/item/11177200.json'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function() {
    let data_json =  JSON.parse(data);
    let data_html = '<html><body><a href="';
    data_html += data_json.url + '"><h1>';
    data_html += data_json.title + '</h1></a></body></html>';

    console.log('Dados finalizados: ', data);
    console.log('Dados HTML: ',data_html);
  })
}

const req = https.request(options, callback);

req.on('error', function(e) {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```
#### Saída
```
STATUS: 200
HEADERS: {"content-length":"559","content-type":"application/json; charset=utf-8","cache-control":"no-cache","strict-transport-security":"max-age=31556926; includeSubDomains; preload","connection":"close"}
Dados finalizados:  {"by":"sbuk","descendants":143,"id":11177200,"kids":[11177782,11179326,11179315,11179298,11178441,11178062,11178125,11178816,11178621,11178617,11179227,11179351,11178575,11178592,11178842,11178320,11177835,11177993,11179134,11178197,11177614,11177594,11177730,11178786,11177924,11178156,11178104,11178544,11177437,11179222],"score":527,"time":1456429470,"title":"Microsoft, Google, Facebook Back Apple in Blocked Phone Case","type":"story","url":"http://www.bloomberg.com/news/articles/2016-02-25/microsoft-says-it-will-file-an-amicus-brief-to-support-apple"}
Dados HTML:  <html><body><a href="http://www.bloomberg.com/news/articles/2016-02-25/microsoft-says-it-will-file-an-amicus-brief-to-support-apple"><h1>Microsoft, Google, Facebook Back Apple in Blocked Phone Case</h1></a></body></html>
```
