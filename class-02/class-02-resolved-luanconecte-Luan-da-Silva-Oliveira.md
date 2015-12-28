# NodeJS - Aula 02 - Exercício
**Autor:** Luan da Silva Oliveira
**User:** luanconecte


# 1 -  Quais são os 4 verbos que utilizamos para o CRUD?
+ POST
+ GET
+ PUT
+ DELETE


# 2 - Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

São códigos padrão de estado de uma aplicação, foram desenvolvidos para responder a uma requisição do cliente. O código é formado de três dígitos e separados em cinco grupos:

+ 1XX Informacional
<img src="https://http.cat/100" width="100%">
Isso significa que o servidor recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido (no caso de haver um pedido um corpo deve ser enviado, por exemplo, um POST pedido). Se o corpo é grande o pedido, enviando-os para um servidor, quando o pedido já foi rejeitada com base em cabeçalhos inadequado é ineficiente. Para ter um cheque do servidor se o pedido pode ser aceite com base no pedido de cabeçalhos sozinho, o cliente deve enviar Esperar: 100-continue como um cabeçalho no seu pedido inicial e verifique se a 100 Continuar código de status é recebido em resposta antes de permanente (ou receber 417 Falha na expectativa e não continuar).

+ 2XX Sucesso
<img src="https://http.cat/206" width="100%">
O servidor está entregando apenas parte do recurso devido a um cabeçalho intervalo enviados pelo cliente. O cabeçalho do intervalo é usado por ferramentas como wget para permitir retomada de downloads interrompidos, ou dividir um download em vários fluxos simultâneos.

+ 3XX Redirecionamento
<img src="https://http.cat/304" width="100%">
Indica que o recurso não foi modificado desde o último pedido. Normalmente, o cliente fornece um cabeçalho HTTP como o Se-Modificado-Desde cabeçalho para proporcionar um tempo contra o qual para comparar. Usando este poupa largura de banda e de reprocessamento no servidor e cliente, uma vez que apenas os dados do cabeçalho devem ser enviados e recebidos em comparação com a totalidade da página que está sendo reprocessados ​​pelo servidor, em seguida, enviado novamente utilizando mais largura de banda do servidor e cliente .

+ 4XX Erro do Cliente
<img src="https://http.cat/413" width="100%">
A solicitação é maior do que o servidor está disposto ou capaz de processar.

+ 5XX Erro de Servidor
<img src="https://http.cat/503" width="100%">
O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos devido à sobrecarga do sistema. Isto deve ser uma condição temporária.


# 3 - Explique o que é cada parâmetro da função recebida no `createServer`.

A função recebe uma função de callback que recebe dois parâmetros:

request: Parâmetro que representa a requisição do cliente;
response: Parâmetro que representa a resposta do servidor;


# 4 - O que é e para que serve a Querystring?

Querystring é um conjunto de chave/valor passados através da URL:
htttp://127.0.0.1:3000?nome=Luan&idade=22&sexo=Masculino

No node através da função url.parser(request.url) conseguimos recuperar uma série de atributos que dizem respeito a URL da requisição, dentre eles o atributo query que trás um objeto com todos valores passados.

query: { nome: 'Luan', idade: '22', sexo: 'Masculino' },


# 5 - Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:


```js
// server.js

'use strict';

var http = require("http")
	, url = require('url');

const hostname = '127.0.0.1'
	, port = 1337
	, routes = [
		'/api/pokemons/create'
		, '/api/pokemons/read'
		, '/api/pokemons/update'
		, '/api/pokemons/delete'
	];

http.createServer((req, res) => {

	routes.forEach(function(element, index){		
		if ( url.parse(req.url).pathname == element ) {
			res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

			res.write(JSON.stringify({
				route: element
				, created_at: Date.now()
			}));
		}
	});
	
	res.end();

}).listen(port, hostname, () => {

	console.log(`Server running at http://${hostname}:${port}/`);

});
```