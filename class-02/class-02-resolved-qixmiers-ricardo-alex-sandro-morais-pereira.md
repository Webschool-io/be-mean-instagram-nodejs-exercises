# Nodejs - Aula 02 - Exercício
autor: Ricardo Pereira

##1. Quais são os 4 verbos que utilizamos para o CRUD?
C = Create(POST)
R = Read(GET)
U = Update(PUT)
D = Delete(DELETE)

##2. Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do Cat Status Code.
Foi criado para dar padrões de resposta e para ter uma orientação melhor dos acontecimentos do servidor, uma leitura mais legível para o homem.

1xx Informational

![alt text](https://http.cat/100)

2xx Success

![alt text](https://http.cat/200)

3xx Redirection

![alt text](https://http.cat/300)

4xx Cliente Error

![alt text](https://http.cat/400)

5xx Server Error

![alt text](https://http.cat/500)

##3. Explique o que é cada parâmetro da função recebida no 'createServer'.
request: reponsável de receber as requisições, url e seus parâmetro por exemplo.
response: responsável de escrever e gerar status do servidor para o cliente.

##4. O que é e para que serve a Querystring?
QueryString em World Wide Web (WWW) é um padrão utilizado para transportar valores em uma uniform resource locator (URL).
Elas são um conjuntos de pares/valores anexados a URL.

##5. Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes.
'use strict';

const http = require('http')
    , SUCCESS = {
        name: '<h1>Be MEAN</h1>',
    }
    , ERROR = {
        message: "<h1>Not found</h1>"
    };

http.createServer((req, res) => {
    
    let urls = [ '/api/pokemons/create', 
                '/api/pokemons/read', 
                '/api/pokemons/update', 
                '/api/pokemons/delete'];
                
    switch (req.url) {
        case urls[0]:
        case urls[1]:
        case urls[2]:
        case urls[3]:
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(SUCCESS.name);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(ERROR.message);
    }

    res.end();
}).listen(3000, () => {
    console.log('Server start in port 3000');
});