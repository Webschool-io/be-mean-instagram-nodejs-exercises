# Node.js - Aula 02 - Exercício
**user:** [augustoody](https://github.com/AugustoOdy)
**autor:** Augusto Ody
**date:** 1454765252713

## Quais são os 4 verbos que utilizamos para o CRUD?

- **Create** : para criação de novos objetos
- **Retrive/Read** : para leitura de objetos
- **Update** : para atualização de objetos
- **Delete** : para remoçaão de objetos


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os *Status codes* foram inventados para retornar ao cliente o que ocorreu com sua requisição.

# Class 1XX (Informação)

![Class 1XX](https://http.cat/100)

# Class 2XX (Sucesso)

![Class 2XX](https://http.cat/206)

# Class 3XX (Redirecionamento)

![Class 3XX](https://http.cat/301)

# Class 4XX (Erro de cliente)

![Class 4XX](https://http.cat/401)

# Class 5XX (Erro de servidor)

![Class 5XX](https://http.cat/508)


## Explique o que é cada parâmetro da função recebida no `createServer`.

*Request:* Informações da requisição feita pelo cliente.
*Response:* Retorno das informações requeridas pelo `request`.


## O que é e para que serve a Querystring?

*Querystrings* são um conjunto dados, que utilizam chaves e valores anexados na URL. Sua utilização é principalmente para passagem de valores.

Sintaxe:

```
http://site.com/?arg1=value1&arg2=value2&arg3=value3
```  

Sendo o primeiro informado após o simbolo `?`, e os seguintes com `&`.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: date
      }
    , USERS = [
        { name: 'Docand Whitsandy' }
      , { name: 'Adas Footfair' }
      , { name: 'Cading Weed-fair' }
      , { name: 'Boli Hay-gardner' }
      , { name: 'Mismé Butcherward' }
      , { name: 'Diding Blowerbottom' }
      , { name: 'Latle Brace-man' }
      , { name: 'Agolbel Goodboffin' }
      , { name: 'Goever Butchergammidge' }
      , { name: 'Inggo Chubb-brace' }
    ]
    , PHOTOS = [
        { path: '/image/1.jpg' }
      , { path: '/image/2.jpg' }
      , { path: '/image/3.jpg' }
    ]
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

http.createServer(function(req, res){
  switch (req.url) {
    case '/api/v1':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(SUCCESS));
      break;
    case '/api/v1/users':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(USERS));
      break;
    case '/api/v1/photos':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(PHOTOS));
      break;
    case '/api/v1/single':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({USERS}));
      break;
    default:
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(ERROR));
  }

  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});

```
