# Node.js - Aula 02 - Exercício
**user:** charles7421
**autor:** Charles de Freitas Garcia

## Quais são os 4 verbos que utilizamos para o CRUD?

* CREATE
* READ
* UPDATE
* DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

* São códigos de retorno HTTP, para padronizar a identificação oo retorno das requisições. São formados por 3 dígitos, com o primeiro digito, sendo o de identificação do tipo.
  * 1XX - Informativos
   ** 100 - Continuar

	![](https://http.cat/100)	   

  * 2XX - Sucesso
   ** 200 - OK

   ![](https://http.cat/200)	   

  * 3XX - Redirecionamento
   ** 302 - Encontrado

   ![](https://http.cat/302)	   

  * 4XX - Erro de Cliente
   ** 404 - Não encontrado

   ![](https://http.cat/404)	   

  * 5XX - Erro de Servidor
   ** 500 - Erro interno do servidor

   ![](https://http.cat/500)	   

## Explique o que é cada parâmetro da função recebida no `createServer`.

"http.createServer(function(request, response)"...

* Request : É a informação que chega ao servidor através do navegador.
* Response: É a resposta que deve chegar ao navegador através do servidor.

## O que é e para que serve a Querystring?

* QueryString é um conjunto de chave/valor e serve para passar paramêtros para servidor via URL.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:


'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
    version: '1.0'
      , name: 'Be Mean'
    , returned_at: date
  }
  , ERROR = {
    message: "Não encontrado."
  };

http.createServer(function(req, res) {
  switch(req.url) {
    case '/api/pokemons' + '/create':
      res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });
      res.write(JSON.stringify(SUCCESS));
      break;
    case '/api/pokemons' + '/read'  :
      res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });
      res.write(JSON.stringify(SUCCESS));
      break;
    case '/api/pokemons' + '/update':
    res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });
      res.write(JSON.stringify(SUCCESS));
      break;
    case '/api/pokemons' + '/delete':
      res.writeHead(200, { 'Content-Type' : 'application/json; charset=utf-8' });
      res.write(JSON.stringify(SUCCESS));
      break;
    default:
      res.writeHead(404, { 'Content-Type' : 'application/json; charset=utf-8' });
      res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function() {
  console.log('Servidor rodando em localhost:3000');
});


















