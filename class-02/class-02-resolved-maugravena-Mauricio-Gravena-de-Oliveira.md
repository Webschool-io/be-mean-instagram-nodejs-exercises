# Node.js - Aula 02 - Exercício

**Autor:** Mauricio Gravena de Oliveira
**Data:** 01/09/2016

## 1. Quais são os 4 verbos que utilizamos para o CRUD?
 Create | Read | Update | Delete

## 2. Para que foram invetados os Staus Code? Dê exemplos de 1 código por grupo e a imagem do Cat Status Code.

Foram inventados para ajudar no diagnótico da troca de mensagens pelo protocolo HTTP.

###  **Success 1xx**
#### **Switching Protocols 101**
![Switching Protocols 101](https://http.cat/101 "Switching Protocols 101")

###  **Success 2xx**
#### **CREATED 201**
![CREATED 201](https://http.cat/201 "CREATED 201")

### **Error 4xx, 5xx**
#### **Internal Error 500**
![Internal Error 500](https://http.cat/500 "Internal Error 500")

### **Redirection 3xx**
#### **Not Modified 304**
![Not Modified 304](https://http.cat/304 "Not Modified 304")

## 3. Explique o que é cada parâmetro da função recebida no 'createServer'.

O "req"(request) é reponsável por tratar o pedido do cliente, já o "res"(response) devolve uma reposta baseada no pedido.

## 4. O que é e para que serve a Querystring?

É uma módulo nativo, que fornece métodos para tratamento e formatação de URL

## 5. Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes: ("/api/pokemons/create", "/api/pokemons/read", "api/pokemons/update", "/api/pokemons/delete")

```js
'use strict';

var date = (new Date()).toJSON();
const http = require('http');

const SUCCESS = {
  version: 1.0,
  name: 'Be Mean',
  created_at: date
};

const ERROR = {
  message: "Não encontrado!"
};

const create = (res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(SUCCESS));
}

const read = (res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(SUCCESS));
}

const update = (res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(SUCCESS));
}

const del = (res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(SUCCESS));
}

const err = (res) => {
  res.writeHead(404, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify(ERROR));
}

var server = http.createServer((req, res) => {
  let url = req.url;

  switch(url) {

    case '/api/pokemons/create':
      create(res);
      break;

    case '/api/pokemons/read':
      read(res);
      break;

    case '/api/pokemons/update':
      update(res);
      break;

    case '/api/pokemons/delete':
      del(res);
      break;

    default:
      err(res);
      break;
  }
  res.end();
}).listen(3000, () => {
  console.log('Servidor rodando... localhost:3000');
});
```
