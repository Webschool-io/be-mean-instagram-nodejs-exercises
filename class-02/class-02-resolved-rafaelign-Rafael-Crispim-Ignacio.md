# NodeJS - Aula 02 - Exercício
**Autor:** Rafael Crispim Ignácio

**Data** 1451226657631

# 1. Quais são os 4 verbos que utilizamos para o CRUD?

```js
- Create - POST
- Retrieve/Read - GET
- Update - PUT
- Delete - DELETE
```

# 2. Para que foram inventados os Status Codes? Dê um exemplo de 1 código por grupo e a imagem do Cat Status Code

```js
Os `Status Codes` foram criados para identificarmos como uma requisição foi recebida pelo servidor.
101 - Switching protocols ![https://http.cat/101](101)
200 - OK ![https://http.cat/101](200)
301 - Moved Permanently ![https://http.cat/101](301)
404 - Not Found ![https://http.cat/101](404)
500 - Internal Server Error ![https://http.cat/101](500)
```

# 3. Explique o que é cada parâmetro da função recebida no 'createServer'.

```js
function(request, response) {
    ...
}
```

- request

Representa a requisição recebida, ela contém os dados presentes no client. É deste parâmetro que capturamos as querystrings para processar uma busca ou autenticação. Também é possível verificar os headers recebidos assim como algumas outras configurações.
- response

Representa a resposta que será devolvida ao usuário. Neste parametro temos acesso as configurações do documento através dos headers e do conteúdo que será exibido. Este parâmetro é o que controla o que será retornado ao cliente ao fim de uma requisição.

# 4. O que é e para que serve a Querystring?

```
Querystring é a maneira que temos para transitar informações utilizando o protocolo http. Desta maneira podemos enviar parâmetros para o servidor para serem processados, como por exemplo uma busca ou uma autenticação.
```

# 5. Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0',
        name: 'Be MEAN',
        returned_at: date
    }
    , ERROR = {
        message: "Não encontrado!"
    };

http.createServer(function(request, response){
    switch (request.url) {
        case '/api/pokemons/create':
        case '/api/pokemons/read':
        case '/api/pokemons/update':
        case '/api/pokemons/delete':
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write(JSON.stringify(SUCESS));
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            response.write(JSON.stringify(ERROR));
    }

    response.end();
}).listen(3000, function(){
    console.log('localhost:3000');
});
```
