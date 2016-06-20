# Node.js - Aula 02 - Exercício
**user:** [falconeric](https://github.com/falconeric)  
**autor:** Eric Lessa

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Nesta requisição vazia o chrome faz um request do favicon.

## Qual a DIFERENÇA entre o GET e o POST?
**GET** Solicita dados a um recurso especificado.  
**POST** Envia dados para serem processados em um recurso especificado.

### GET
Envia a query string através da URL.
>/test/demo_form.asp?name1=value1&name2=value2

* requisições via GET podem ser cacheadas
* permanecem no histórico do browser
* podem ser favoritadas
* nunca devem ser usadas para informar dados sensíveis, Ex. password
* possui restrição no tamanho
* deve ser usado apenas para recuperar dados

### POST
A query string é enviada no corpo da mensagem HTTP.
>POST /test/demo_form.asp HTTP/1.1  
Host: w3schools.com  
name1=value1&name2=value2

* Post requests nunca são cacheados
* não permanecem no histórico do browser
* não podem ser favoritados
* não possuem restrições em relação ao seu tamanho

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```
elcarvalho:be-mean-modulo-nodejs ericlessa$ node http-request-post.js  
STATUS 201
HEADERS {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"77","etag":"W/\"4d-P2rkHtNv9Zh6eZfjzWTxCQ\"","date":"Mon, 20 Jun 2016 21:36:09 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Eric Lessa","type":"Aluno","_id":"576861c9952453110092d990"}

elcarvalho:be-mean-modulo-nodejs ericlessa$ node http-request-put.js
STATUS 202
HEADERS {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-qEl5GKr3i3oBfZfSLk56lg\"","date":"Mon, 20 Jun 2016 21:44:46 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6298393815292051457","electionId":"576451dfece94f32689e021d"}}
```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
'use strict';

const http = require('http');
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/576861c9952453110092d990'
      , method: 'DELETE'
      , headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

function callback(res) {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data);
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERROR: ', e.message);
});
req.end();


elcarvalho:be-mean-modulo-nodejs ericlessa$ node http-request-delete.js
STATUS 204
HEADERS {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Mon, 20 Jun 2016 21:49:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```
'use strict';
const http = require('http');
const options = {
  host: 'api.usa.gov'
, path: '/jobs/search.json?query=developer'
};
let html = '';

function callback(res) {
  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    html = '<html><body>';

    data.forEach((e) => {
        html += '<ul>';
        html += '<li>Vaga: '+ e.position_title +'</li>';
        html += '<li>Empresa: '+ e.organization_name +'</li>';
        html += '<li>Faixa Salarial: '+ e.minimum +'~'+ e.maximum +'</li>';
        html += '<li>Detalhes: '+ e.url +'</li>';
        html += '</ul>';
    });

    html += '</body></html>';
  });
}

const req = http.request(options, callback);
req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();

http.createServer(function(request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write(html);
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
```
