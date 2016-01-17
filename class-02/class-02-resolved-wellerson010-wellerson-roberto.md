# NodeJS - Aula 02 - Exercício
autor: Wellerson Roberto

## 1) Quais são os 4 verbos que utilizamos para o CRUD?

Create - POST

Read - GET

Update - PUT

Delete - DELETE


## 2) Para que foram inventados os Status Codes? Dê exemplo de um código por grupo e a imagem do Cat Status Code.

Foi inventado para o servidor informar, de maneira padronizada, se sua requisição foi atentidada ou não e o por que.

101 -> Trocando protocolos. O socilicitante pediu ao servidor para mudar os protocolos e o servidor irá fazê-lo. [Http.cat](https://http.cat/101)

204 -> Sem conteúdo. O servidor processou a requisição corretamente, mas não retornou nenhum conteúdo. [Http.cat](https://http.cat/204)

301 -> Movido permanentemente. Esta e todas as futuras requisições foram movidas permanentemente. [Http.cat](https://http.cat/301)

414 -> URI muito longa para o servidor processar. [Http.cat](https://http.cat/414)

508 -> Loop detectado. O servidor detectou um loop infinito enquanto processava a requisição. [Http.cat](https://http.cat/508)

## 3) Explique o quê é cada parâmetro da função recebida no 'createServer'

São passados dois parâmetros para a função recebida no createServer. O primeiro, normalmente chamado de **request** ou apenas **req**, é uma instância de **http.IncomingMessage** e é um objeto que possui informações acerca da requisição que foi feita. Nele você pode obter, por exemplo, o cabeçalho da requisição, o verbo/método, a url, a versão do HTTP... Já o segundo parâmetro, normalmente chamado de **response** ou apenas **res**, é uma instância de **http.ServerResponse**, sendo responsável por manipular a resposta que será enviada para o cliente. Ao enviar uma informação para o cliente, por exemplo, o objeto **response** será acionado, através de seus métodos **write**, **writeHead** e **end**.

## 4) O quê é e para que serve o Query String?

O **Query String** é parte de uma URL que pode conter dados que serão enviados ao servidor em um formato de chave/valor. Serve basicamente para enviar dados ao servidor. É também muito usado em APIS Web, para enviar dados que serão usados numa consulta, como por exemplo o formato que você quer recuperar uma informação.

```
http://example.com/geoserver/wfs?service=wfs&version=1.1.0&request=GetCapabilities
```

A Query String inicia-se após o **?** de uma URL. Depois, cada campo segue a estrutura "campo = valor", sem aspas mesmo para os campos de texto. Na URL acima, a Query String possui 3 campos/valores.

```
campo -> valor
service -> wfs
version -> 1.1.0
request -> GetCapabilities
```

## 5) Escreva no código do "server.js" uma forma de entregar um JSON de sucesso em 4 rotas diferentes

```
'use strict';

const http = require('http')
    , date = new Date().toJSON()
    , SUCCESS = {
        version: 1,
        name: 'Be Mean',
        date: date
    },
    ERROR = {
        message: "Não encontrado!"
    };

http.createServer(function (req, response) {
    switch(req.url){
        case "/api/pokemons/create":
        case "/api/pokemons/read":
        case "/api/pokemons/update":
        case "/api/pokemons/delete":
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(SUCCESS));
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'application/json;charset=utf-8' });
            response.write(JSON.stringify(ERROR));
    }
    response.end();
}).listen(3000, function () {
    console.log('Estou pronto!');
});
```
