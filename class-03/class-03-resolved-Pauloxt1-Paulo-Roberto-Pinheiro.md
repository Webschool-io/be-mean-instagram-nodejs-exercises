# Node.js - Aula 02 - Exercício
**user:** [Pauloxt1](https://github.com/Pauloxt1)<br>
**autor:** Paulo Roberto

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
!['Console log'](http://i.imgur.com/YU4k7xh.png)

Porque uma requisição ele efetua com o GET que nós mandamos e outra ele manda tentando achar o favicon da página.

## Qual a DIFERENÇA entre o GET e o POST?
<b>GET:</b> Dados são transportados via URL, por ser assim só é suportado strings e há um limite de caracteres. É mais rápido que o POST pelo fato de ser mais simples.<br>
<b>POST:</b> Dados não são expóstos na URL e nesse caso pode ser transportado tanto dados do tipo string como binários não há limite de caracteres é um pouco mais lenta que o GET.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```js
paulo@Paulo:~/workshop-be-mean/nodejs$ node create_pokemon.js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"79","etag":"W/\"4f-FQst1JWQGV9Isx6b9QMehg\"","date":"Sat, 16 Jan 2016 17:37:40 GMT","via":"1.1 vegur"}
Dados finalizados {"__v":0,"name":"Paulo Roberto","type":"zeus","_id":"569a7fe41f61701100d42ac7"}
```
```js
paulo@Paulo:~/workshop-be-mean/nodejs$ node change_mon.js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-D2UU4v75j2T2occrW4VFWQ\"","date":"Sat, 16 Jan 2016 18:07:13 GMT","via":"1.1 vegur"}
Dados finalizados {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6240448465881530369","electionId":"565e25d106dca622271891c4"}}
```
## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
paulo@Paulo:~/workshop-be-mean/nodejs$ node delete_mon.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 16 Jan 2016 18:12:01 GMT","via":"1.1 vegur"}
Dados finalizados 
```
## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
Vamos usar a mesma API que usamos para inserir e deletar dados, com o seguinte script:
```js
// file: get-pokemons
'use strict';

const http = require('http');
var dados = '';

http.get({
	hostname: 'webschool-io.herokuapp.com',
	path: '/api/pokemons',
	port:80,
	agent: false
}, (response)=>{
	console.log('STATUS: '+response.statusCode);
	console.log('HEADERS: '+JSON.stringify(response.headers));
	response.on('data', function(data){
		dados += data;
	});
	response.on('end', function(){
		newServer();
	});
});

function newServer(){
	http.createServer(function(request, response){
		var pokemons = JSON.parse(dados);
		for(var key in pokemons){
			var pokemon = pokemons[key];
			response.write('<b>ID:</b> '+pokemon._id+' <b>Nome:</b> '+pokemon.name+' <b>Tipo:</b> '+pokemon.type+'<br>');
		}
		response.end();
	}).listen(3000, function(){
		console.log('Aguardando conexões na porta 3000');
	});
}
```
<b>Obtivemos o seguinte o resultado:</b><br>
!['Resultado'](http://i.imgur.com/geKbIv5.png)
