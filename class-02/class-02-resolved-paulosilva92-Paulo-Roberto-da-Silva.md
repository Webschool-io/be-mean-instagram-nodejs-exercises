# Node.js - Aula 02 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Sat Feb 27 2016 15:29:13 GMT-0300 (BRT)

## Quais são os 4 verbos que utilizamos para o CRUD?

São os métodos : 

Post: que seria a parte de Create(C).

Get: que corresponde ao Read(R).

Put: que seria o Update(U)

Delete: que seria o Delete(D)

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.

Para facilitar a comunicação entre servidor e cliente através de códigos com diferente significados pré-determinados.

##### 101 - Switching Protocols

![Image](https://http.cat/101);

##### 202 - Accepted

![Image](https://http.cat/202);

##### 303 - See Other

![Image](https://http.cat/303);

##### 409 - Conflict

![Image](https://http.cat/409);

##### 506 - Variant Also Negotiates

![Image](https://http.cat/506);

## Explique o que é cada parâmetro da funçãorecebida no `createServer`

##### request 

É o parametro que irá receber toda as informações a respeito da requisição feita no servidor, como cabeçalhos, url, body.

##### reponse

É o objeto que armazenará todas as informações que o servidor enviará na sua resposta da requisição. Esse é o objeto que modificaremos com as informações que queremos que o servidor envie para o cliente que fez determinada requisição.

## O que é e para que serve a Querystring?

A QueryString é um modelo clássico de manutenção do estado da página. Elas são nada mais do que conjuntos de pares/valores anexados a URL. Seu uso é simples, após a URL de determinada página, adicionamos o primeiro valor usando a seguinte sintaxe: ?Chave=Valor. Para passarmos mais de um conjunto, os mesmos devem ser concatenados usando o caractere coringa `&`.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';
var date =  (new Date()).toJSON();
const http = require('http')
      ,url = require('url')
      ,SUCCESS = {
        version: 1.0
        ,name: 'Be Mean'
        ,created_at: date
      }
      ,ERROR = {
        message : 'deu merda'
      };

var rotas = {
    create: function(){
      SUCCESS.name = 'Pokemon Criado'
    },
    read: function(){
      SUCCESS.name = 'Pokemon Lido'
    },
    update: function(){
      SUCCESS.name = 'Pokemon Atualizado'
    },
    delete: function(){
      SUCCESS.name = 'Pokemon Deletado'
    }
  }
      
http.createServer(function(req, res){
  rotas.parametros = url.parse(req.url, true);
  try{

    // remove a descrição /api/pokemons
    var rota = req.url.replace(/\/api\/pokemons\//gi, '');

    rotas[rota]();

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(SUCCESS));

  }catch(e){
    res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
