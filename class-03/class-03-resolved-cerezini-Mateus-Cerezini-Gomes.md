# Node.js - Aula 03 - Exercício
**User:** [Cerezini](https://github.com/Cerezini)
**Autor:** Mateus Cerezini Gomes

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Porque ele executa outro GET para buscar o ícone da tab (favicon.ico).

## Qual a DIFERENÇA entre o GET e o POST?

- **GET** é o método de leitura (read), deseja-se obter dados, os parâmetros passados na querystring são necessários para realizar a busca.
- **POST** é o método de inserção (create), deseja-se criar um objeto, os parâmetros passados são as informações necessárias para isso.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"58","etag":"W/\"3a-sjfHHWizYlGIpgfVrIYyiw\"","date":"Wed, 09 Mar 2016 04:53:26 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Mateus","_id":"56dfac46526e7011009a58ec"}
```

```js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-FVMqgxkhExrRsjHpKb1Ypg\"","date":"Wed, 09 Mar 2016 04:56:36 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6259912239759753217","electionId":"565e25d106dca622271891c4"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 09 Mar 2016 04:59:20 GMT","via":"1.1 vegur"}
Dados finalizados:  
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```js
STATUS: 200
HEADERS: {"date":"Thu, 10 Mar 2016 05:21:08 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","set-cookie":["__cfduid=dc35e66a7feb7f6b554d6eb228f413c941457587268; expires=Fri, 10-Mar-17 05:21:08 GMT; path=/; domain=.widenet.com.br; HttpOnly"],"access-control-allow-origin":"*","pragma":"no-cache","cache-control":"no-store, no-cache, max-age=2592000","expires":"Sat, 09 Apr 2016 05:21:08 GMT","vary":"Accept-Encoding","server":"cloudflare-nginx","cf-ray":"2814524b2b9818b5-GRU"}
Dados finalizados:  <html><body><h1>Busca por CEP</h1><ul><li>status: 1</li><li>code: 06233-030</li><li>state: SP</li><li>city: Osasco</li><li>district: Piratininga</li><li>address: Rua Paula Rodrigues</li></ul></body></html>
```
