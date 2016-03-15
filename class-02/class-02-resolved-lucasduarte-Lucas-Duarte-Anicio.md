# Node.js - Aula 02 - Exercício
**user:** [lucasduarte](https://github.com/lucasduarte)
**autor:** Lucas Duarte Anício

## Quais são os 4 verbos que utilizamos para o CRUD?

**GET**
	- Requisita uma representação do recurso especificado.

**POST**
	- Envia uma entidade e requisita que o servidor aceite-a como subordinada do recurso identificado pela URI

**PUT**
Requsita que uma entidade já existente seja armazenada embaixo da URI fornecida. Se a URI não aponta para um recurso existente o servidor pode criar um recurso com essa URI

**DELETE**
 - Remove o recurso especificado

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

####**1XX:** Informacional
![100](https://http.cat/100)

####**2XX:** Sucesso
![204](https://http.cat/204)

####**3XX:** Redirecionamento
![307](https://http.cat/307)

####**4XX:** Erro do Cliente
![415](https://http.cat/415)

####**5XX:** Erro do Servidor
![599](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.

- **Request:**
Contem dados da requisição recebida do cliente
- **Response:**
Possui dados para responder a requisição efetuada pelo cliente


## O que é e para que serve a Querystring?
É um conjunto de chave/valor que serve para recuperar dados nas páginas

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
'use strict';

var date = (new Date()).toJSON()
    , rotas = [ 'create', 'read', 'update', 'delete' ];

const http = require('http')
	, SUCCESS = {
			version: '1.0'
		, name: 'Be MEAN'
		, returned_at: date
	}
	, ERROR = {
		message: "Não encontrado!"
	};

http.createServer(function(req, res){
    var method = req.url.replace('/api/pokemons/', '');
    
	if(req.url === '/api/pokemons/' + method && rotas.indexOf(method) > -1) {
		res.writeHead(200, {'Content-Type': 'application/json'});
        SUCCESS.metodo = method;
		res.write(JSON.stringify(SUCCESS));
	}
	else {
		res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify(ERROR));
	}
	res.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
```
