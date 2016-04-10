# Node.js - Aula 07 - Exercício

**User:** [matheusjkweber](https://github.com/matheusjkweber)

**Autor:** Matheus José Krumenauer Weber

**Date:** 1457290593512

## Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Foo(data) {
  this.data = data;
  this.on('foo:init', sendAlert);
  this.on('error', sendError);
  EventEmitter.call(this);
}

util.inherits(Foo, EventEmitter);

Foo.prototype.init = function () {  
  if(this.data.msg){
    this.emit('foo:init',sendAlert);
  }
  else {
    this.emit('error', new TypeError('Write an alert!'));
  }
};

function sendAlert(data) {
  console.log("Is working! Msg: "+this.data.msg);
}

function sendError(err) {
  throw err;
}

module.exports = Foo;
```

```js
'use strict';

const Foo = require('./exercicio_aula7_1.js');
const foo = new Foo({ msg : 'Message passed!'});

foo.init();

matheus@Math:~/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class6$ node exercicio_aula7_1_2.js 
Is working! Msg: Message passed!

```

## Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.
```js
'use strict';

const fs =  require('fs');

function readDirectory (path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path,function(err, res) {
      err ? reject(err) : resolve(res);
    });    
  });
}

module.exports = readDir;
```

```js
'use strict';

function promiseAll (arr) {
  return Promise.all(arr)
  .then(function success(res){
    return res;
    })
  .catch(function error(err) {
    throw err; 
  });
}

module.exports = promiseAll;
```

```js
'use strict';

const promiseAll = require('./exercicio_aula_7_2');
const readDirectory   = require('./exercicio_aula_7_2_2');

promiseAll([
  readDirectory('./folder1')
])
.then( res =>  console.log(res))
.catch(err => console.error(err));
```


## Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

### Find

```js
'use strict';

require('./config.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

let promise = PokemonModel.find({}).exec();
promise.then(success, err);

function success(data){
	console.log("Success! Msg: "+data);
}

function err(err){
	console.log("Error! Msg: "+err);
}
```
### Save

```js
'use strict';

require('./config.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}

const data = {name: 'Matheusmon'};

const pokemonSchema = new Schema(_schema);

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);



let promise = poke.save();
promise.then(success, err);

function success(data){
	console.log("Success! Msg: "+data);
}

function err(err){
	console.log("Error! Msg: "+err);
}

```

### Remove

```js
'use strict';

require('./config.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number,
  created_at: { type: Date, default: Date.now }
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

let promise = PokemonModel.remove({
   name: 'Matheusmon'
}).exec();

promise.then(success, err);

function success(data){
	console.log("Success! Msg: "+data);
}

function err(err){
	console.log("Error! Msg: "+err);
}

```
