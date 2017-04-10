# Node.js - Aula 02 - Exercício
**user:** [maurienefirmino](https://github.com/maurienefirmino)  
**autor:** Mauriene Firmino do Nascimento Júnior 
**date:** 1474200477235  

## Quais são os 4 verbos que utilizamos para o CRUD?

Para o Create = verbo POST.
Para o Reatrive/Read = verbo GET.
Para o Update = verbo PUT.
Para o Delete = verbo DELETE.

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Foram inventados para existir um feedback para o cliente sobre o que acontece nas requisiçõs.

#### 101 - Mudando protocolos
![Mudando protocolos](https://http.cat/101)
Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo

#### 201 - Criado
![Criado](https://http.cat/201)
A requisição gerou um novo registro.

#### 301 - Movido permanentemente
![Movido permanentemente](https://http.cat/301)
A url requisitada não está disponivel na mesma.

#### 401 - Não autorizado
![Não Autorizado](https://http.cat/401)
O conteúdo requisitado necessita de alguma autenticação.

#### 500 - Erro interno no servidor
![Erro interno no servidor](https://http.cat/500)
Erro que pode significar diversos erros internos.

## Explique o que é cada parâmetro da função recebida no `createServer`.

Resquest = É um objeto que armazena os dados da requisição do cliente.  
Response = É um objeto callback que será retornado para o cliente que fez a requisição.


## O que é e para que serve a Querystring?

É uma maneira de se passar dados usando a url. Usando `?` seguido das proriedades e dos valores, sendo que quando se tem mais de uma propriedade usa-se `&` para concatenar-los.

Ex.: http://localhost/api/create?name=teste&age=25


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:


``` 
'use strict';

const http = require('http')
, url = require('url')
, SUCCESS = {
    version: '1.0'
    , name: 'be MEAN'
    , returned_at: new Date().toJSON()
}
, ERROR = {
    message: "Rota não econtrada"
};

http.createServer(function(req, res){
    switch(req.url){

        case '/api/pokemons/create':
        res.writeHead(200,{'Content-Type':'application;json'});
        res.write(JSON.stringify(SUCCESS));
        break;

        case '/api/pokemons/read':
        res.writeHead(200,{'Content-Type':'application;json'});
        res.write(JSON.stringify(SUCCESS));
        break;

        case '/api/pokemons/update':
        res.writeHead(200,{'Content-Type':'application;json'});
        res.write(JSON.stringify(SUCCESS));
        break;

        case '/api/pokemons/delete':
        res.writeHead(200,{'Content-Type':'application;json'});
        res.write(JSON.stringify(SUCCESS));
        break;

        default:
        res.writeHead(400,{'Content-Type':'application;json;charset=utf-8'});
        res.write(JSON.stringify(ERROR));
        break;
    }

    res.end();
}).listen(3000, function(){
    console.log('Servidor executando em localhost:3000');
});
```