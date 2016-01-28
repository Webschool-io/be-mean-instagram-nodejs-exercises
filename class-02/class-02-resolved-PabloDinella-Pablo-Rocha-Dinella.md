# Node.js - Aula 02 - Exercício
**user:** [PabloDinella](https://github.com/PabloDinella/)
**autor:** Pablo Rocha Dinella
**date:** 1453992406579

## Quais são os 4 verbos que utilizamos para o CRUD?

|CRUD      | HTTP   |
|----------|--------|
|Create    | POST   |
|Read      | GET    |
|Update    | PUT    |
|Delete    | DELETE |

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Para informar qual o retorno do servidor.

### 100 - Switching protocols

![100](https://http.cat/101)

### 202 - Accepted

![202](https://http.cat/202)

### 307 - Temporary Redirect

![307](https://http.cat/307)

### 414 - Requested URI too long

![414](https://http.cat/414)

### 507 - Insuficient storage

![507](https://http.cat/507)

## Explique o que é cada parâmetro da função recebida no `createServer`.

São dois parâmetros:

**request**
-	Objeto que contém informações relacionadas à requisição do cliente, como o cabeçalho http, url, etc.

**response**
-	Objeto que contém informações relacionadas à resposta ao cliente.


## O que é e para que serve a Querystring?

É uma parte da URL, que tem informação em forma de pares de chave/valor que o cliente envia ao servidor.

Exemplo: `http://www.google.com/pagina?chave=valor`

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```javascript
// server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
		, SUCESS = {
			version: 1.0
			, name: 'Be MEAN é nóis'
			, created_at: date
		}
		, ERROR = {
				message: 'Deu ruim! Não encontrado...'
			}
		;

http.createServer(function(req, res){
	if (req.url === '/api/v1') {
		res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCESS));
	}
	else if (req.url === '/api/v1b') {
		res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCESS));
	}
	else if (req.url === '/api/v1c') {
		res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCESS));
	}
	else if (req.url === '/api/v1d') {
		res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCESS));
	}
	else {
		res.writeHead(404,{'Content-Type':'application/json; charset=utf-8'});
		res.write(JSON.stringify(ERROR));
	}
	res.end()
}).listen(3000, function(){
	console.log('Server rodando em localhost:3000');
});
```
