# Node.js - Aula 03 - Exercício
**user:** [angelorubin](https://github.com/angelorubin)

**autor:** Angelo Rogério Rubin

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Isso ocorre no *Chrome* porque além da primeira requisição, também é feita uma segunda para o favicon.

Eu creio que não chega a ser um 'problema', pode ser contornado com o seguinte código:

	'use strict';

	let http = require('http')
	  , url = require('url');

	http.createServer(function(request, response){

	    if(request.url === '/favicon.ico') {
	        response.writeHead(404);
	        response.end();
	    } 
	    else {

	        var result = url.parse(request.url, true);

	        response.writeHead(200, {"Content-Type": "text/html"});
	        response.write("<html><body>");
	        response.write("<h1>Be - MEAN</h1>");
	        response.write("<h2>Query string</h2>");
	        response.write("<ul>");

	        console.log(result.query);

	        for(var key in result.query){
	        response.write("<li>"+key+" : "+result.query[key]+"</li>");
	        }

	        response.write("</ul>");
	        response.write("</body></html>");
	    }

	    response.end();

	}).listen(3000, function(){
	  console.log('Servidor rodando em localhost:3000');
	});

## Qual a DIFERENÇA entre o GET e o POST?

* **GET**
  - As informações são enviadas como `String` anexada a `URL`
  - Limite de tamanho da mensagem a ser enviada
  - Envia somente `String`
  - Informações enviadas ficam em `cache`

* **POST**
  - As informações são encapsuladas junto ao corpo da requisição `HTTP` e não podem ser vistas na `URL`
  - Sem limites de comprimento da mensagem enviada
  - Envia qualquer tipo de dados
  - As informações enviadas **NÃO** ficam gravadas em `cache`


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

	PS C:\Projetos\nodejs> node http-request-post.js
	postData name=Angelo%20Rubin&description=scravus%20assalariadus&type=ajudant
	&height=1.85&defense=300
	Tamanho do postData 135
	STATUS: 201
	HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","a
	e":"application/json; charset=utf-8","content-length":"170","etag":"W/\"aa-V
	 2015 17:29:12 GMT","via":"1.1 vegur"}
	Dados(s) postado(s):  {"__v":0,"name":"Angelo Rubin","description":"scrav
	e de pedreiro","attack":100,"height":1.85,"_id":"5672f0e807bbbe11004259f0"}


	PS C:\Projetos\nodejs> node http-request-put.js
	STATUS: 202
	HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-typ
	e":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-UZYkXWB4GWoROquknoOGcw\"","date":"Thu, 17 Dec
	 2015 17:32:42 GMT","via":"1.1 vegur"}
	Dado(s) atualizado(s):  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6229307015773028353","electionId":"565e25d106dca62
	2271891c4"}}


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

	PS C:\Projetos\nodejs> node http-request-delete.js
	STATUS: 204
	HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-or
	gin":"*","date":"Thu, 17 Dec 2015 17:35:11 GMT","via":"1.1 vegur"}
	Dado(s) deletado(s):

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

**Script

	'use strict';

	const http = require('http');

	http.get({
	    host:'api.redtube.com'
	    , path: '/?data=redtube.Videos.searchVideos&search=Anjelica'
	}, (response) =>  {

	    let body = '';

	    console.log('STATUS: ' + response.statusCode);
	    
	    console.log('HEADERS: ' + JSON.stringify(response.headers));

	    response.on('data', function(data) {
	        body += data;
	    });

	    response.on('end', function() {

	        let data = JSON.parse(body);

	        console.log('<ul>');

	        for (var i = 0, titles = Object.keys(data.videos[0].video).length; i <= titles; i++) {
	            console.log('<li> ' + data.videos[i].video.title + '</li>');
	        }

	        console.log('</ul>');

	    });

	});

**API externa escolhida (api.redtube.com)

	PS C:\Projetos\nodejs> node http-get-redtube.js
	STATUS: 200
	HEADERS: {"server":"nginx","date":"Fri, 18 Dec 2015 12:45:31 GMT","content-type":"application/json;charset=utf-8","trans
	fer-encoding":"chunked","connection":"close","set-cookie":["PHPSESSID=62aemcu01o7e411ctie15mg673; path=/"],"expires":"Th
	u, 19 Nov 1981 08:52:00 GMT","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","pragma":"
	no-cache"}
	<ul>
	<li> Breakfast In Bed - Anjelica </li>
	<li> Quartet - Anjelica, Maria, Lola, Tess</li>
	<li> Anal passion and pain</li>
	<li> Jb Teen Sodomy 04 - 002</li>
	<li> garota muito safada</li>
	<li> Krystal Boyd,,Slammed</li>
	<li> Burn My Passion - Anjelica</li>
	<li> Krysta</li>
	<li> Stunning Anjelica masturbates to orgasm</li>
	<li> Krystal Boyd</li>
	<li> Big ass pussy ball sucking</li>
	<li> Gorgeous model ballslicking</li>
	<li> Abbie christmas Anal</li>
	<li> Natural tits teenie buttfucking</li>
	</ul>