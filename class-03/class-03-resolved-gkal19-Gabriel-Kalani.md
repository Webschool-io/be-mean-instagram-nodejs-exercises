# Node.js - Aula 03 - Exercício

**user:** [gkal19](https://github.com/gkal19)

**autor:** Gabriel Kalani

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Isso ocorre, pois o Chrome faz a primeira requisição para puxar os dados da `Querystring` e a segunda requisição é para puxar o `fav.icon` do site

## Qual a DIFERENÇA entre o GET e o POST?
Uma requisição **GET** é enviada como string anexada a URL, enquanto que a requisição **POST** é encapsulada junto ao corpo da requisição HTTP e não pode ser vista.
Já que GET é enviado via URL, então nós sabemos que ela só transporta textos. A requisição POST não tem restrições, pode transportar tanto texto, como dados binários.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```js
//Criando Pokémon
postData name=Gabriel%20Kalani
Tamanho do postData 21
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*",
"content-type":"application/json; charset=utf-8","content-length":"66","etag":"W/\"42-xME2EVluNCG+T7UcvSd6kA\"",
"date":"Sat, 30 Jan 2016 22:22:56 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Gabriel Kalani","_id":"56ad37c0200ef511003a086b"}

//Modificando Pokémon
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*",
"content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-gWA7CuZscvFTWzd9tLFHDw\"",
"date":"Sat, 30 Jan 2016 22:26:05 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6245710367754813441","electionId":"565e25d106dca622271891c4"}}

```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express",
"access-control-allow-origin":"*",
"date":"Sat, 30 Jan 2016 22:28:35 GMT","via":"1.1 vegur"}
Dados finalizados:

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```html
STATUS:  200
HEADERS:  {"content-type":"text/html","date":"Sat, 30 Jan 2016 22:28:35 GMT","connection":"close","transfer-encoding":"chunked"}
Dados finalizados:
<html><body><h1>Be MEAN - Instagram</h1></html></body>
```
