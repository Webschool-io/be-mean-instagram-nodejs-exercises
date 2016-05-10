# Node.js - Aula 03 - Exercício
**user:** [gabrieltome](https://github.com/gabrieltome)

**autor:** Gabriel Tomé Lisboa

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Porque na segunda requisição, o Chrome busca  por um favicon que não estamos fornecendo.

## Qual a DIFERENÇA entre o GET e o POST?

###GET
Com capacidade de 1024 caracteres, este método é utilizado quando se quer passar poucas ou pequenas informações para realizar uma pesquisa ou simplesmente passar uma informação para outra página através da URL (de Uniform Resource Locator). Caso este limite seja ultrapassado, corre-se o risco de obter um erro na página, uma vez que as informações foram passadas de forma incompleta. A função do método GET é pura e simplesmente recuperar um recurso existente no servidor. O resultado de uma requisição GET é “cacheável” pelo cliente, ou seja, fica no histórico do navegador. 
###POST
Este método utiliza a URI (de Uniform Resource Identifier) para envio de informações ao servidor. A URI não é retornável ao cliente, o que torna o método POST mais seguro, pois não expõe os dados enviados no navegador. Como não tem limite de capacidade para envio de informações, este método se torna melhor que o GET. No POST, uma conexão paralela é aberta e os dados são passados por ela.

Uma requisição por meio desse método sempre requer que as informações submetidas sejam incluídas no corpo da mensagem e formatadas como uma query string, além de conter cabeçalhos adicionais especificando seu tamanho e seu formato. Mesmo que alguém mau intencionado obtenha acesso aos dados enviados pelo método POST, sem o tamanho dos dados e o formato correto será impossível lê-los.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```
MacBook-Pro-de-Gabriel-Tome:nodejs gabrieltome$ node http-request-post
PostData: name=Gabriel&type=aluno
Tamanho do PostData: 23
STATUS:201
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"74","etag":"W/\"4a-DT543Pi46Pfw0ehwU64prw\"","date":"Tue, 10 May 2016 02:08:26 GMT","via":"1.1 vegur"}
Dados finalizados: {"__v":0,"name":"Gabriel","type":"aluno","_id":"5731429a0d118e1100e65525"}
```

```
MacBook-Pro-de-Gabriel-Tome:nodejs gabrieltome$ node http-request-put
STATUS:202
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-ARlouDSFgBAWPueSmqcPNg\"","date":"Tue, 10 May 2016 02:10:28 GMT","via":"1.1 vegur"}
Dados finalizados: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6282876708336959489","electionId":"56ee12f2563048036a1e77e7"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```
MacBook-Pro-de-Gabriel-Tome:nodejs gabrieltome$ node http-request-delete
STATUS:204
HEADERS:{"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Tue, 10 May 2016 02:13:30 GMT","via":"1.1 vegur"}
Dados finalizados:
```


## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```
STATUS:200
HEADERS:{"content-type":"text/html","date":"Tue, 10 May 2016 02:23:01 GMT","connection":"close","transfer-encoding":"chunked"}
Dados finalizados:<html><body><h1>BE MEAN</h1><h2>Pokemon: Charmander</h2></body></html>
```