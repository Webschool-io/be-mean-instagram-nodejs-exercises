# Node.js - Aula 03 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2015

##01.Porque quando requisitamos ao nosso servidor de Query String com o chrome ele executa 2 requisições sendo a última vazia?
-no Chrome são feitas duas requisições a outra é pelo favicon.


##02.Qual a diferença entre o get e o post?
-O get requisita algo ao servidor por exemplo podemos fazer uma busca de uma imagem ao servidor
através do método get, o método post por sua vez consegue inserir algo no servidor alterar com uma segurança maior do que o get, por exemplo usando o get para buscar clientes no banco de dados e usamos o post para cadastrar um novo.

##03.Crie um pokemon na nossa API com seu nome depois modifique seu nome pelo seu User do GitHub colocando aqui a resposta de cada passo a passo.
```
hc3@darkSide:~/Bemean/Node$ node cria_pokemon.js
STATUS: 201
HEADERS: {"server":"darkSide","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"79","etag":"W/\"4f-FQst1JWQGV9Isx6b9QMehg\"","date":"Fri, 20 Mar 2016 22:10:40 GMT","via":"1.1 vegur"}
Dados finalizados {"__v":0,"name":"Eliel das Virgens","type":"SmokeMon","_id":"582f8gt12f61701100d72sc1"}
```

```
hc3@darkSide:~/Bemean/Node$ node altera_pokemon.js
STATUS: 201
HEADERS: {"server":"darkSide","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"79","etag":"W/\"4f-FQst1JWQGV9Isx6b9QMehg\"","date":"Fri, 20 Mar 2016 22:10:40 GMT","via":"1.1 vegur"}
Dados finalizados {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6240448465881530369","electionId":"582f8gt12f61701100d72sc1"}}
```

##04.Depois daça o delete criando o script para tal, colocando aqui a respota.
```
hc3@darkSide:~/Bemean/Node$ node exclui_pokemon.js
STATUS: 204
HEADERS: {"server":"darkSide","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Fri, 20 Mar 2016 22:10:40 GMT","via":"1.1 vegur"}
Dados finalizados 
```

##05.Escolha uma API externa e crie um script para fazer um get nela mostrando o resultado com HTML
```
STATUS:  200
HEADERS:  {"content-type":"text/html","date":"Sun, 18 Jan 2016 19:25:00 GMT","connection":"close","transfer-encoding":"chunked"}
Dados finalizados:
<html><body><h1>Pokemons</h1><ul><li>Pokemon: Bulbassauro</li><li>Pokemon: Charmander</li><li>Pokemon: Squirtle</li><li>Pokemon: Pikachu</li></ul></body></html>
```