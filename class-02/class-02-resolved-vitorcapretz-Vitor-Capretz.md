# Node.js - Aula 02 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1465758182466

## 1. Quais são os 4 verbos que utilizamos para o CRUD?

O CRUD consiste nas 4 principais operações de um sistema, são elas:
* Create - Inserção de novos dados. Ex.: `POST`
* Read - Leitura de dados já inseridos. Ex.: `GET`
* Update - Alteração de dados inseridos. Ex.: `PUT`
* Delete - Exclusão de dados. Ex.: `DELETE`

## 2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do `Cat Status Code`.

Cada Status Code representa um tipo de possível retorno de uma requisição, ao fazer uma requisição podemos facilmente comprender se tudo funcionou como esperávamos ou qual foi o comportamento dela.

#### 101 - Continue
![cat_100](https://http.cat/100)

#### 202 - Accepted
![cat_202](https://http.cat/202)

#### 301 - Moved Permanently
![cat_301](https://http.cat/301)

#### 416 - Requested Range Not Satisfiable
![cat_416](https://http.cat/416)

#### 500 - Internal Server Error
![cat_500](https://http.cat/500)

## 3. Explique o que é cada parâmetro da função recebida no `createServer`.

Os parâmetros são:

* Request - Parâmetro do tipo Objeto, onde são enviadas as informações necessárias para o servidor, incluindo cabeçalho, URL, tipo de requisição, etc.
* Response - Parâmetro do tipo Objeto, contém as informações retornadas do servidor para a nossa requisição.
    
## 4. O que é e para que serve a `Querystring`?

A Querystring fica normalmente no fim da URL e contém variáveis separadas por `&`. Ela pode ser usada para enviar informações para um `GET` de informações em uma API.
Exemplo: `meusite.com.br/api/users/?name=Vitor`

## 5. Escreva no código do server.js uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js

'use strict';

let date = (new Date()).toJSON();

const http = require('http');
const successJson = {
    version: 1.0,
    name: 'Be MEAN',
    returned_at: date
};
const errorJson = {
    message: 'Não encontrado!'
};

http.createServer(function(req, res){
    let req_url = req.url;
    switch(req_url){
        case "/api/pokemons/create":
        case "/api/pokemons/read":
        case "/api/pokemons/update":
        case "/api/pokemons/delete":
            res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(successJson));
            break;
        default:
            res.writeHead(400, {'Content-type': 'application/json; charset=utf-8'});
            res.write(JSON.stringify(errorJson));
            break;
    }
    
    res.end();
}).listen(3000, function(){
    console.log('Server running on localhost:3000');
});

```
