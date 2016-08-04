# Node.js - Aula 02 - Exercício
**user:** [gustavoprado013](https://github.com/gustavoprado013)  
**autor:** Gustavo Prado

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create - Criar
- Retrieve/Read - Recuperar/Ler
- Update - Atualizar
- Delete - Excluir

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat).

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

A querystring é um conjunto de caracteres de entrada para um computador ou browser da Web e enviado para um programa de consulta para recuperar informações específicas a partir de um banco de dados.

Na Internet, uma string de consulta (também chamado de querystring HTTP) faz parte do conjunto de caracteres de entrada automaticamente na barra de endereço de um site dinâmico quando um usuário faz uma solicitação de informação de acordo com certos critérios.

Em uma URL (Uniform Resource Locator), a querystring possui um símbolo de separação, geralmente um ponto de interrogação (?). Os dados aparecem logo após este símbolo de separação. Por exemplo, considere o seguinte URL:

	http://www.example.com?name=Gustavo&materia=JS&age=20

A querystring neste exemplo consiste de um campo ou variável, tecnicamente chamada de chave neste contexto (no exemplo é a palavra "name"), seguido por um sinal de igual (=), seguido pelo valor (no exemplo é o nome "angelo"). Cada chave e seu valor correspondente, indicado como uma equação, é chamado de par chave-valor. A querystring pode conter vários pares de chave-valores. Quando há mais de um par chave-valor, eles são tipicamente separados por um e comercial (&).

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

var date = (new Date()).toJSON();

var http = require('http')
	  , SUCCESS = {
		  version: '1.0'
	  	, name: 'Be MEAN'
	  	, returned_at: date
	  	}
	  ,	ERROR = {
	  		message: "Not Found!"
	  	};
var url = require('url');

http.createServer(function(req, res) {

	var url_parse = url.parse(req.url);

	switch(url_parse.pathname) {
		case '/api/pokemons/create':
		case '/api/pokemons/read':
		case '/api/pokemons/update':
		case '/api/pokemons/delete':
			res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
			res.write(JSON.stringify(SUCCESS));			
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8'});
			res.write(JSON.stringify(ERROR));
	}

	res.end();

}).listen(3000, function() {
	console.log('Servidor rodando em localhost:3000');
});
```
