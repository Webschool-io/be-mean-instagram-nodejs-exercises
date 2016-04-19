# Node.js - Aula 03 - Exercício
**User:** [Geriel Castro](https://github.com/geriel)

**Autor:** Geriel Castro

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Isso ocorre apenas no Chrome, na primeira requisição ele obtem os dados normalmente, na segunda requisição é solicitado o `favicon` do servidor

## Qual a DIFERENÇA entre o GET e o POST?
* **GET**
  - As informações são enviadas como String na URL
  - Tamanho limitado de capacidade de envio
  - Mais rápido já que é mais simples
  - Envia somente String
  - Informações enviadas ficam ficam armazenadas no cache

* **POST**
  - As informações são encapsuladas junto ao corpo da requisição HTTP
  - Sem limitação de comprimento
  - As informações não ficam gravadas em cache
  - Por conta do encapsulamento gera uma demora no envio
  - Envia qualquer tipo de dados


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"80","etag":"W/\"50-hf+ZFF9yxZcHPPp5dfTIeg\"","date":"Mon, 28 Mar 2016 05:36:55 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Geriel","type":"Aluno","_id":"56f8c2f790983f110020cabe"}
```
---
```js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-tMnyX/9VLwyzxeDMUlkj3A\"","date":"Mon, 28 Mar 2016 05:39:16 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6266973853189144577","electionId":"56ee12f2563048036a1e77e7"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Mon, 28 Mar 2016 05:41:35 GMT","via":"1.1 vegur"}
Dados finalizados:

```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```html
STATUS: 200
HEADERS: {"date":"Mon, 28 Mar 2016 06:18:44 GMT","content-type":"application/json","content-length":"319","connection":"close","set-cookie":["__cfduid=d4d2fb3ef3de7ad617f9b2ff7fd1feb321459145924; expires=Tue, 28-Mar-17 06:18:44 GMT; path=/; domain=.postmon.com.br; HttpOnly"],"access-control-allow-origin":"*","cache-control":"public, max-age=2592000","x-cache-status":"MISS","cf-cache-status":"HIT","expires":"Wed, 27 Apr 2016 06:18:44 GMT","server":"cloudflare-nginx","cf-ray":"28a8f76b9b8123ae-IAD"}
<html>
	<body>
    	<h1> RESULT: </h1>
        <pre>
          {
            "complemento": "de 146 ao fim - lado par",
            "bairro": "Centro",
            "cidade": "Rio de Janeiro",
            "logradouro": "Avenida Rio Branco",
            "estado_info": {
              "area_km2": "43.777,954",
              "codigo_ibge": "33",
              "nome": "Rio de Janeiro"
            },
            "cep": "20040003",
            "cidade_info": {
              "area_km2": "1200,278",
              "codigo_ibge": "3304557"
            },
            "estado": "RJ"
          }
        </pre>
	</body>
</html>
```
