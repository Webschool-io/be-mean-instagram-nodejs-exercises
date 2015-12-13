#NodeJS - Aula 02 - Exercícios
autor: Dariano Soares

##1. Quai são os 4 verbos que utilizamos para o `CRUD`?

- **Create   	- POST**
- **Retrieve 	- GET**
- **Update 	- PUT**
- **Delete 	- DELETE**

##2. Para que foram iventados os Status Code? Dê exemplos de 1 código por grupo e a imagem do `Cat Status Code`.

O **Status Code** é uma representação numérica da resposta. Um inteiro de três dígitos que informa o stado do retorno.

**1xx** - Indica uma resposta provisória. 
Ex: **100 Continuar** significa que o servidor recebeu os cabeçalhos da solicitação.  

**2xx** - Indica que a requisição foi recebida, entendida e aceita.
Ex: **201 Criado**  para quando algo for criado.

**3xx** - Indica que futuras ações precisam ser feitas para que a requisição seja completada.
Ex: **301 Movido** para redirecionamentos permanentes, quando algum recurso for movido de lugar por tempo indeterminado ou para sempre.

**4xx** - Indica algum erro do cliente.
Ex: **403 Proibido**   para indicar uma ação proibida.

**5xx** - Indica algum erro no servidor.
Ex: **500** erro genérico interno no servidor.

Referência -> Livro Construindo Aplicações com NodeJS, William Bruno Moraes
##3. Explique o que é cada parâmetro da função recebida no `createServer`.

Os dois parâmetros da função **createServer** são os objetos **request** e **response**, que representam uma requisição HTTP, que consiste sempre em um pedido e uma resposta respectivamente.

Referência -> Livro Construindo Aplicações com NodeJS, William Bruno Moraes
##4. O que é e para que serve a `Querystring`?

**Querystring** é o padrão que o protocolo HTTP utiliza para transporte de informações do cliente para o servidor.
Devemos utilizar a query para filtrar dados. A sintaxe de uma query string é <busca>=<valor>. Indicamos que vamos concatenar mais uma busca após outra com o caracter &(e comercial). O início da query string é indicado pelo caractere ? (interrogação).
```
ex: ?<query>=<value>&<query2>=<value2>&<query3>=<value3>
```
Referência -> Livro Construindo Aplicações com NodeJS, William Bruno Moraes
##5. Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js

'use strict';

const date = (new Date()).toJSON();

const http = require('http'),
	SUCCESS = {
		version: 1.0,
		name: 'Be MEAN',
		returned_at: date
	},
	ERROR = {
		menssage: 'Não encontrado!'
	};

let server = http.createServer(function(req, res) {
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
});

server.listen(3000, function() {
	console.log('Servidor rodando na porta 3000.');
});

```