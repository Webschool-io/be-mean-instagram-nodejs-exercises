# NodeJs - Exercício 02 - resolvido

autor: Carlos Alberto Araujo Barreto

## 01 - Quais são os 4 verbos que utilizamos para o CRUD?
Create: Criar - **POST**
Retrieve/Read: Recuperar/Ler - **GET*
Update: Atualizar - **PUT**
Delete: Deletar - **DELETE**

## 02 - Para que foram inventados os Status Codes? Dẽ exemplo de 1 código por grupo e a imagem do Cat Status Code.

Os status codes foram desenvolvidos para padronizar os retornos de requisições HTTP.

100 - Continuar: o servidor que recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido.
![Erro 100](https://http.cat/100)

204 - Nenhum conteúdo: O servidor processou a solicitação com sucesso, mas não é necessário nenhuma resposta.
![Erro 204](https://http.cat/204)

301 - Movido: Esta e todas as solicitações futuras devem ser direcioandas para o URI.
![Erro 301](https://http.cat/301)

409 - Conflito: Indica que a solicitação não pôde ser processada por causa do conflito no pedido, como um conflito de edição.
![Erro 409](https://http.cat/409)

503 - Serviço indisponível: O servidor está em manutenção ou não consegue dar conta dos processamentos de recursos devido à sobrecarga do sistema. Isto deve ser uma condição temporária.
![Erro 503](https://http.cat/503)


## 03 - Explique o que é cada parâmetro de função recebida no 'createServer'.

Recebe uma função anônima como parâmetro com os seguintes argumentos:

### Request
Dados da requisição feita pelo usuário

### Response
Dados do callback que será retornado para o usuário

## 04 - O que é e para que serve a Querystring?

É a string que contém os valores recebidos via query na URL. 
Ela serve para passar informações através das páginas usando o método GET.


## 05 - Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes.
```
'use strict';
var date = (new Date()).toJSON();

const http = require('http')
, SUCESSO = {message: 'Be-Mean NodeJS', responseDate: date}
, ERRO = {message: 'Página não encontrada', responseDate: date};


http.createServer(function(request, response){

	switch(request.url){
		case '/api/caso1': 
			response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(SUCESSO));
			break;
		case '/api/caso2': 
			response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(SUCESSO));
			break;
		case '/api/caso3': 
			response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(SUCESSO));
			break;
		case '/api/caso4': 
			response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(SUCESSO));
			break;
		default:
			response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
			response.write(JSON.stringify(ERRO));
	}
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost: 3000');
});

```





