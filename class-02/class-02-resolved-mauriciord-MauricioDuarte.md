# Node.js - Aula 02 - Exercício
**user:** [mauriciord](https://github.com/mauriciord)

**autor:** Maurício Reatto Duarte

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create - Criar
- Read/Retrieve - Ler/Recuperar
- Update - Atualizar
- Delete - Excluir

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat).

Esses _Status Codes_ foram criados para que houvesse uma forma de padronizar o retorno das requisições HTTP.

#### 1XX - Informacional
Resposta provisória para informar o cliente de que a solicitação foi recebida e não rejeitada pelo servidor.
![100](https://http.cat/100).

#### 2XX - Sucesso
Pedido aceito para processamento, mas ainda não se encontra concluído. É uma resposta à fim de que o servidor possa aceitar o pedido de outro processo.
![202](https://http.cat/202)

#### 3XX - Redirecionamento
Informa que a solicitação está temporariamente em uma URI diferente. O cliente deve continuar com essa URI para solicitações futuras.
![302](https://http.cat/302)

#### 4XX- Erro de cliente
Solicitação foi atendida, porém não será executada.
![403](https://http.cat/403)

#### 5XX - Erro de servidor
O servidor é usado como _Gateway_ ou _Proxy_
![502](https://http.cat/502)

## Explique o que é cada parâmetro da função recebida no `createServer`.

A função recebida no `createServer` é uma função anônima, do qual é passado dois parâmetros.
```js
http.createServer(function(req, res){
. . .
});
```
#### `request`
Objeto do qual corresponde a solicitação enviada pelo cliente, como por exemplo, a URL, cabeçalhos HTTP, etc.

#### `response`
Objeto de resposta do qual é utilizado para devolver os dados ao cliente.

## O que é e para que serve a Querystring?
Valores enviados pela _URL_ via `GET`. Na maioria das vezes, são de forma simples e pequena entre cliente/servidor, seguindo o padrão de `'key' : 'value'`
Exemplo:
```
.../caminho?nome=pikachu&tipo=eletrico
```

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

~~~js
'use strict';

const date = (new Date()).toJSON();

const http = require('http'),
		SUCCESS = {
			version: 1.1,
			code: 200,
			name: 'BE MEAN',
			created_at: date
		},
		ERROR = {
			message: 'Não encontrado!'
		};

http.createServer(function(req, res){
	
	const url = req.url;

	switch(url){

    case "/api/pokemons/create":
       create();
       break;

    case "/api/pokemons/read":
       read();
       break;

    case "/api/pokemons/update":
       update();
       break;

    case "/api/pokemons/delete":
       delete();
       break;

    default:
       res.writeHead(404, { 'Content-Type': 'application/json;' });
       res.write(JSON.stringify(ERROR));
       break;
  }

  res.end();

}).listen(3000, function() {
	console.log('Servidor ON em http://localhost:3000/');
});

function create(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function read(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function update(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

function delete(){
   res.writeHead(200, { 'Content-Type': 'application/json;' });
   res.write(JSON.stringify(SUCCESS));
}

~~~

