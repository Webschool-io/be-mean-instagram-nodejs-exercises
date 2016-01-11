# NodeJS - Aula 03 - Exercício
autor: Fábio Calheiros (conta: fabiocalheiros)

# 1. Por que quando requisitamos ao nosso servidor de Query String, `com o Chrome`, ele executa 2 requisições, sendo a última "vazia"?

Isso acontece porque o Chrome envia um pedido de um favicon em cada solicitação.
Como não enviamos um favicon de volta, ele a responde como um objeto vazio {}.

# 2. Qual a `DIFERENÇA` entre o `GET` e o `POST`?

Para diferenciarmos os dois podemos definir nos seguintes tópicos.

- Visibilidade:
Uma requisição GET é enviada como string anexada a URL, enquanto que a requisição POST é encapsulada junto ao corpo da requisição HTTP e não pode ser vista.

- Tamanho:
O GET possui um limite de até 255 caracteres e é cacheavel pelos navegadores, é aconselhavel para utilizar fazendo consultas simples. O POST não possui limites de caracteres.

- Performance:
A requisição GET é relativamente mais rápida, já que ela é mais simples. Na requisição POST há uma perda de tempo no encapsulamento da mensagem.

- Tipos:
O GET é enviado via URL, então nós sabemos que ela só transporta textos. A requisição POST não tem restrições, pode transportar tanto texto, como dados binários.

- Favoritos/Bookmarks:
Por se tratar apenas de uma URL, a requisição GET pode ser armazenada em cache, ou em um sistema de bookmark(favoritos). A mesma coisa não é possível para requisições POST.

- Método HTML Padrão:
GET é o método HTML padrão. Para submeter um formulário HTML usando POST é preciso especificar no atributo “method” o valor “POST”.

- Dados:
As requisições GET são limitadas ao padrão ASCII, enquanto que requisições POST também podem usar o atributo “enctype” com o valor “multipart/form-data”, que faz uso do padrão UCS(Universal Multiple-Octet Coded Character Set).


# 3. Crie um Pokemon na nossa API com o seu nome, depois modifique seu nome pelo seu user do Github, colocando aqui a resposta de cada passo.

```
node http-request-post.js
postData name=F%C3%A1bio%20Calheiros&type=Aluno
Tamanho do Post Data 38
STATUS:201
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"83","etag":"W/\"53-41MdFbUfWH/AU0Zi8klaOQ\"","date":"Mon, 28 Dec 2015 18:48:17 GMT","via":"1.1 vegur"}
Dados finalizados: {"__v":0,"name":"Fábio Calheiros","type":"Aluno","_id":"568183f1683c8d1100366f7a"}
```

```
node http-request-put.js
postData name=fabiocalheiros
Tamanho do Post Data 19
STATUS:202
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-JrRFgRg3QEV9v10ruiKLcg\"","date":"Mon, 28 Dec 2015 18:50:35 GMT","via":"1.1 vegur"}
Dados finalizados: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6233409023073320961","electionId":"565e25d106dca622271891c4"}}
```

# 4. Depois faça o DELETE, criando o script para tal, colocndo aqui a resposta.

```
node http-request-delete.js
postData name=Fabrones
Tamanho do Post Data 13
STATUS:204
HEADERS:{"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Mon, 28 Dec 2015 18:52:49 GMT","via":"1.1 vegur"}
Dados finalizados: 
```


# 5. Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado em HTML.

```
'use strict';

const https = require('https');
const json2html = require('node-json2html');

const options = {
	host: 'api.mercadolibre.com',
	path: '/users/156622161/'
};

function callback(res){
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	let data = '';
	res.on('data', (chunk) => {
		data += chunk;
	});
	
	res.on('end', ()=>{
		var transform = {'tag':'div','html':'${nickname} - id: ${id}'};
	    var html = json2html.transform(data,transform);  
	    console.log(html);
	})
}

const req = https.get(options, callback);
	req.on('error', (e)=> {
		console.log('Erro ao fazer a leitura dos dados: '+e.message+'\n');
	});
req.end();

node exercicio03.js
STATUS:200
HEADERS:{"date":"Wed, 30 Dec 2015 19:43:21 GMT","content-type":"application/json;charset=UTF-8","transfer-encoding":"chunked","connection":"close","cache-control":"max-age=60, stale-while-revalidate=30, stale-if-error=120","vary":"Accept,Accept-Encoding","etag":"5faaf5170e91571d521d2a74d47c6162","x-content-type-options":"nosniff","x-request-id":"408c0459-754e-4f30-a2ca-663ec9abb90f","access-control-allow-origin":"*","access-control-allow-headers":"Content-Type","access-control-allow-methods":"PUT, GET, POST, DELETE, OPTIONS","access-control-max-age":"86400","x-xss-protection":"1; mode=block","strict-transport-security":"max-age=15724800"}
<div>HYPERCOMPRAS-ME - id: 156622161</div>
```