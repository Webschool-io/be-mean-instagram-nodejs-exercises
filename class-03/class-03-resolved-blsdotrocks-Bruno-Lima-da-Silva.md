# Node.js - Aula 03 - Exercício

autor: Bruno Lima da Silva

## 1. Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?
A segunda requisição é feita pelo webkit solicitando favicon.ico e retorna vazia pois a aplicação não possui favicon

## 2. Qual a DIFERENÇA entre o GET e o POST?
GET solicita um determiado recurso servindo como método serguro e não deve ser usado para disperar uma ação. 
POST utiliza as informações enviadas no corpo da requisição para criar um novo revurso e também pode ser utilizado para processamentos que não são diretamente relacionados a um recurso.

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.
```js
'use strict';

const http = require('http');
const queryString = require('querystring');
const postData = queryString.stringify({
	name: 'Bruno Lima da Silva',
	type: 'Developer'
});

console.log('postData', postData);
console.log('Tamanho do postData', postData.length);

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'POST',
	path: '/api/pokemons',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

function callback(response) {
	console.log('STATUS: ' + response.statusCode);
	console.log('HEADERS: ' + JSON.stringify(response.headers));

	let data = '';

	response.setEncoding('utf8');
	response.on('data', (chunk) => {
		data += chunk;
	});

	response.on('end', () => {
		console.log('Dados finalizados', data);
	});
}

const request = http.request(options, callback)

request.on('error', (error) => {
	console.log('Erro' + error.message);
});

request.write(postData);
request.end();
```

```js
postData name=Bruno%20Lima%20da%20Silva&type=Developer
Tamanho do postData 45
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"90","etag":"W/\"5a-J4m44+PW7rFjlXfYKZgYXA\"","date":"Thu, 10 Nov 2016 04:59:59 GMT","via":"1.1 vegur"}
Dados finalizados {"__v":0,"name":"Bruno Lima da Silva","type":"Developer","_id":"5823fecec55c8f00121aea4f"}
```
```js
'use strict';

const http = require('http');
const queryString = require('querystring');
const postData = queryString.stringify({
	name: 'blsdotrocks',
});

console.log('postData', postData);
console.log('Tamanho do postData', postData.length);

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'PUT',
	path: '/api/pokemons/5823f259c55c8f00121aea4a',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

function callback(response) {
	console.log('STATUS: ' + response.statusCode);
	console.log('HEADERS: ' + JSON.stringify(response.headers));

	let data = '';

	response.setEncoding('utf8');
	response.on('data', (chunk) => {
		data += chunk;
	});

	response.on('end', () => {
		console.log('Dados finalizados', data);
	});
}

const request = http.request(options, callback)

request.on('error', (error) => {
	console.log('Erro' + error.message);
});

request.write(postData);
request.end();
```

```js
postData name=blsdotrocks
Tamanho do postData 16
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"121","etag":"W/\"79-OQ1I/gqDw8NPAMka9b82vw\"","date":"Thu, 10 Nov 2016 05:00:11 GMT","via":"1.1 vegur"}
Dados finalizados {"data":{"ok":1,"nModified":1,"n":1,"opTime":{"ts":"6351200116073824257","t":0},"electionId":"7fffffff0000000000000000"}}
```
## 4. Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.
```js
'use strict';

const http = require('http');

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'DELETE',
	path: '/api/pokemons/5823fecec55c8f00121aea4f',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

function callback(response) {
	console.log('STATUS: ' + response.status);
	console.log('HEADERS: ' + JSON.stringify(response.headers));

	let data = '';

	response.setEncoding('utf8');
	response.on('data', (chunk) => {
		data += chunk;
	});

	response.on('end', () => {
		console.log('Dados finalizados' + data);
	});
}

const request = http.request(options, callback);

request.on('error', (error) => {
	console.log('Error' + error.message);
});

request.end();
```

```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 10 Nov 2016 05:01:32 GMT","via":"1.1 vegur"}
Dados finalizados
```

## 5. Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.
```js
'use strict';

const http = require('http');

http.get({
	hostname: 'webschool-io.herokuapp.com',
	path: '/',
	port: 80,
	agent: false
}, (response) => {
	let body = '';
	console.log('STATUS: ' + response.status);
	console.log('HEADERS: ' + JSON.stringify(response.headers));

	response.on('data', (data) => {
		body += data;
	});

	response.on('end', () => {
		console.log('Resposta: ', body);
	});
});

```
```js
STATUS: 200
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","content-type":"text/html; charset=utf-8","content-length":"374","etag":"W/\"176-Pxdvu7DoyL19Fh8vgF9duw\"","date":"Thu, 10 Nov 2016 05:13:40 GMT","via":"1.1 vegur"}
Resposta:  <!DOCTYPE html><html><head><title>Api WebSchool</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Api WebSchool</h1><p>Welcome to Api WebSchool</p><p>Routes of api api/pokemons</p><ul><li>get api/pokemons</li><li>post api/pokemons</li><li>getOne api/pokemons/:id</li><li>put api/pokemons/:id</li><li>delete api/pokemons/:id</li></ul></body></html>
```