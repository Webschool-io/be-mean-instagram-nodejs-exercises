# Node.js - Aula 02 - Exercício
**user:** [carlosmachel](https://github.com/carlosmachel)
**autor:** Carlos Machel
**date:** 1458182711164

## Quais são os 4 verbos que utilizamos para o CRUD?

**Create** : verbo POST

**Retrieve/Read** : verbo GET

**Update** : verbo PUT

**Delete** : verbo DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os `status code` foram criados para ser uma forma padronizada do servidor retornar informações para o cliente que fez uma requisição. Lembrando que a má utilização dos status code pode gerar impacto no SEO da página. 

### 101 - Continue

Criado para indicar que o client pode mandar a requisição completa. Funciona semelhante a um `handshake`, o client envia para uma primeira requisição perguntando se o servidor vai aceitar. Se o retorno for 101 é para enviar a requisição completa.

![img](https://http.cat/100)

### 200 OK

A requisição foi um sucesso.

![img](https://http.cat/200)

### 301 - Moved Permanently

O servidor retornou indicando que aquele recurso foi movido permanentemente para uma outra URI.

![img](https://http.cat/301)

### 408 Request Timeout

O client não produziu um request no tempo que o servidor estava preparado para esperar. 

![img](https://http.cat/408)

### 503 Service Unavailable

O servidor não pode lidar com o request devido a uma manutenção ou sobrecarga temporaria.

![img](https://http.cat/503)

## Explique o que é cada parâmetro da função recebida no `createServer`.

Essa função contém dois parâmetros. 

- `request` 
Que nada mais é do que um objeto que contém todas as informações relacionadas ao request do client para aquele servidor. Ele vai conter IP, HTTP headers, url e parametros.
Ele é uma instância da classe [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

- `response` 
Que é o resultado que o servidor retorna para o client. Pode ser uma string, um objeto, uma página html.
É uma instância de [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)


## O que é e para que serve a Querystring?

Uma querystring é uma sequencia de caracteres com uma estrutura `chave` e `valor`, adicionados na URL de requisição ao servidor contendo informações. A recomendação é que se use para `filtro` de contéudo e não para indicar recursos.


### Mau uso de querystring

> /api?type=user&id=23

### Bom uso de queryString

> /product?price=3.15&compare=lowerthan


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

/api/pokemons/create   
/api/pokemons/read  
/api/pokemons/update  
/api/pokemons/delete

```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
,   url    = require('url')   
,   ERROR = {
        message: 'Não encontrado'
    }
;

var SUCCESS = {
        version: 1.0
    ,   name:'Be MEAN'
    ,   returned_at: date
};

const routes = [
      { path: '/api/pokemons/create', name: 'create' }
    , { path: '/api/pokemons/read', name: 'read' }
    , { path: '/api/pokemons/update', name: 'update' }
    , { path: '/api/pokemons/delete', name: 'delete' }
]

http.createServer(function(req, res){
    const pathName = url.parse(req.url).pathname;           
    var route = routes.find(route => route.path == pathName);
    
    if(route){
        SUCCESS.name = route.name;
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(SUCCESS));                
    } else{                      
        res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(ERROR));
    }    
    res.end();                      
       
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});

```
