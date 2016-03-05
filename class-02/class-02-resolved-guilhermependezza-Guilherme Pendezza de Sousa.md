# NodeJS - Aula 02 - Exercício

# 1. Quais são os 4 verbos que utilizamos para o CRUD?
Os verbos http usados pelo crud são:

Create - POST
Read   - GET
Update - PUT
Delete - DELETE

# 2. Para que foram inventados os Status Codes? Dê um exemplo de 1 código por grupo e a imagem do Cat Status Code
Os status codes são utilizados pelo cliente quando recebe o retorno da requisição. Foram padronizados algumas situações que podem acontecer no final do request. Ex.:

100 - Continue - https://http.cat/100
202 - Accepted - https://http.cat/202
301 - Moved Permanently - https://http.cat/301
402 - Payment Required - https://http.cat/402
506 - Variant also negotiates - https://http.cat/506

# 3. Explique o que é cada parâmetro da função recebida no 'createServer'.
A função recebe os parametros req e res que são, respectivamente, a requisição http e a resposta àquela requisição.

# 4. O que é e para que serve a Querystring?
A query string é usada para passar parâmetros para a requisição atraves do método GET.

# 5. Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

'use strict';

var date = (new Date).toJSON();

const http = require('http')
    , SUCCESS = {
        version: 1.0
        , name: 'Be MEAN'
        , created_at: date
    }
    , ERROR = {
        message: 'Não Encontrado!'
    };

http.createServer((req, res) => {
    var requests = ['/api/pokemons/create', '/api/pokemons/read', '/api/pokemons/update', '/api/pokemons/delete'];

    if(requests.indexOf(req.url) > -1){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(SUCCESS));
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(ERROR));
    }
    res.end();
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});