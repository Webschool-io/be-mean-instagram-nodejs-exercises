# Node.js - Aula 02 - Exercício
**user:** [viniciusmazzeo](https://github.com/viniciusmazzeo)

**autor:** Vinicius Moreira Mazzeo

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create
- Retrieve/Read
- Update
- Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

O Status Codes foram inventados para identificar o retorno do servidor, para identificar qual o status dele.
Estes códigos são formados por 3 dígitos por padrão.

## 1XX - Informacional
![101](https://http.cat/101)

## 2XX - Sucesso
![207](https://http.cat/207)

## 3XX - Redirecionamento
![301](https://http.cat/301)

## 4XX- Erro de cliente
![404](https://http.cat/404)

## 5XX - Erro de servidor
![506](https://http.cat/506)


## Explique o que é cada parâmetro da função recebida no `createServer`.

`createServer` é uma função anônima, é uma caracterísca importante do JavaScript, ela responde para o cliente que fez a requisição.
Ela é executada apenas neste momento.

- request: requisições feitas pelo cliente;
- response: respostas do servidor para o cliente.


## O que é e para que serve a Querystring?

Querystring é como podemos passar os valores através da url, com isso podemos capturar estes valores através desta mesma url.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js

'use strict';
const http = require('http')
    , SUCCESS = {
        name: '<h1>É TEEETRAAAAAAAA</h1>',
    }
    , ERROR = {
        message: "<h1>Não foi dessa vez!</h1>"
    };

http.createServer((req, res) => {
    
    let rota = [ '/api/pokemons/create', 
                '/api/pokemons/read', 
                '/api/pokemons/update', 
                '/api/pokemons/delete'];
                
    switch (req.url) {
        case rota[0]:
        case rota[1]:
        case rota[2]:
        case rota[3]:
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(SUCCESS.name);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(ERROR.message);
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});

```