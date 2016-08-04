# Node.js - Aula 02 - Exercício
**user:** [rxon7](https://github.com/rxon7)

**autor:** Rony Souza

## Quais são os 4 verbos que utilizamos para o CRUD?

- Create
- Retrieve
- Update
- Delete

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Serve para padronizar o retorno do servidor

## 1XX - Informacional
![100](https://http.cat/100)

## 2XX - Sucesso
![200](https://http.cat/200)

## 3XX - Redirecionamento
![301](https://http.cat/301)

## 4XX- Erro de cliente
![415](https://http.cat/415)

## 5XX - Erro de servidor
![500](https://http.cat/500)


## Explique o que é cada parâmetro da função recebida no `createServer`.

`createServer` é uma função anônima, que é executada automaticamente.

**Request:** É a informação chegando no servidor através do navegador.

**Response:** É a informação chegando no navegador através do servidor.


## O que é e para que serve a Querystring?

Querystring é uma forma de passar os valores pela url e Serve para alterarmos o estado de uma página web.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js

var http = require('http');
var STATUS = {};

function setStatus(action, message){
   STATUS = {
      action: action,
      message: message,
      date_at: new Date().toJSON()
   };
}

http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

   switch(req.url){
      case '/api/pokemons/create':
         setStatus('CREATE', 'Criando um Pokémon.');
      break;
      case '/api/pokemons/read':
         setStatus('READ', 'Retornando um Pokémon.');
      break;
      case '/api/pokemons/update':
         setStatus('UPDATE', 'Atualizando um Pokémon.');
      break;
      case '/api/pokemons/delete':
         setStatus('DELETE', 'Excluindo um Pokémon.');
      break;
      default:
         res.writeHead(404, {'Content-Type': 'application/json'});
         setStatus('ERROR', 'Not found');
      break;
   }
   res.write(JSON.stringify(STATUS));
   res.end();
}).listen(3300, () => {
      console.log('O servidor está rodando em localhost:3300.');
});


```