# Node.js - Aula 02 - Exercício
**user:** [gabrieltome](https://github.com/gabrieltome)

**autor:** Gabriel Tomé

## Quais são os 4 verbos que utilizamos para o CRUD?

- **CREATE -> POST** : envia uma entidade e requisita que o servidor aceita-a como subordinada do recurso identificado pela URI.

- **READ -> GET** : requisita uma representação do recurso especificado.

- **UPDATE -> PUT** : requisita que uma entidade seja armazenada embaixo da URI fornecida.

- **DELETE -> DELETE** : apaga o recurso especificado.



## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

**Status Code** são *códigos de respostas padronizados* enviados pelo servidor para facilitar o entendimento. 

####1XX Informacional

![101: Switching Protocols](https://http.cat/101)

####2XX SUCESSO

![202: Accepted](https://http.cat/202)

####3XX Redirecionamento

![304: Not Modified](https://http.cat/304)

####4XX Erro do cliente

![402: Payment Required](https://http.cat/402)

####5XX Erro do Servidor

![502: Bad Gateway](https://http.cat/502)


## Explique o que é cada parâmetro da função recebida no `createServer`.

- Request: é a requisição feita pelo cliente.
- Response: é a resposta da requisição para o cliente.

## O que é e para que serve a Querystring?

Um par de valores que é utilizado por padrão no protocolo HTTP para enviar informações para o servidor.
Por exemplo : '?key=value'  ou seja '?nome=gabriel&&idade=27'

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
     version: 1.0
   , name: 'Be MEAN'
   , returned_at: date
    }
  , ERROR = {
      message: "Não encontrado!"
    }
  ;

http.createServer(function (request, response){
if (request.url === '/api/rota01') {
  response.writeHead(200, {'Content-Type':'application/json'});
  response.write(JSON.stringify(SUCCESS));
}
if (request.url === '/api/rota02') {
  response.writeHead(200, {'Content-Type':'application/json'});
  response.write(JSON.stringify(SUCCESS));
}
if (request.url === '/api/rota03') {
  response.writeHead(200, {'Content-Type':'application/json'});
  response.write(JSON.stringify(SUCCESS));
}
if (request.url === '/api/rota04') {
  response.writeHead(200, {'Content-Type':'application/json'});
  response.write(JSON.stringify(SUCCESS));
}
else {
  response.writeHead(404, {'Content-Type':'application/json; charset=utf-8'});
  response.write(JSON.stringify(ERROR));
}
response.end();
}).listen(3000, function (){
  console.log('Servidor rodando em localhost:3000');
});
```
