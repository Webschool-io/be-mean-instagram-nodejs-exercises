# Node.js - Aula 07 - Exercício

**user:** [sostenesfreitas](https://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas de Andrade

#1 - Crie um função que estenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

**eventInit.js**
```
'use strict';

const util = require('util');
const EventMitter = require('events');

function Pokemon(data){
    this.data = data
    this.on('init',init);
    EventMitter.call(this);

}

Pokemon.prototype.init = function () {
        this.emit('init',this.data);

};

util.inherits(Pokemon, EventMitter);

function init(data){
    console.log('Esse poke eh massa: ', data);

}

module.exports = Pokemon;
```
**app.js**
```
'use strict';

const Pokemon = require('./eventInit.js');
const p = require('./temp.js');
const poke = new Pokemon(p);

poke.init();
```
**Resultado**

```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Esse poke eh massa:
{
  "_id": ObjectId("564b1dad25337263280d0482"),
  "attack": 25,
  "created": "2013-11-03T15:05:41.294947",
  "defense": 50,
  "height": "6",
  "hp": 45,
  "name": "Kakuna",
  "speed": 35,
  "types": [
    "poison",
    "bug"
  
  ]
}
```
# 2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

**read-dir.js**
```
'use strict';

const fs = require('fs');

function leitor (path) {
	return new Promise((resolve, reject) => {
		fs.readdir(path, 'utf8', (err, res) => {
            err ? reject(err) : resolve(res);
				});
		});
}

module.exports = leitor;

```
**promisse-all.js**
```
'use strict';

function promiseAll (arr)  {
    return Promise.all(arr)
		.then( function success(res) {
            return res;

				} )
	.catch(function error(err) {
            throw err;

			});

}

module.exports = promiseAll;

```
**app.js**
```
'use strict';

const leitor = require('./read-file.js');
const promisse = require('./promisse-all.js')

promisse([
    leitor('./'),
    leitor('../nodejs')

])
.then(res => console.log(res))
.catch(err => console.log(err));

```

**Resultado**

```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[ 'app.js',
  'app1.js',
  'aula6.js',
  'aula7.js',
  'config.js',
  'eranca.js',
  'events.js',
  'model-poke-create.js',
  'model-poke-retrieve-01.js',
  'model-poke-retrieve-fields.js',
  'model-poke-retrieve.js',
  'model-poke-update.js',
  'modelpoke-retrieve-findById.js',
  'modelpoke-retrieve-findOnde.js',
  'modelpoke-retrieve-regex.js',
  'node_modules',
  'package.json',
  'read-dir.js',
  'reciver.js',
  'schema-validation-default.js',
  'schema01.js',
  'schema02.js',
  'schema03.js',
  'schema04.js',
  'schema07.js',
  'schema08.js',
  'user.js',
  'userPokemon.js'],
[ 'hello-querystring.js',
  'hello-world.js',
  'http-get-localhost-querystring.js',
  'http-request-post.js',
  'http-request.js',
  'index.xhtml',
  'node_modules',
  'server.js'  ] ]
```

# 3 - Os schemas do mongoose podem usar promises, em  alguns methods, de “crud”, list 3 methods que usam promise , sem chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

# 3 - sem `exec()`:
- `find`,
- `create`,
- `remove`
```
require('./config');
const Pokemon = require('./promisse-mongoose');
let promise = Pokemon.remove({name: /Seel/i});
promise.then(success);

function success (data) {
    console.log(data.result);
}

{ ok: 1, n: 1  }
```

# 3 - com `exec()`:
- `find`,
- `findOne`,
- `update`
```
'use strict';

const pokemon = require('./promisse-mongoose');

let promisse = pokemon.findOne({}).exec();
promisse.then( data => {
    success(data);

		} )

let success = data => {
    console.log(data);

}


{ _id: 564b1dae25337263280d048a,
  attack: 35,
  created: '2013-11-03T15:05:41.457865',
  defense: 30,
  height: 13,
  hp: 30,
  name: 'Gastly',
  speed: 80,
  types: [ 'poison', 'ghost'  ]  }

```




