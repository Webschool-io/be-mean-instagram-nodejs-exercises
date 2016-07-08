# NodeJS - Aula 02 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1456024583434

#### 1. Quais são so 4 verbos que utilizamos para o CRUD?

+ C = GET
+ R = POST
+ U = PUT
+ D = DELETE

#### 2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do _Cat Status Code_

Para a identificação correta de retorno.

##### 101
![erro 101](https://http.cat/101)

##### 204
![erro 204](https://http.cat/204)

##### 303
![erro 303](https://http.cat/303)

##### 402
![erro 402](https://http.cat/402)

##### 500
![erro 500](https://http.cat/500)


#### 3. Explique o que é cada parâmetro da função recebida no `createServer`

+ **request**: Requisição feita pelo navegador.
+ **response**: Resposta para o navegador.

#### 4. O que é e para que serve a `QueryString`?

É um protocolo que é usando para transportar dados entre cliente e o servidor.


#### 5. Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes

+ `/api/pokemons/create`
+ `/api/pokemons/read`
+ `/api/pokemons/update`
+ `/api/pokemons/delete`


```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http');

const SUCCESS = {
    version: 1.0,
    name: 'Be MEAN',
    created_at: date
};

const ERROR = {
    message: "Não encontrado"
};


http.createServer(function(req, res) {

    switch(req.url) {

        case '/api/pokemons/create': 
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8;'});
            res.write(JSON.stringify(SUCCESS));
            break;
        case '/api/pokemons/read': 
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8;'});
            res.write(JSON.stringify(SUCCESS));
            break;
        case '/api/pokemons/update': 
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8;'});
            res.write(JSON.stringify(SUCCESS));
            break;
        case '/api/pokemons/delete':
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8;'});
            res.write(JSON.stringify(SUCCESS));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8;'});
            res.write(JSON.stringify(ERROR));
    }
    res.end();
}).listen(3000, function() {
    console.log('Servidor rodando em localhost:3000');
});
```

