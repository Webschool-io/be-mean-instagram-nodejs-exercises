# Node.js - Aula 03 - Exercício
**Autor:** Rafael Crispim Ignácio

**Data:** 1451440020307

## Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?
Quando executamos uma requisição através do navegador Google Chrome, o mesmo efetua uma requisição adicional buscando pela imagem favicon.ico.

## Qual a DIFERENÇA entre o GET e o POST?
As principais diferenças entre GET e POST são:
- Visibilidade

Enquanto uma requisição GET é enviada no formato de string anexada a URL uma requisição POST é anexada ao corpo do da requisição HTTP.
- Tamanho

As requisições GET, por serem em formato de String, estão limitadas a 255 caracteres já via POST este limite não existe.
- Dados

As requisições GET só podem transitar no padrão ASCII. No POST podemos utilizar do formato UCS, para isto basta utilizar o `enctype` igual a `multipart/form-data`. Além desta questão nas requisições GET podemos enviar informações no formato de texto enquanto no POST também podemos enviar dados binários.

É importante ressaltar que as duas formas são essenciais para enviarmos informações através do protocolo HTTP, cada qual tem a sua finalidade e objetivo.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.
### CREATE

```js
node nodejs/exercicio.js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"90","etag":"W/\"5a-JSlAXH/uFT9RSDVuDrebeQ\"","date":"Wed, 30 Dec 2015 01:25:34 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Rafael Crispim Ignácio","type":"Aluno","_id":"5683328e4bcde71100eaa9ee"}
```

### UPDATE

```js
node nodejs/exercicio.js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-lHgQ2Bma/0EhCuM+Yp8YVA\"","date":"Wed, 30 Dec 2015 01:26:47 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6233882208210255873","electionId":"565e25d106dca622271891c4"}}
```

## Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.

