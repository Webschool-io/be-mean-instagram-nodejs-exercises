# Node.js - Aula 02 - Exercício
# autor: Sergio Kopplin
# data: 1454721080991

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create: criar um registro.
- Retrieve/Read: Ler/retornar um registro.
- Update: Atualizar um registro específico.
- Delete: Excluir um registro específico.

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat).

Os Status Codes são códigos de retorno e foram críados para formar um padrão de direcionamento para a identificação correta de retorno das requisições HTTP.

* Grupo Informação.
	- 100 (continue):O Cliente DEVE continuar com a requisição pois ela foi recebida pelo servidor e o mesmo não a rejeitou. (https://http.cat/100).

* Grupo Sucesso.
	- 202 (accepted): A requisição foi sucedida e a informação retornada dependerá do tipo de método utilizado na requisição. (https://http.cat/202).

* Grupo Redirecionamento.
	- 301 (moved permanently): A fonte do recurso está em uma diferente URI e as referências futuras deverão utilizar umas das URIS retornadas. (https://http.cat/301).

* Grupo Erro do cliente.
	- 400 (bad request): A requisição não pode ser entendida pelo servidor devido a um problema de syntax. O Cliente não deverá repetir a requisição sem antes modificá-la.. (https://http.cat/400).

* Grupo Erro do servidor.
	- 500 (internal server erros): O servidor encontrou um problema inesperado e isso o impediu de responder a requisição. (https://http.cat/500).


## Explique o que é cada parâmetro da função recebida no `createServer`.

A função **createServer** é uma função anônima que é executada automaticamente e que recebe 2 parâmetros, request e response.
No request nós temos as informações da requisição por parte do cliente e no response nós temos as informações da requisição por parte do servidor.

## O que é e para que serve a Querystring?

A QueryString é um modelo do qual nós passamos valores para o servidor pela url.
Ex: http://example.com/over/there?name=ferret.

Nesse exemplo, passamos a variável name com o valor ferret.

ref: [en.wikipedia.org](https://en.wikipedia.org/wiki/Query_string)

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```JS
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: 1.0
        , name: 'Be MEAN'
        , created_at: date }
    , ERROR = {
        message: 'Não encontrado'
    };

http.createServer(function(req, res){
    switch (req.url) {
        case "/api/v1/pokemons/create":
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(SUCCESS));
            break;

        case "/api/v1/pokemons/read":
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(SUCCESS));
        break;

        case "/api/v1/pokemons/update":
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(SUCCESS));
            break;

        case "/api/v1/pokemons/delete":
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(SUCCESS));
            break;

        default:
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});
```
