# NodeJS - Aula 01 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1457214015206

# Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?

Pois em cada requisição, o Chrome também faz a solicitação de um _favicon_.

# Qual a diferença entre o GET e o POST?

Os dois são usados para fazer requisições no servidor, com a principal diferença entre os dois, o `GET` passa os parametros pela url, já o `POST` manda os parametros encapsuladod junto ao corpo da requisição.
As requisições do tipo `GET` são mais para leitura, e as do tipo `POST` são usadas para fazer alterações.

# Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.

### Cadastrando com o meu nome
```js
'use strict';

const http = require('http'),
      querystring = require('querystring');


const postData = querystring.stringify({

    name: 'Igor Luíz',
    type: 'Student'
});


const options = {

    host: 'webschool-io.herokuapp.com',
    method: 'POST',
    path: '/api/pokemons',
    headers: {
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Contetn-length': postData.length
    }
}


function callback(res) {

    let data = '';
    res.setEncoding('utf8');

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`Efetuado cadastro: ${data}`);
    });
}

const req = http.request(options, callback);


req.write(postData);
req.end();
```

### Saída no terminal
```js
➜  class-3 git:(master) ✗ node create-pokemon.js 
Efetuado cadastro: {"__v":0,"name":"Igor Luíz","type":"Student","_id":"56db4f19204b6b1100a5212e"}
```

### Modificando com o meu user do github
```js
'use strict';

const http = require('http'),
      querystring = require('querystring');


const postData = querystring.stringify({

    name: 'Halfeld',
    type: 'Student'
});


const options = {

    host: 'webschool-io.herokuapp.com',
    method: 'PUT',
    path: '/api/pokemons/56db4f19204b6b1100a5212e',
    headers: {
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Contetn-length': postData.length
    }
}


function callback(res) {

    let data = '';
    res.setEncoding('utf8');

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(`Atualizado cadastro: ${data}`);
    });
}

const req = http.request(options, callback);


req.write(postData);
req.end();
```

### Saída no terminal
```js
➜  class-3 git:(master) ✗ node update-pokemon.js 
Efetuado cadastro: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6258683737379176449","electionId":"565e25d106dca622271891c4"}}
```

# Depois faça o delete, criando o script para tal, colocando aqui a resposta.

```js

'use strict';

const http = require('http'),
      querystring = require('querystring');


const postData = querystring.stringify({

    name: 'Halfeld',
    type: 'Student'
});


const options = {

    host: 'webschool-io.herokuapp.com',
    method: 'DELETE',
    path: '/api/pokemons/56db4f19204b6b1100a5212e',
    headers: {
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Contetn-length': postData.length
    }
}


function callback(res) {

    res.setEncoding('utf8');

    res.on('end', () => {
        console.log('Cadastro removido');
    });
}

const req = http.request(options, callback);


req.write(postData);
req.end();
```

# Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado em HTML.

### Código
```js
'use strict';


const http = require('http');


const options = {

    host: 'pokeapi.co',
    method: "GET",
    path: '/api/v1/pokemon/',
    headers: {
        'Content-Type': 'application/json'
    }
};


function callback(res) {

    res.setEncoding('utf8');

    res.on('data', chunck => {
        console.log(chunck);
    });

    res.on('end', () => {
        console.log('Finalizado');
    });
}


const req = http.request(options, callback);
req.end();
```

