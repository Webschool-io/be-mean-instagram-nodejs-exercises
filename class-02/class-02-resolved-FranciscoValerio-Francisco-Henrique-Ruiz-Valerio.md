# Node.js - Aula 02 - Exercício
**user:** [FrancisoValerio]https://github.com/FranciscoValerio
**autor:** Francisco Henrique Ruiz Valério

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create
- Retrieve/Read
- Update
- Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os Status Codes foram criado para padronizar o retorno da requisições via HTTP para:
	* Informação.
		- 100 (continue): O cliente deve continuar com o pedido, é uma resposta provisória para informar o cliente que a solicitação foi recebida e não foi rejeitada pelo servidor. Cat Status Code (https://http.cat/100).

	* Sucesso.
		- 202 (accepted): O pedido foi aceito para processamento, porém o processamento ainda não foi concluído. É uma resposta intencionalmente nao comprometedora para que o servidor possa aceitar um pedido de algum outro processo. Cat Status Code  (https://http.cat/202).

	* Redirecionamento.
		- 302 (found): É utilizado para informar que o recurso solicitado está temporáriamente em uma URI diferente. O cliente deve continuar usando a URI solicitada para futuras solicitações. Cat Status Code (https://http.cat/302).

	* Erro do cliente.
		- 403 (Forbidden): O servidor entendeu a solicitação mais não a executará. Ou seja o servidor proibido essa solicitação e deve ser enviado o motivo de ter proibido na entity. Se desejar ser público o 404 pode ser usado no lugar. Cat Status Code (https://http.cat/403).

	* Erro do servidor.
		- 502 (Bad Gateway): O servidor é usado como GateWay ou Proxy. recebe uma responsta inválida do servidor superior, ao tentar executar a solicitação. Cat Status Code (https://http.cat/502).


## Explique o que é cada parâmetro da função recebida no `createServer`.

É passada uma função anônima onde a mesma é executada somente naquele momento e retorna para o cliente que realizou a requisição e é passado os seguintes parâmetros para a mesma:

- request: É o parâmetro onde os dados da requisição chegam para nosso servidor.
- response: É o nosso callback e o que será retornado para a requisição solicitada.

## O que é e para que serve a Querystring?

Querystring é padrão adotado pelo protocolo HTTP e serve para transportar informações do cliente para o servidor.

Utiliza-se do seguinte padrão:
	variavel=conteudo

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

'use strict';

var date = ( new Date()).toJSON();

const http = require('http')
	, url = require('url')
	, SUCCESS = { 
		version: "1.0"
		, name: 'Be MEAN'
		, created_at: date
	}
	, ERROR = {
		message: "Não econtrado!"
	};

http.createServer( function ( request, response ){

	var url_parse = url.parse(request.url);

	switch(url_parse.pathname) {
		case '/delete':
		case '/query':
		case '/edit':
		case '/new':
			response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(SUCCESS));			
			break;
		default:
			response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(ERROR));
	}

	response.end();	
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});