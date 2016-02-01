# Node.js - Aula 03 - Exercício
**user:** [higordiego](https://github.com/higordiego)

**autor:** Higor Diego Alves Ferreira Pinheiro

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Uma para puxar o que foi feito na requisição e a segunda para o pegar o (favicon) *.icon

## Qual a DIFERENÇA entre o GET e o POST?

No get, as informações são enviadas como string com anexo na url, no post a informação é encapsuladas junto ao corpo da requisição não vista na url.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```js

'use strict'
const http = require('http')
,	  querystring = require('querystring')
,	  postData = querystring.stringify({
		name: 'Higor Diego'
	,	type: 'Aluno'
});
const options = {
	host: 'webschool-io.herokuapp.com'
	,	method: 'POST'
	,	path: '/api/pokemons'
	,	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	,	'Content-length' : postData.length

	}
};

function callback(res){
	let data = ''
	res.setEncoding('utf8');
	res.on('data', (chunk)=>{
		data += chunk;
	});
	res.on('end',()=>{
		console.log('Dados Cadastrados:',data);
	});
}
const req = http.request(options, callback);
req.write(postData)
req.end();

```
---

```js

'use strict'
const http = require('http')
,	  querystring = require('querystring')
,	  postData = querystring.stringify({
		name: 'higordiego'
	,	type: 'Aluno'
});
const options = {
	host: 'webschool-io.herokuapp.com'
	,	method: 'PUT'
	,	path: '/api/pokemons/56afcba6339d291100f39691'
	,	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	,	'Content-length' : postData.length

	}
};

function callback(res){
	let data = ''
	res.setEncoding('utf8');
	res.on('data', (chunk)=>{
		data += chunk;
	});
	res.on('end',()=>{
		console.log('Dados Alterados:',data);
	});
}
const req = http.request(options, callback);
req.write(postData)
req.end();


```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js

'use strict'
const http = require('http')
,	  querystring = require('querystring')
,	  postData = querystring.stringify({
		name: 'higordiego'
	,	type: 'Aluno'
});
const options = {
	host: 'webschool-io.herokuapp.com'
	,	method: 'PUT'
	,	path: '/api/pokemons/56afcba6339d291100f39691'
	,	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	,	'Content-length' : postData.length

	}
};

function callback(res){
	let data = ''
	res.setEncoding('utf8');
	res.on('data', (chunk)=>{
		data += chunk;
	});
	res.on('end',()=>{
		console.log('Dados Alterados:',data);
	});
}
const req = http.request(options, callback);
req.write(postData)
req.end();

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```html
<body>
	<h1>CEP</h1>
	<ul>
		<li>Santana</li>
		<li>Rua Voluntários da Pátria</li>
		<li>02011200</li>
		<li>SP</li>
	</ul>
</body>
</html>
```
