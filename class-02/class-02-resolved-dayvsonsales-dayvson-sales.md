# Node.js - Aula 02 - Exercício
**user:** [dayvsonsales]https://github.com/dayvsonsales  
**autor:** Dayvson SAles  

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create - POST  
- Retrieve/Read - GET  
- Update - PUT  
- Delete - DELETE  

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Padronizar o retorno das requisições HTTP. Facilitando o entendimento por meio dos clients/bots.  

100 - Continue - https://http.cat/100  
200 - OK  - https://http.cat/200  
301 - Movido permanentemente - https://http.cat/301  
404 - Not found - https://http.cat/404  
500 - Erro interno no servidor - https://http.cat/500  


## Explique o que é cada parâmetro da função recebida no `createServer`.

Request - variável de acesso aos parâmetros de requisição pelo client  
Response - variável que possui metódos para envio de resposta ao client  
 
## O que é e para que serve a Querystring?

Padrão do protocolo HTTP para enviar informações através de requisições.  

Por exemplo:  

http://exemplo.com/?tipo=1&codigo=104  

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:  

```
(...)  

const SUCCESS = {  
		error: false, data: "", msg: ""  
	},   
	ERROR = { error: true, msg: "Not found"}  
;

var server = http.createServer(function(request, response){  
		switch(request.url){  
			case "/" :  
				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});  
				response.end(index);  
			break;  
			case "/api/pokemons/create" :   
				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});  
				response.end(JSON.stringify({error: false, msg: "Inserido com sucesso!", data: {name: "pokemon"}}));  
			break;  
			case "/api/pokemons/update" :   
				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});  
				response.end(JSON.stringify({error: false, msg: "Atualizado com sucesso!", data: {name: "pokemon"}}));  
			break;  
			case "/api/pokemons/read" :   
				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});  
				response.end(JSON.stringify({error: false, data: {name: "pokemon"}}));  
			break;
			case "/api/pokemons/delete" :   
				response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});  
				response.end(JSON.stringify({error: false, msg: "Excluido com sucesso!"}));  
			break;  
			default:  
				response.writeHead(404, {'Content-Type' : 'application/json; charset=utf-8'})
				response.end(JSON.stringify(ERROR));  
			break;   
		}
});  
(...)  
```