# Node.js - Aula 02 - Exercício
####Robson Fagundes - [https://robsonfagundes.github.io](robsonfagundes.github.io) - robsonfagundes@gmail.com

## 1. Quais são os 4 verbos que utilizamos para o CRUD?
- **C**reate - Criar ou adicionar novas entradas = `POST`
- **R**ead (**R**etrieve) - Ler, recuperar ou ver entradas existentes = `GET`
- **U**pdate - Atualizar ou editar entradas existentes = `PUT`
- **D**elete (**D**estroy) - Remover entradas existentes = `DELETE`

## 2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os `Status Codes` foram inventados para padronizar os tipos de retorno do servidor, facilitando o entendimento deles.

* **1XX** - Information

![](https://http.cat/101)

* **2XX** - Successful

![](https://http.cat/202)

* **3XX** - Redirection

![](https://http.cat/307)

* **4XX** - Client Error

![](https://http.cat/404)

* **5XX** - Server Error

![](https://http.cat/500)

## 3. Explique o que é cada parâmetro da função recebida no `createServer`.

Os parâmetros recebidos pelo **createServer** são: request e response. A definição de ambos é bem simples, **Request** é a informação chegando no servidor através do navegador (Input), já o **Response** é a informação chegando no navegador através do servidor (Output). 

Principais propriedades de cada um desses objetos:

**Request:**
- Corpo do HTTP response;
- Número de Bytes enviados pelo cliente;
- Coleção de cabeçalhos;
- Porta servidor utilizada;
- Estado do servidor;
- Nome do servidor;
- Verificação de conexão SSL.

**Response:**
- Corpo do request HTTP;
- Código da página para o corpo Request;
- Versão do HTTP;
- Caminho do HTTP;
- Tamanho do Buffer;


## 4. O que é e para que serve a Querystring?

Na Web, uma **Querystring** ou string de consulta, é a parte de um Uniform Resource Locator (URL) que contém dados que não se encaixa convenientemente em uma estrutura hierárquica do caminho. A querystring inclui campos comumente adicionados a uma base URI por um navegadores ou por uma aplicação, por exemplo, como parte de um formulário HTML.

#####Exemplo de URL contendo uma querystring:
http://example.com/be-mean-instagram/node?name=aula2

 - Quando um servidor recebe um pedido de uma página web, ele pode executar uma ação ou evento, passando a querystring, que neste caso é **`name=aula2`**. O ponto de interrogação **`.../node?`** é usado como um separador para informar a URL que há uma querystring mas não faz parte da string de consulta.


## 5. Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js

'use strict';

var date = (new Date()).toJSON();

var http = require('http'),
	SUCCESS = {
		version: 'NodeJS - Exercício 0.2',
	  	name: 'WebSchool.io/be-mean-instagram-nodejs-exercises/class-02',
	  	returned_at: date
	},
	ERROR = {
	  	message: "request not found!"
	};

var url = require('url');

http.createServer(function(req, res) {
	
	var url_parse = url.parse(req.url);

	switch(url_parse.pathname) {
		case '/api/pokemons/create':
		case '/api/pokemons/read':
		case '/api/pokemons/update':
		case '/api/pokemons/delete':
			res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			res.write(JSON.stringify(SUCCESS));			
			break;
		default:
			res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
			res.write(JSON.stringify(ERROR));
	}
	res.end();

}).listen(3000, function() {
	console.log('Server be-mean-instagram Node running on 127.0.0.1:3000');
});


```

```
robsonfagundes@Dell-3500:/media/robsonfagundes/SSD-Dados/Personal Projects/WebSchool.io/be-mean-instagram-nodejs-exercises/class-02$ node server
Server be-mean-instagram running on 127.0.0.1:3000
```
[![server.js class 2 em ação](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/class-02/img/class2.png)](https://raw.githubusercontent.com/robsonfagundes/be-mean-instagram-nodejs-exercises/master/class-02/img/class2.png "server.js class 2 em ação")