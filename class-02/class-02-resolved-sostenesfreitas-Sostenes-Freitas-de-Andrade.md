# Node.js - Aula 02 - Exercício
**user:** [sostenesfreitas](https://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas de Andrade

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create
- Retrieve
- Update
- Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Serve para informar o que o servidor esta respondendo. [Definiçãoes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

## 1XX - Informacional
![101](https://http.cat/101)

## 2XX - Sucesso
![204](https://http.cat/204)

## 3XX - Redirecionamento
![305](https://http.cat/305)

## 4XX- Erro de cliente
![404](https://http.cat/404)

## 5XX - Erro de servidor
![599](https://http.cat/599)


## Explique o que é cada parâmetro da função recebida no `createServer`.

`createServer` é uma função anônima, que é executada automaticamente.

- request(requisição): informações de requisição feita pelo cliente;
- response(resposta): informações de resposta do servidor para o cliente.


## O que é e para que serve a Querystring?

Querystring é uma forma de passar os valores pela url, assim podemos pegar os valores da nossa url com nosso request.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```
 strict';
var request = require("request");
var READ;
request("https://raw.githubusercontent.com/sostenesfreitas/phpApi/master/pokemon.json", function(error, response, body) {
    READ = JSON.parse(body);

		});
var date = (new Date()).toJSON();

 const http = require('http')
      ,url = require('url')
	  ,SUCCESS = {
            id:     '006'
      ,     typeTwo:'Flying'
      ,     name:   'Charizard'
      ,     type:   'Fire'
      ,     returned_at:date
      ,     message: "Criado com sucesso !!"
    
	  }
,REMOVE = {
          message: "Removido com sucesso !!"
    
}
,UPDATE = {
          message: "Atualizado som sucessoo !!"
    
}
,ERROR = {
          message: "Pagina não encontrada !!"
    
};

http.createServer(function(req, res){
		switch (req.url) {
            case '/api/pokemons/create':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(SUCCESS));
                break;
            case '/api/pokemons/read':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(json));
                break;
            case '/api/pokemons/delete':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(REMOVE));
                break;
            case '/api/pokemons/update':
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(UPDATE));
                break;
            default:
                res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
                res.write(JSON.stringify(ERROR));
                break;
    
		}
        res.end();
    
}).listen(3000, function(){
        console.log('Servidor rodando em localhost:3000');
    
	});

```
