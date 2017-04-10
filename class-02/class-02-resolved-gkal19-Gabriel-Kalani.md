# Node.js - Aula 02 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

## Quais são os 4 verbos que utilizamos para o CRUD?
C - Create
R - Retrieve/Read
U - Update
D - Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
As `Status Codes` foram criadas para responder uma requisição do cliente<br> 

**(Informação)**
!['Cat'](https://http.cat/100)

**2(Sucesso)**
!['Cat2'](https://http.cat/200)

**3(Redirecionamento)**
!['Cat3'](https://http.cat/307)

**4(Erro de request)**
!['Cat4'](https://http.cat/402)

**5(Erro no servidor)**
!['That's fine'](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.
Request;
Response;

## O que é e para que serve a Querystring?
São variáveis e valores que são obtidos através de formulários ou requisições do usuário e que são enviados à url.
Nela podemos transferir dados do URL pelo GET.
`?campo=value&campo=value`


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
import http from 'http';
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
	switch(req.url){
		case '/create':
		createJson(res, 1, 'CREATE', req.url);
		break;
		case '/read':
		createJson(res, 2, 'READ', req.url);
		break;
		case '/update':
		createJson(res, 3, 'UPDATE', req.url);
		break;
		case '/delete':
		createJson(res, 4, 'DELETE', req.url);
		break;
		default:
		res.writeHead(404, {'Content-Type': 'application/json;charset=utf-8'});
		createJson(res, null, 'UM ERRO ENCONTRADO!!', req.url);
		break;
	}
	res.end();
}).listen(3000, () => {
	console.log('Servidor levantando na 3000');
});

function createJson(response, id, mensagem, url){
	const json = {
		'id': id,
		'mensagem': mensagem,
		'url': url,
		'data': new Date()
	};
	return response.write(JSON.stringify(json));
}
``` 
