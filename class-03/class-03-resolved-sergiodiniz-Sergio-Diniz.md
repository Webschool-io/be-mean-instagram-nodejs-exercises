# Node.js - Aula 03 - Exercício
autor: **Sergio Diniz Correia**

# 1 - Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?
Isso ocorre porque são feitas 2 requisições, uma para obter os dados da querystring e outra para o favicon do site.


# 2 - Qual a DIFERENÇA entre o GET e o POST?
* **Get**
	- Com capacidade de 1024 caracteres, este método é utilizado quando se quer passar poucas ou pequenas informações para realizar uma pesquisa ou simplesmente passar uma informação para outra página através da URL. A função do método GET é pura e simplesmente recuperar um recurso existente no servidor. O resultado de uma requisição GET é “cacheável” pelo cliente, ou seja, fica no histórico do navegador. Por exemplo:

	```javascript
	http://www.meusite.com.br/index.php?categoria=3&pag=2&tipo=5
	```

* **Post**
	- Este método utiliza a URI para envio de informações ao servidor. A URI não é retornável ao cliente, o que torna o método POST mais seguro, pois não expõe os dados enviados no navegador. No método Post não existe limite de capacidade capacidade para envio de informações.




# 3 - Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
Post
```javascript
Sergios-MacBook-Pro:servidor sergiodiniz$ node servidor.js 
Status: 201
Headers: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"87","etag":"W/\"57-UPqdVjFAhmCoig5niwtBzQ\"","date":"Tue, 02 Feb 2016 14:01:32 GMT","via":"1.1 vegur"}
Dados Finalizados:  {"__v":0,"name":"Sergio Diniz Correia","type":"aluno","_id":"56b0b6bc7229a31100583000"}
Sergios-MacBook-Pro:servidor sergiodiniz$ 
```

Put
```javascript
Sergios-MacBook-Pro:servidor sergiodiniz$ node servidor.js 
Status: 202
Headers: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-Hyh9zGd6Z65zrNnHQPeBgA\"","date":"Tue, 02 Feb 2016 14:03:29 GMT","via":"1.1 vegur"}
Dados Finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6246694104244158465","electionId":"565e25d106dca622271891c4"}}
Sergios-MacBook-Pro:servidor sergiodiniz$ 
```

# 4 - Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.
```javascript
Sergios-MacBook-Pro:servidor sergiodiniz$ node servidor.js 
Status: 204
Headers: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Tue, 02 Feb 2016 14:07:22 GMT","via":"1.1 vegur"}
Dados Finalizados:  
Sergios-MacBook-Pro:servidor sergiodiniz$ 
```


# 5 - Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.
**codigo**
```javascript
'use strict'

const http = require('http');

http.get({
	  host: 'api.redtube.com'
	, path: '/?data=redtube.Videos.searchVideos&search=brasileirinhas'
}, (res) => {
	 // body...  
	 let body = '';
	 console.log('STATUS: ' + res.statusCode);
	 console.log('HEADERS: ' + JSON.stringify(res.headers));

	 res.on('data', (chunk) => {
	 	body += chunk;
	 });

	 res.on('end', ()=>{
	 	var resultado =  JSON.parse(body);
	 	for(var r in resultado.videos){
	 		console.log(' * ' + resultado.videos[r].video.title);
	 	}
	 	// console.log('Resposta: ' + body);
	 })

}).on('error', (e) => {
	console.log('ERROR : ' + e.message);
})

```

**Resultado**
```javascript
Sergios-MacBook-Pro:servidor sergiodiniz$ node servidor.js 
STATUS: 200
HEADERS: {"server":"nginx","date":"Tue, 02 Feb 2016 15:16:11 GMT","content-type":"application/json;charset=utf-8","transfer-encoding":"chunked","connection":"close","set-cookie":["PHPSESSID=vqlc8ae04bpbe490ves904plr3; path=/"],"expires":"Thu, 19 Nov 1981 08:52:00 GMT","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","pragma":"no-cache"}
 * piranha amadora brasileirinhas 
 * Brasileirinhas Depois Dos 40 
 * Lambuzadas Brasileirinhas Cena 3
 * Escrit&oacute;rio Da Sacanagem Brasileirinhas
 * Mao Dupla Brasileirinhas Cena 2
 * Anal Show Gina Jolie Brasileirinhas Cena 8
 * Mao Dupla Brasileirinhas Cena 1
 * Anal Show Gina Jolie Brasileirinhas Cena 7
 * Anal Show Gina Jolie Brasileirinhas Cena 3
 * Anal Show Gina Jolie Brasileirinhas Cena 1
 * Anal Show Gina Jolie Brasileirinhas Cena 4
 * Anal Show Gina Jolie Brasileirinhas Cena 5
 * Anal Show Gina Jolie Brasileirinhas Cena 6
 * Anal Show Gina Jolie Brasileirinhas Cena 2
 * Teste do Sof&aacute; Brasileirinhas Cena 1
 * Teste do Sof&aacute; Brasileirinhas Cena 2
 * Escrit&oacute;rio Da Sacanagem Brasileirinhas
 * Escrit&oacute;rio Da Sacanagem Brasileirinhas
 * Escrit&oacute;rio Da Sacanagem Brasileirinhas
 * Rayanna Oliveira Brasileirinhas
 * As brasileirinhas
 * Brasileirinhas
 * Brasileirinhas Natalia Balanga Bei&ccedil;o -Acreuna
Sergios-MacBook-Pro:servidor sergiodiniz$ 
``