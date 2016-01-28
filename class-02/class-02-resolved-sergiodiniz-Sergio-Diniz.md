# Node.js - Aula 02 - Exercício
autor: **Sergio Diniz Correia**

# 1 - Quais são os 4 verbos que utilizamos para o CRUD?
+ **Create** = Criar
+ **Retrieve/Read** = Ler
+ **Update** = Atualizar
+ **Delete** = Deletar

# 2 - Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.
O status codes é a padronização dos tipos de retorno do servidor, o código retornado é uma informação usado para diagnostico.

+ 1XX - Information
![](https://http.cat/100)

+ 2XX - Successful
![](https://http.cat/200)

+ 3XX - Redirection
![](https://http.cat/301)

+ 4XX - Client Error
![](https://http.cat/408)

+ 5XX - Server Error
![](https://http.cat/500)



# 3 - Explique o que é cada parâmetro da função recebida no createServer.

 + **Request** - Este parâmetro contem os parâmetros da requisição enviado pelo usuário

 + **Response** - Este parâmetro é responsável por levar a resposta para o usuário, ele contem métodos específicos para escrever a resposta para o usuário

# 4 - O que é e para que serve a Querystring?
Querystring é o padrão que o protocolo HTTP utiliza para transporte de informações do cliente para o servidor. 
Ele serve para podermos termos acesso aos dados no servidor pelo método get.

Os valores são passados pela URL pelo padrão chave/valor 

Ex: /pesquisar?nome=Sergio

Podemos acessar os dados da seguinte forma
```
var url = require (‘url’);
var result = url.parse(request.url, true).query;
```
o resultado é um objeto com os valores
{nome: Sergio }


# 5 - Escreva no código do server.js uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```javascript
'use strict'
const PORT = 3000
	, http = require('http')
	, SUCCESS = {
		  activity : '2'
		, name_class : 'Node.js'
		, name_student : 'Sergio Diniz'
		, date_create : '28.01.2016'
	}
	, ERROR = {
		message : 'Pagina não Encontrada'
	}
	;

http.createServer(function (request, response) {
	 // body...  
	 switch (request.url) {
	 	case '/api/pokemons/create':
	 	case '/api/pokemons/read':
	 	case '/api/pokemons/update':
	 	case '/api/pokemons/delete':
	 		response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
	 		response.write(JSON.stringify(SUCCESS));
	 		break;	

	 	default:
	 		response.writeHead(404, {'Content-Type':'application/json; charset = utf-8'});
	 		response.write(JSON.stringify(ERROR));
	 }

	 response.end();
})

.listen(PORT, function(){
	console.log('Servidor rodando em localhost:', PORT);
})


```