# NodeJS - Aula 02 - Exercício
Autor: Juliano Padilha | julianopadilha
Data: Date.now();

## Quais são os quatro verbos que utilizamos para o CRUD?

```
Create - POST
Read/Retrieve - GET
Update - PUT
Delete: DELETE
```

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.

```
Os Status Codes são códigos de retorno HTTP compostos por 3 dígitos que seguem um formato padrão e foram criados para dar melhor direcionamento para a identificação correta do retorno do servidor.
```

- Informacional (1xx)
![100](https://http.cat/100)

- Sucesso (2xx)
![202](https://http.cat/202)

- Redirecionamento (3xx)
![302](https://http.cat/302)

- Erro do Cliente (4xx)
![408](https://http.cat/408)

- Erro do Servidor (5xx)
![503](https://http.cat/503)


## Explique o que é cada parâmetro da função recebida no 'createServer'.

- Request: Parâmetro que contêm informações relacionadas a requisições feitas pelo usuário para o servidor.

- Response: Parâmetro que contêm a resposta do servidor para as requisições do usuário.

## O que é e para que serve a Querystring?

- Querystring é um modelo de passagem de informações entre cliente e servidor, nele são enviados conjuntos de propriedade e valor, onde a propriedade e valor são separados por "=" e os conjuntos são separados por "&". São enviado via url no final do endereço após um "?".

- Serve para passar dados através da URL, utilizando o método GET.

## Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

```
'use strict';

var date = (new Date()).toJSON(); // Converte a data para formato JSON.

const http = require('http');
const url = require('url');
const SUCCESS = { //JSON
	version: 1.0,
	name: 'Be MEAN',
	returned_at: date
};
const ERROR = { //JSON
	message: "Página não encontrada!"
};

http.createServer(function(request, response) {
	var rotas = url.parse(request.url, true);

	switch(rotas.pathname) {
		case '/api/pokemons/create':
		case '/api/pokemons/read':
		case '/api/pokemons/update':
		case '/api/pokemons/delete':
			response.writeHead(200, {'Content-Type':'application/json;'});
			response.write(JSON.stringify(SUCCESS)); // converte valores em javascript para uma String  JSON 
			break;

		default:
			response.writeHead(404, {'Content-Type':'application/json; charset=utf-8'});
			response.write(JSON.stringify(ERROR)); // converte valores em javascript para uma String  JSON
	}

	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
```