```js
node nodejs/exercicio.js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Wed, 30 Dec 2015 01:27:37 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.
- API

[http://pokeapi.co](http://pokeapi.co)

```js
// URL -> http://pokeapi.co/api/v1/pokemon/50
node nodejs/exercicio.js
STATUS: 200
HEADERS: {"server":"nginx/1.1.19","date":"Wed, 30 Dec 2015 01:44:03 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Accept","x-frame-options":"SAMEORIGIN","cache-control":"s-maxage=360, max-age=360"}
Resposta:  {"abilities": [{"name": "sand-veil", "resource_uri": "/api/v1/ability/8/"}, {"name": "arena-trap", "resource_uri": "/api/v1/ability/71/"}, {"name": "sand-force", "resource_uri": "/api/v1/ability/159/"}], "attack": 55, "catch_rate": 0, "created": "2013-11-03T15:05:41.365518", "defense": 25, "descriptions": [{"name": "diglett_gen_1", "resource_uri": "/api/v1/description/801/"}, {"name": "diglett_gen_1", "resource_uri": "/api/v1/description/798/"}, {"name": "diglett_gen_1", "resource_uri": "/api/v1/description/799/"}, {"name": "diglett_gen_1", "resource_uri": "/api/v1/description/800/"}, {"name": "diglett_gen_1", "resource_uri": "/api/v1/description/802/"}, {"name": "diglett_gen_2", "resource_uri": "/api/v1/description/804/"}, {"name": "diglett_gen_3", "resource_uri": "/api/v1/description/805/"}, {"name": "diglett_gen_3", "resource_uri": "/api/v1/description/806/"}, {"name": "diglett_gen_3", "resource_uri": "/api/v1/description/807/"}, {"name": "diglett_gen_6", "resource_uri": "/api/v1/description/812/"}, {"name": "diglett_gen_6", "resource_uri": "/api/v1/description/813/"}, {"name": "diglett_gen_4", "resource_uri": "/api/v1/description/808/"}, {"name": "diglett_gen_5", "resource_uri": "/api/v1/description/811/"}, {"name": "diglett_gen_4", "resource_uri": "/api/v1/description/809/"}, {"name": "diglett_gen_2", "resource_uri": "/api/v1/description/803/"}, {"name": "diglett_gen_4", "resource_uri": "/api/v1/description/810/"}], "egg_cycles": 0, "egg_groups": [{"name": "Ground", "resource_uri": "/api/v1/egg/5/"}], "ev_yield": "", "evolutions": [{"level": 26, "method": "level_up", "resource_uri": "/api/v1/pokemon/51/", "to": "Dugtrio"}], "exp": 53, "growth_rate": "", "happiness": 0, "height": "2", "hp": 10, "male_female_ratio": "", "modified": "2013-11-23T13:13:25.213302", "moves": [{"learn_type": "level up", "level": 18, "name": "Bulldoze", "resource_uri": "/api/v1/move/523/"}, {"learn_type": "egg move", "name": "Final-gambit", "resource_uri": "/api/v1/move/515/"}, {"learn_type": "machine", "name": "Echoed-voice", "resource_uri": "/api/v1/move/497/"}, {"learn_type": "machine", "name": "Round", "resource_uri": "/api/v1/move/496/"}, {"learn_type": "machine", "name": "Hone-claws", "resource_uri": "/api/v1/move/468/"}, {"learn_type": "egg move", "name": "Memento", "resource_uri": "/api/v1/move/262/"}, {"learn_type": "egg move", "name": "Headbutt", "resource_uri": "/api/v1/move/29/"}, {"learn_type": "egg move", "name": "Reversal", "resource_uri": "/api/v1/move/179/"}, {"learn_type": "machine", "name": "Stealth-rock", "resource_uri": "/api/v1/move/446/"}, {"learn_type": "machine", "name": "Captivate", "resource_uri": "/api/v1/move/445/"}, {"learn_type": "level up", "level": 29, "name": "Mud-bomb", "resource_uri": "/api/v1/move/426/"}, {"learn_type": "machine", "name": "Shadow-claw", "resource_uri": "/api/v1/move/421/"}, {"learn_type": "level up", "level": 26, "name": "Earth-power", "resource_uri": "/api/v1/move/414/"}, {"learn_type": "level up", "level": 23, "name": "Sucker-punch", "resource_uri": "/api/v1/move/389/"}, {"learn_type": "machine", "name": "Natural-gift", "resource_uri": "/api/v1/move/363/"}, {"learn_type": "level up", "level": 7, "name": "Astonish", "resource_uri": "/api/v1/move/310/"}, {"learn_type": "machine", "name": "Sandstorm", "resource_uri": "/api/v1/move/201/"}, {"learn_type": "level up", "level": 21, "name": "Fury-swipes", "resource_uri": "/api/v1/move/154/"}, {"learn_type": "machine", "name": "Aerial-ace", "resource_uri": "/api/v1/move/332/"}, {"learn_type": "machine", "name": "Rock-tomb", "resource_uri": "/api/v1/move/317/"}, {"learn_type": "machine", "name": "Secret-power", "resource_uri": "/api/v1/move/290/"}, {"learn_type": "machine", "name": "Facade", "resource_uri": "/api/v1/move/263/"}, {"learn_type": "egg move", "name": "Uproar", "resource_uri": "/api/v1/move/253/"}, {"learn_type": "egg move", "name": "Beat-up", "resource_uri": "/api/v1/move/251/"}, {"learn_type": "machine", "name": "Rock-smash", "resource_uri": "/api/v1/move/249/"}, {"learn_type": "egg move", "name": "Ancientpower", "resource_uri": "/api/v1/move/246/"}, {"learn_type": "machine", "name": "Sunny-day", "resource_uri": "/api/v1/move/241/"}, {"learn_type": "machine", "name": "Hidden-power", "resource_uri": "/api/v1/move/237/"}, {"learn_type": "egg move", "name": "Pursuit", "resource_uri": "/api/v1/move/228/"}, {"learn_type": "level up", "level": 9, "name": "Magnitude", "resource_uri": "/api/v1/move/222/"}, {"learn_type": "machine", "name": "Frustration", "resource_uri": "/api/v1/move/218/"}, {"learn_type": "machine", "name": "Return", "resource_uri": "/api/v1/move/216/"}, {"learn_type": "machine", "name": "Sleep-talk", "resource_uri": "/api/v1/move/214/"}, {"learn_type": "machine", "name": "Attract", "resource_uri": "/api/v1/move/213/"}, {"learn_type": "machine", "name": "Swagger", "resource_uri": "/api/v1/move/207/"}, {"learn_type": "machine", "name": "Endure", "resource_uri": "/api/v1/move/203/"}, {"learn_type": "machine", "name": "Mud-slap", "resource_uri": "/api/v1/move/189/"}, {"learn_type": "machine", "name": "Sludge-bomb", "resource_uri": "/api/v1/move/188/"}, {"learn_type": "egg move", "name": "Faint-attack", "resource_uri": "/api/v1/move/185/"}, {"learn_type": "machine", "name": "Protect", "resource_uri": "/api/v1/move/182/"}, {"learn_type": "machine", "name": "Curse", "resource_uri": "/api/v1/move/174/"}, {"learn_type": "machine", "name": "Snore", "resource_uri": "/api/v1/move/173/"}, {"learn_type": "machine", "name": "Thief", "resource_uri": "/api/v1/move/168/"}, {"learn_type": "egg move", "name": "Screech", "resource_uri": "/api/v1/move/103/"}, {"learn_type": "machine", "name": "Cut", "resource_uri": "/api/v1/move/15/"}, {"learn_type": "machine", "name": "Substitute", "resource_uri": "/api/v1/move/164/"}, {"learn_type": "level up", "level": 31, "name": "Slash", "resource_uri": "/api/v1/move/163/"}, {"learn_type": "machine", "name": "Rock-slide", "resource_uri": "/api/v1/move/157/"}, {"learn_type": "machine", "name": "Rest", "resource_uri": "/api/v1/move/156/"}, {"learn_type": "machine", "name": "Bide", "resource_uri": "/api/v1/move/117/"}, {"learn_type": "machine", "name": "Double-team", "resource_uri": "/api/v1/move/104/"}, {"learn_type": "machine", "name": "Mimic", "resource_uri": "/api/v1/move/102/"}, {"learn_type": "machine", "name": "Rage", "resource_uri": "/api/v1/move/99/"}, {"learn_type": "machine", "name": "Toxic", "resource_uri": "/api/v1/move/92/"}, {"learn_type": "level up", "level": 19, "name": "Dig", "resource_uri": "/api/v1/move/91/"}, {"learn_type": "machine", "name": "Fissure", "resource_uri": "/api/v1/move/90/"}, {"learn_type": "level up", "level": 40, "name": "Earthquake", "resource_uri": "/api/v1/move/89/"}, {"learn_type": "level up", "level": 15, "name": "Growl", "resource_uri": "/api/v1/move/45/"}, {"learn_type": "machine", "name": "Double-edge", "resource_uri": "/api/v1/move/38/"}, {"learn_type": "machine", "name": "Take-down", "resource_uri": "/api/v1/move/36/"}, {"learn_type": "machine", "name": "Body-slam", "resource_uri": "/api/v1/move/34/"}, {"learn_type": "level up", "level": 24, "name": "Sand-attack", "resource_uri": "/api/v1/move/28/"}, {"learn_type": "level up", "level": 1, "name": "Scratch", "resource_uri": "/api/v1/move/10/"}], "name": "Diglett", "national_id": 50, "pkdx_id": 50, "resource_uri": "/api/v1/pokemon/50/", "sp_atk": 35, "sp_def": 45, "species": "", "speed": 95, "sprites": [{"name": "diglett", "resource_uri": "/api/v1/sprite/51/"}], "total": 0, "types": [{"name": "ground", "resource_uri": "/api/v1/type/5/"}], "weight": "8"}
```
