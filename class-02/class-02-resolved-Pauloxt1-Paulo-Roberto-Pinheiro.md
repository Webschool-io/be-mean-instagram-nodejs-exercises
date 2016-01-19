# Node.js - Aula 02 - Exercício
**User:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**Autor:** Paulo Roberto

## Quais são os 4 verbos que utilizamos para o CRUD?
<b>C</b>reate
```js
 // Exemplo create com mongoDB
  Paulo(mongod-3.2.1) test> use crud
  switched to db crud
  Paulo(mongod-3.2.1) crud> db.users.insert({nome:'Paulo', senha:123})
  Inserted 1 record(s) in 238ms
  WriteResult({
    "nInserted": 1
  })
```
<b>R</b>ead
```js
  // Exemplo read com mongoDB
  Paulo(mongod-3.2.1) crud> db.users.find()
  {
    "_id": ObjectId("56996261515cfa181e3a3e8d"),
    "nome": "Paulo",
    "senha": 123
  }
```
<b>U</b>pdate
```js
  // Exemplo update com mongoDB
  Paulo(mongod-3.2.1) crud> db.users.update({nome:'Paulo'},{$set:{senha:321}});
  Updated 1 existing record(s) in 3ms
  WriteResult({
    "nMatched": 1,
    "nUpserted": 0,
    "nModified": 1
  });
```
<b>D</b>elete
```js
  Paulo(mongod-3.2.1) crud> db.users.remove({})
  Removed 1 record(s) in 1ms
  WriteResult({
    "nRemoved": 1
  })
```
## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Para padronizar as respostas vinda do servidor.<br> 

<b>1(Informação):</b><br>
!['Keep Going'](https://http.cat/100)

<b>2(Sucesso):</b><br>
!['That's fine'](https://http.cat/200)

<b>3(Redirecionamento):</b><br>
!['That's fine'](https://http.cat/307)

<b>4(Erro de request):</b><br>
!['That's fine'](https://http.cat/402)

<b>5(Erro no servidor):</b><br>
!['That's fine'](https://http.cat/599)

## Explique o que é cada parâmetro da função recebida no `createServer`.
<b>Request:</b> Objeto com as informações da requisição feita pelo cliente.<br>
<b>Response:</b> Objeto responsável por gera a resposta do servidor para o cliente.

## O que é e para que serve a Querystring?
É uma forma de passa dados via URL pelo GET, seguem o seguinte padrão `?campo=value&campo=value`.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
const http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
	switch(req.url){
		case '/create':
		createJson(res, 1, 'Parte de create do CRUD', req.url);
		break;
		case '/read':
		createJson(res, 2, 'Parte de read do CRUD', req.url);
		break;
		case '/update':
		createJson(res, 3, 'Parte de update do CRUD', req.url);
		break;
		case '/delete':
		createJson(res, 4, 'Parte de delete do CRUD', req.url);
		break;
		default:
		res.writeHead(404, {'Content-Type': 'application/json;charset=utf-8'});
		createJson(res, null, 'Ação de CRUD não encontrada', req.url);
		break;
	}
	res.end();
}).listen(3000, function(){
	console.log('Servidor levantando na 3000');
});

function createJson(response, id, mensagem, url){
	var json = {
		'id': id,
		'mensagem': mensagem,
		'url': url,
		'data': new Date()
	};
	return response.write(JSON.stringify(json));
}
``` 
