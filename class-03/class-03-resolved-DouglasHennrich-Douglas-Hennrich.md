# Node.js - Aula 03 - Exercício
**user:** [DouglasHennrich](https://github.com/DouglasHennrich)

**autor:** Douglas Hennrich

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Isso ocorre, pois o Chrome faz a primeira requisição para puxar os dados da `Querystring` e a segunda requisição é para puxar o `fav.icon` do site

## Qual a DIFERENÇA entre o GET e o POST?
* **GET**
  - As informações são enviadas como `String` anexada a `URL`
  - Limite de tamanho da mensagem a ser enviada
  - Envia somente `String`
  - Informações enviadas ficam em `cache`

* **POST**
  - As informações são encapsuladas junto ao corpo da requisição `HTTP` e não podem ser vistas na `URL`
  - Sem limites de comprimento da mensagem enviada
  - Envia qualquer tipo de dados
  - As informações enviadas **NÃO** ficam gravadas em `cache`


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```js
STATUS:  201
HEADERS:  {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"83","etag":"W/\"53-NXiCwjw6In/DOcTmzTUjpQ\"","date":"Sun, 13 Dec 2015 01:59:39 GMT","via":"1.1 vegur"}
Dados Finalizados:  {"__v":0,"name":"Douglas Hennrich","type":"aluno","_id":"566cd10b25ff7511008dcfd2"}
```
---
```js
STATUS:  202
HEADERS:  {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-aCp4f3tJR0UHoIZ68ib41w\"","date":"Sun, 13 Dec 2015 02:00:48 GMT","via":"1.1 vegur"}
Dados Finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6227582526274142209","electionId":"565e25d106dca622271891c4"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
STATUS:  204
HEADERS:  {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sun, 13 Dec 2015 02:02:28 GMT","via":"1.1 vegur"}
Dados Finalizados:  

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```html
STATUS:  200
HEADERS:  {"content-type":"text/html","date":"Sun, 13 Dec 2015 02:20:00 GMT","connection":"close","transfer-encoding":"chunked"}
Dados finalizados:
<html><body><h1>Pokemons</h1><ul><li>Pokemon: Bulbassauro</li><li>Pokemon: Charmander</li><li>Pokemon: Squirtle</li><li>Pokemon: Pikachu</li></ul></body></html>
```
