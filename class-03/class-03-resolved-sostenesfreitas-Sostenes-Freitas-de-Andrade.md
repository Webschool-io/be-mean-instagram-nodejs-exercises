# Node.js - Aula 03 - Exercício

**user:** [sostenesfreitas](https://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas de Andrade

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Por que a segunda requisição o chrome requisita o favicon da pagina.


## Qual a DIFERENÇA entre o GET e o POST?
O método GET transporta apenas textos até 255 caracteres que podem ser armazenadas em cache, já o POST pode transportar outros tipos de dados, não possui tamanho máximo para envio mas não pode ser armazenado em cache.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```
STATUS :201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"73","etag":"W/\"49-aliWmWDtJmwXvSvmePTiOA\"","date":"Sat, 25 Jun 2016 16:09:13 GMT","via":"1.1 vegur"}
Dados {"__v":0,"name":"SostenesFreitas","type":"Aluno","_id":"576eaca92087db11005aaed8"}

```

```
STATUS :202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-EgWAFUQnXM2qp8l1URvt4w\"","date":"Sat, 25 Jun 2016 16:11:46 GMT","via":"1.1 vegur"}
Dados {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6300163427717349377","electionId":"576451dfece94f32689e021d"}}

```



## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
  const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'DELETE'
  , path: '/api/pokemons/576eaca92087db11005aaed8'
  };

STATUS :204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 25 Jun 2016 16:14:54 GMT","via":"1.1 vegur"}
Dados 
```
