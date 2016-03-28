# Node.js - Aula 02 - Exercício
**User:** [Geriel Castro](https://github.com/geriel)

**Autor:** Geriel Castro

**Date:**

#### 1 - Quais são os 4 verbos que utilizamos para o CRUD?
* **C** - `POST`
* **R** - `GET`
* **U** - `PUT`
* **D** - `DELETE`


#### 2 -  Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Para padronizar e facilitar o entendimento dos servidores, foi criado um padrão de Estatus ( *Status Codes* ), dessa forma, fica explícito os tipos de retorno que cada mensagem vem do servidor.

#### 1XX Informacional
###### 100 - Continue

![](https://http.cat/100)

#### 2XX Sucesso

###### 206 - Partial Content

![](https://http.cat/206)

#### 3XX Redirecionamento

###### 304 - Not Modified

![](https://http.cat/304)

#### 4XX Erro do Cliente

###### 409 - Conflict

![](https://http.cat/409)

#### 5XX Erro de Servidor

###### 502 - Bad Gateway

![](https://http.cat/502)


#### 3 - Explique o que é cada parâmetro da função recebida no `createServer`.

* **Request** - Parâmetro que contém a requisição do usuário.

* **Response** - Servidor utiliza como resposta para usuário.


#### 4 - O que é e para que serve a Querystring?

É a maneira utilizada para passar parametros para outras páginas através da URL. Utilizamos ela com o metodo `GET`.


#### 5 - Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

* /api/pokemons/create
* /api/pokemons/read
* /api/pokemons/update
* /api/pokemons/delete

```js

'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: 1.0
        , name: 'Geriel Castro - Be Mean'
        , created_at: date
    }
    , ERROR = {
        message: "Não Encontrada"
    }
    ;

http.createServer(function(req, resp){
    var url = req.url;

    switch(url){
        case "/api/pokemons/create":
            resp.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            resp.write(JSON.stringify(SUCCESS));
        break;
        case "/api/pokemons/read":
            resp.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            resp.write(JSON.stringify(SUCCESS));
        break;
        case "/api/pokemons/update":
            resp.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            resp.write(JSON.stringify(SUCCESS));
        break;
        case "/api/pokemons/delete":
            resp.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            resp.write(JSON.stringify(SUCCESS));
        break;

        default:
            resp.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
            ERROR.message = "Pagina não encontrada!";
            p.write(JSON.stringify(ERROR));
            break;
    }
    resp.end();
})
.listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});

```