### Saída
```js
➜  class-3 git:(master) ✗ node api-pokemon-request.js
{"meta": {"limit": 1, "next": "/api/v1/pokemon/?limit=1&offset=1", "offset": 0, "previous": null, "total_count": 778}, "objects": [{"abilities": [{"name": "run-away", "resource_uri": "/api/v1/ability/50/"}, {"name": "hustle", "resource_uri": "/api/v1/ability/55/"}, {"name": "guts", "resource_uri": "/api/v1/ability/62/"}], "attack": 56, "catch_rate": 0, "created": "2013-11-03T15:05:41.305777", "defense": 35, "descriptions": [{"name": "rattata_gen_1", "resource_uri": "/api/v1/description/290/"}, {"name": "rattata_gen_1", "resource_uri": "/api/v1/description/291/"}, {"name": "rattata_gen_1", "resource_uri": "/api/v1/description/292/"}, {"name": "rattata_gen_1", "resource_uri": "/api/v1/description/288/"}, {"name": "rattata_gen_1", "resource_uri": "/api/v1/description/289/"}, {"name": "rattata_gen_2", "resource_uri": "/api/v1/description/293/"}, {"name": "rattata_gen_2", "resource_uri": "/api/v1/description/294/"}, {"name": "rattata_gen_3", "resource_uri": "/api/v1/description/295/"}, {"name": "rattata_gen_3", "resource_uri": "/api/v1/description/296/"}, {"name": "rattata_gen_4", "resource_uri": "/api/v1/description/300/"}, {"name": "rattata_gen_3", "resource_uri": "/api/v1/des
cription/297/"}, {"name": "rattata_gen_4", "resource_uri": "/api/v1/description/298/"}, {"name": "rattata_gen_4", "resource_uri": "/api/v1/description/299/"}, {"name": "rattata_gen_5", "resource_uri": "/api/v1/description/301/"}], "egg_cycles": 0, "egg_groups": [{"name": "Ground", "resource_uri": "/api/v1/egg/5/"}], "ev_yield": "", "evolutions": [{"level": 20, "method": "level_up", "resource_uri": "/api/v1/pokemon/20/", "to": "Raticate"}], "exp": 51, "growth_rate": "", "happiness": 0, "height": "3", "hp": 30, "male_female_ratio": "", "modified": "2013-11-23T13:13:24.187255", "moves": [{"learn_type": "tutor", "name": "Covet", "resource_uri": "/api/v1/move/343/"}, {"learn_type": "machine", "name": "Wild-charge", "resource_uri": "/api/v1/move/528/"}, {"learn_type": "machine", "name": "Work-up", "resource_uri": "/api/v1/move/526/"}, {"learn_type": "egg move", "name": "Final-gambit", "resource_uri": "/api/v1/move/515/"}, {"learn_type": "machine", "name": "Retaliate", "resource_uri": "/api/v1/move/514/"}, {"learn_type": "machine", "name": "Round", "resource_uri": "/api/v1/move/496/"}, {"learn_type": "egg move", "name": "Revenge", "resource_uri": "/api/v1/move/279/"}, {"learn_type": "tutor", "name": "Zen-headbutt", "resource_uri": "/api/v1/move/428/"}, {"learn_type": "machine", "name": "Charge-beam", "resource_uri": "/api/v1/move/451/"}, {"learn_type": "machine", "name": "Grass-knot", "resource_uri": "/api/v1/move/447/"}, {"learn_type": "machine", "name": "Captivate", "resource_uri": "/api/v1/move/445/"}, {"learn_type": "level up", "level": 19, "name": "Sucker-punch", "resource_uri": "/api/v1/move/389/"}, {"learn_type": "egg move", "name": "Last-resort", "resource_uri": "/api/v1/move/387/"}, {"learn_type": "egg move", "name": "Me-first", "resource_uri": "/api/v1/move/382/"}, {"learn_type": "level up", "level": 25, "name": "Assurance", "resource_uri": "/api/v1/move/372/"}, {"learn_type": "machine", "name": "U-turn", "resource_uri": "/api/v1/move/369/"}, {"learn_type": "machine", "name": "Pluck", "resource_uri": "/api/v1/move/365/"}, {"learn_type": "machine", "name": "Natural-gift", "resource_uri": "/api/v1/move/363/"}, {"learn_type": "level up", "level": 22, "name": "Crunch", "resource_uri": "/api/v1/move/242/"}, {"learn_type": "tutor", "name": "Thunder-wave", "resource_uri": "/api/v1/move/86/"}, {"learn_type": "machine", "name": "Shock-wave", "resource_uri": "/api/v1/move/351/"}, {"learn_type": "machine", "name": "Secret-power", "resource_uri": "/api/v1/move/290/"}, {"learn_type": "level up", "level": 41, "name": "Endeavor", "resource_uri": "/api/v1/move/283/"}, {"learn_type": "machine", "name": "Taunt", "resource_uri": "/api/v1/move/269/"}, {"learn_type": "machine", "name": "Facade", "resource_uri": "/api/v1/move/263/"}, {"learn_type": "egg move", "name": "Uproar", "resource_uri": "/api/v1/move/253/"}, {"learn_type": "machine", "name": "Rain-dance", "resource_uri": "/api/v1/move/240/"}, {"learn_type": "machine", "name": "Ice-beam", "resource_uri": "/api/v1/move/58/"}, {"learn_type": "machine", "name": "Cut", "resource_uri": "/api/v1/move/15/"}, {"learn_type": "machine", "name": "Rock-smash", "resource_uri": "/api/v1/move/249/"}, {"learn_type": "machine", "name": "Shadow-ball", "resource_uri": "/api/v1/move/247/"}, {"learn_type": "machine", "name": "Sunny-day", "resource_uri": "/api/v1/move/241/"}, {"learn_type": "machine", "name": "Hidden-power", "resource_uri": "/api/v1/move/237/"}, {"learn_type": "machine", "name": "Iron-tail", "resource_uri": "/api/v1/move/231/"}, {"learn_type": "level up", "level": 27, "name": "Pursuit", "resource_uri": "/api/v1/move/228/"}, {"learn_type": "machine", "name": "Frustration", "resource_uri": "/api/v1/move/218/"}, {"learn_type": "machine", "name": "Return", "resource_uri": "/api/v1/move/216/"}, {"learn_type": "machine", "name": "Sleep-talk", "resource_uri": "/api/v1/move/214/"}, {"learn_type": "machine", "name": "Attract", "resource_uri": "/api/v1/move/213/"}, {"learn_type": "machine", "name": "Swagger", "resource_uri": "/api/v1/move/207/"}, {"learn_type": "machine", "name": "Endure", "resource_uri": "/api/v1/move/203/"}, {"learn_type": "machine", "name": "Icy-wind", "resource_uri": "/api/v1/move/196/"}, {"learn_type": "machine", "name": "Mud-slap", "resource_uri": "/api/v1/move/189/"}, {"learn_type": "machine", "name": "Protect", "resource_uri": "/api/v1/move/182/"}, {"learn_type": "egg move", "name": "Reversal", "resource_uri": "/api/v1/move/179/"}, {"learn_type": "machine", "name": "Curse", "resource_uri": "/api/v1/move/174/"}, {"learn_type": "machine", "name": "Snore", "resource_uri": "/api/v1/move/173/"}, {"learn_type": "egg move", "name": "Flame-wheel", "resource_uri": "/api/v1/move/172/"}, {"learn_type": "machine", "name": "Thief", "resource_uri": "/api/v1/move/168/"}, {"learn_type": "egg move", "name": "Fury-swipes", "resource_uri": "/api/v1/move/154/"}, {"learn_type": "machine", "name": "Defense-curl", "resource_uri": "/api/v1/move/111/"}, {"learn_type": "egg move", "name": "Screech", "resource_uri": "/api/v1/move/103/"}, {"learn_type": "egg move", "name": "Counter", "resource_uri": "/api/v1/move/68/"}, {"learn_type": "egg move", "name": "Bite", "resource_uri": "/api/v1/move/44/"}, {"learn_type": "machine", "name": "Headbutt", "resource_uri": "/api/v1/move/29/"}, {"learn_type": "machine", "name": "Substitute", "resource_uri": "/api/v1/move/164/"}, {"learn_type": "level up", "level": 34, "name": "Super-fang", "resource_uri": "/api/v1/move/162/"}, {"learn_type": "level up", "level": 14, "name": "Hyper-fang", "resource_uri": "/api/v1/move/158/"}, {"learn_type": "machine", "name": "Rest", "resource_uri": "/api/v1/move/156/"}, {"learn_type": "machine", "name": "Skull-bash", "resource_uri": "/api/v1/move/130/"}, {"learn_type": "machine", "name": "Swift", "resource_uri": "/api/v1/move/129/"}, {"learn_type": "machine", "name": "Bide", "resource_uri": "/api/v1/move/117/"}, {"learn_type": "level up", "level": 23, "name": "Focus-energy", "resource_uri": "/api/v1/move/116/"}, {"learn_type": "machine", "name": "Double-team", "resource_uri": "/api/v1/move/104/"}, {"learn_type": "machine", "name": "Mimic", "resource_uri": "/api/v1/move/102/"}, {"learn_type": "machine", "name": "Rage", "resource_uri": "/api/v1/move/99/"}, {"learn_type": "level up", "level": 7, "name": "Quick-attack", "resource_uri": "/api/v1/move/98/"}, {"learn_type": "machine", "name": "Toxic", "resource_uri": "/api/v1/move/92/"}, {"learn_type": "machine", "name": "Dig", "resource_uri": "/api/v1/move/91/"}, {"learn_type": "machine", "name": "Thunder", "resource_uri": "/api/v1/move/87/"}, {"learn_type": "machine", "name": "Thunderbolt", "resource_uri": "/api/v1/move/85/"}, {"learn_type": "machine", "name": "Bubblebeam", "resource_uri": "/api/v1/move/61/"}, {"learn_typ
e": "machine", "name": "Blizzard", "resource_uri": "/api/v1/move/59/"}, {"learn_type": "machine", "name": "Water-gun", "resource_uri": "/api/v1/move/55/"}, {"learn_type": "level up", "level": 1, "name": "Tail-whip", "resource_uri": "/api/v1/move/39/"}, {"learn_type": "machine", "name": "Double-edge", "resource_uri": "/api/v1/move/38/"}, {"learn_type": "machine", "name": "Take-down", "resource_uri": "/api/v1/move/36/"}, {"learn_type": "machine", "name": "Body-slam", "resource_uri": "/api/v1/move/34/"}, {"learn_type": "level up", "level": 1, "name": "Tackle", "resource_uri": "/api/v1/move/33/"}], "name": "Rattata", "national_id": 19, "pkdx_id": 19, "resource_uri": "/api/v1/pokemon/19/", "sp_atk": 25, "sp_def": 35, "species": "", "speed": 72, "sprites": [{"name": "rattata", "resource_uri": "/api/v1/sprite/20/"}], "total": 0, "types": [{"name": "normal", "resource_uri": "/api/v1/type/1/"}], "weight": "35"}]}
Finalizado
```
