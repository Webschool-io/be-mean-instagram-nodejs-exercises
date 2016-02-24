# Node.js - Aula 03 - Exercício
**user:** [felipelopesrita](https://github.com/felipelopesrita)
**autor:** Felipe José Lopes Rita

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Porque além da requisição original, o navergador gera uma segunda requisição em que procura o favicon.ico do site

## Qual a DIFERENÇA entre o GET e o POST?
No verbo GET, a query string é anexada diretamente à URL da requisição. Assim, as informações a serem enviadas só podem ser strings, além de possuir um limite de tamanho máximo da mensagem a ser enviada. Este verbo também guarda as informações enviadas em cache.
De forma contrária, o verbo POST anexa as informações no corpo do documento da requisição, possibilitando que sejam enviados outros tipos de dados além de strings e também que não exista um limite de tamanho para a requisição. Outro ponto importante é que esse método não guarda as informações enviadas em cache.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
**Cria com meu nome**
```js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"84","etag":"W/\"54-2gzvZ0bdq2GrzbiKW4KACA\"","date":"Wed, 24 Feb 2016 03:46:24 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Felipe J. L. Rita","type":"aluno","_id":"56cd279073a6431100ba1de8"}
```
**Modifica pelo usuario do GitHub**
```js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-c3SDbmIqBjmtNxn+Zvbfyw\"","date":"Wed, 24 Feb 2016 03:49:37 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6254699785844948993","electionId":"565e25d106dca622271891c4"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 24 Feb 2016 03:53:37 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```js
STATUS: 200
HEADERS: {"server":"nginx/1.1.19","date":"Wed, 24 Feb 2016 04:42:21 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Accept","x-frame-options":"SAMEORIGIN","cache-control":"s-maxage=360, max-age=360"}
Resposta:
...
<ul>
<li>Water</li>
<li>Grass</li>
<li>Electric</li>
<li>Ice</li>
<li>Dragon</li>
</ul>
...
```
