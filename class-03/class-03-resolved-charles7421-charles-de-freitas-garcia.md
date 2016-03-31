# Node.js - Aula 03 - Exercício
**user:** charles7421
**autor:** Charles de Freitas Garcia

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

É um bug conhecido, sempre envia 2 requisições. Uma originalmente do URL requisitada e uma do Favicon.ico da URL originalmente requisitada. No Chorme, acontece sempre 2 requisições, já no Firefox, somente na primeira vez.

## Qual a DIFERENÇA entre o GET e o POST?

GET solicita algum recurso ou arquivo da URL no caso.
POST envia dados para ser processados e/ou inseridos.

Resumidamente, GET é pra pegar do servidor, e POST é pra inserir no servidor.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.


```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
		name: 'Charles de Freitas Garcia'
	});
const options = {
		host: 'webschool-io.herokuapp.com',
		method: 'POST',
		path: '/api/pokemons',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length' : postData.length
		}
	};

function callback(res) {
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados:', data)
	});
}

const req = http.request(options, callback);
req.on('error', (e) => {
	console.log('Erro:' + e.message);
});
req.write(postData);
req.end();
```

Modificando ...

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
		name: 'charles7421'
	});
const options = {
		host: 'webschool-io.herokuapp.com',
		method: 'PUT',
		path: '/api/pokemons/56fc80391333451100ec3524',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length' : postData.length
		}
	};

function callback(res) {
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados:', data)
	});
}

const req = http.request(options, callback);
req.on('error', (e) => {
	console.log('Erro:' + e.message);
});
req.write(postData);
req.end();

```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
		host: 'webschool-io.herokuapp.com',
		method: 'DELETE',
		path: '/api/pokemons/56fc8b1823545b11006d8868',
	};

function callback(res) {
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados:', data)
	});
}

const req = http.request(options, callback);
req.on('error', (e) => {
	console.log('Erro:' + e.message);
});
req.end();
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

Acesso a API Star Wars
http://swapi.co/api/people/1/


```js

'use strict';

const http = require('http');

const options = {
	host: 'swapi.co',
	method: 'GET',
	path: '/api/people/1/'
};

function callback(res) {
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + res.headers);

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados:', data)
	});
}

const req = http.request(options, callback);
req.on('error', (e) => {
	console.log('Erro:' + e.message);
});
req.end();

```


```html
STATUS:200
HEADERS:[object Object]
Dados finalizados: {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.co/api/planets/1/",
    "films": [
        "http://swapi.co/api/films/6/",
        "http://swapi.co/api/films/3/",
        "http://swapi.co/api/films/2/",
        "http://swapi.co/api/films/1/",
        "http://swapi.co/api/films/7/"
    ],
    "species": [
        "http://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "http://swapi.co/api/vehicles/14/",
        "http://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "http://swapi.co/api/starships/12/",
        "http://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.co/api/people/1/"
}

```
