# Node.js - Aula 02 - Exercício
**Autor:** Diego Ferreira
**Data:** 1456489472714

## Quais são os 4 verbos que utilizamos para o CRUD?

Uma operação de CRUD, realiza as operações de CREATE, READ, UPDATE, DELETE, em uma requisição estes métodos são representados pelos seguintes verbos:

CREATE -> POST (envia uma requisição para o servidor passando parâmetro),

READ -> GET ( solicita alguma informação de um recurso do servidor),

UPDATE -> PUT ( envia uma requisição passando parâmetros, para atualização de um recurso já existente.),

DELETE -> DELETE ( Remove o recurso especificado )

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os status cod foram criados para padronizar a conversa entre cliente e servidor, padronizando códigos e status com o intuito de identificar de maneira mais clara o resultado do processamento de uma requisição.
Os status foram divididos em 5 grupos, 1XX, 2XX, 3XX, 4XX, 5XX, conforme abaixo:

* 1XX - Informativos

Ex.:
100 - Continue

Esta é uma resposta provisória usada para informar ao cliente que a parte inicial da solicitação foi recebida e não foi rejeitada pelo servidor. Diante deste status o cliente deve continuar enviando o restante do pedido ou, se o pedido já foi concluído, ignorar esta resposta.

![image](https://http.cat/100)

* 2XX - SUCESSO

Ex.:
200 - OK

Requisição efetuada com sucesso.

![image](https://http.cat/200)

* 3XX - Redirecionamento

Ex.:
301 - Movido Permanentemente

Indica que o recurso solicitado foi movido permanentemente para outro endereço.

![image](https://http.cat/301)

* 4XX - Erro do Cliente

Ex.:
403 - Forbidden

O servidor entendeu a solicitação mais recusou a responder.

![image](https://http.cat/403)

* 5XX - Erro do Servidor

Ex.:
503 - Service Unavaliable

O servidor não consegue processar a requisição devido a uma sobrecarga ou manutenção no servidor.

![image](https://http.cat/503)

## Explique o que é cada parâmetro da função recebida no `createServer`.

A função create server recebe 2 parâmetros resquest e reponse.
###### Request
Variável que recebe os dados da requisição enviada pelo cliente.

###### Response
Variável para responder para o cliente as informações ou mensagens de erro provenientes da requisição realizada.

## O que é e para que serve a Querystring?

QueryString é um padrão que permite passar parametros e valores na URL em uma requisição, utilizando o método GET.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
/api/pokemons/create - /api/pokemons/read - /api/pokemons/update - /api/pokemons/delete

```
'use strict';

const http = require('http'),
  SUCCESS = {
    version:1.0,
    name: 'BE MEAN',
    created_at: Date.now()},
  ERROR = { message: "URL solicitada não encontrada"};

http.createServer (function(req,resp){
  switch ( req.url ) {
      case '/api/pokemons/create':
    sucesso(resp);
          break;
      case '/api/pokemons/read':
          sucesso(resp);
          break;
      case '/api/pokemons/update':
          sucesso(resp);
          break;
    case '/api/pokemons/delete':
        sucesso(resp);
      break;
      default:
    error(resp);
  }
  resp.end();
}).listen(3000,function(){
  console.log("Servidor rodando na porta 3000!!!");
});

function cabecalho(requestCode, resp){
  resp.writeHead(requestCode, {'Content-Type':'application/json;charset=utf-8'});
}

function sucesso(resp){
  cabecalho(200, resp);
  resp.write(JSON.stringify(SUCCESS));
}

function error(resp){
  cabecalho(404, resp);
  resp.write(JSON.stringify(ERROR));
}

```

## Bibliografia
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
