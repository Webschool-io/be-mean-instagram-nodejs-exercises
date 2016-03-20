# Node.js - Aula 06 - Exercício
**user:** [hc3](https://github.com/hc3)
**autor:** Eliel das Virgens
**date:** 20/03/2016

##01.Crie um schema com data tipo explicado , inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão , criar especificamente:
para String : enum , match , maxlength e minlength
para Number : max e min
```
'use strict'

var mongoose = require('mongoose');

//cria um objeto Schema 
const Schema = mongoose.Schema;


//criação do JSON
const _schema = {
  name:{type:String,math:/^a/i},
  type:{type:String,enum:['afegan','prensada','natural','gringa']},
  descricao:{type:String,maxlength:20},
  natureza:{type:String,minlength:2},
  codigo:{type:Number,min:4},
  barra:{type:Number,max:10}
};

//cria schema a partir do JSON
const pokemonSchema = new Schema(_schema);

const data = {
  name:'Psychomon',
  type:'natural',
  descricao:'musico',
  natureza:'boa',
  codigo:5,
  barra:1,
};
//converte schema em model 
var Model = mongoose.model('pokemons',pokemonSchema);

var poke = new Model(data);

poke.save(function(err,data) {
  if(err) return console.log('ERRO: ',err);
  console.log('Inseriu: ',data);
})

//export schema
module.exports = pokemonSchema;
```
##RESULTADO OK
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
conectou no banco: mongodb://localhost/be-mean-instagram
connection open!
Inseriu:  { _id: 56ef2153ab9e9ad43fe249f0,
  barra: 1,
  codigo: 5,
  natureza: 'boa',
  descricao: 'musico',
  type: 'natural',
  name: 'Psychomon',
  __v: 0 }


```
##RESULTADO FALSE
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors: 
   { barra: 
      { [ValidatorError: Path `barra` (9999999999999) is more than maximum allowed value (10).]
        message: 'Path `barra` (9999999999999) is more than maximum allowed value (10).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'max',
        path: 'barra',
        value: 9999999999999 },
     codigo: 
      { [ValidatorError: Path `codigo` (1) is less than minimum allowed value (4).]
        message: 'Path `codigo` (1) is less than minimum allowed value (4).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'min',
        path: 'codigo',
        value: 1 },
     natureza: 
      { [ValidatorError: Path `natureza` (`a`) is shorter than the minimum allowed length (2).]
        message: 'Path `natureza` (`a`) is shorter than the minimum allowed length (2).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'minlength',
        path: 'natureza',
        value: 'a' },
     descricao: 
      { [ValidatorError: Path `descricao` (`coisa ruim barro sujo lombra feia e pa tlg coisa barril`) is longer than the maximum allowed length (20).]
        message: 'Path `descricao` (`coisa ruim barro sujo lombra feia e pa tlg coisa barril`) is longer than the maximum allowed length (20).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'maxlength',
        path: 'descricao',
        value: 'coisa ruim barro sujo lombra feia e pa tlg coisa barril' },
     type: 
      { [ValidatorError: `xd` is not a valid enum value for path `type`.]
        message: '`xd` is not a valid enum value for path `type`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'type',
        value: 'xd' } } }

```
##02.Cadastre 3 pokemons de uma vez só
```
use strict'

var mongoose = require('mongoose');

//cria um objeto Schema 
const Schema = mongoose.Schema;


//criação do JSON
const _schema = {
  name:String
};

//cria schema a partir do JSON
const pokemonSchema = new Schema(_schema);

let dataModel = [
  {name:'MarceloD2'},{name:'Black Alien'},{name:'Bnegao'}
  ];
//converte schema em model 
var Model = mongoose.model('pokemons',pokemonSchema);

//var poke = new Model(data);

Model.create(dataModel,function(err,data) {
  if(err) return console.log('ERRO: ',err);
  console.log('Inseriu: ',data);
})

//export schema
module.exports = pokemonSchema;
```
##RESULTADO
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
conectou no banco: mongodb://localhost/be-mean-instagram
connection open!
Inseriu:  [ { _id: 56ef23f92e87ec5042cf90a5, name: 'MarceloD2', __v: 0 },
  { _id: 56ef23f92e87ec5042cf90a6, name: 'Black Alien', __v: 0 },
  { _id: 56ef23f92e87ec5042cf90a7, name: 'Bnegao', __v: 0 } ]


```
##03.Busque todos os pokemons com attack > 50 e height> 0.5
```
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:String
};

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons',pokemonSchema);

const query = { 
  $and:[{attack:{$gt:50}},{height:{$gt:0.5}}] };

pokemonModel.find(query,function(err,data){
  if(err) return console.log('ERRO: ',err);
  return console.log('Buscou: ',data);
});

module.exports = pokemonModel;
```
##RESULTADO
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
conectou no banco: mongodb://localhost/be-mean-instagram
connection open!
Buscou:  [ { __v: 0,
    _id: 56eee0f1527cda4b35019961,
    height: 1.2,
    defense: 230,
    attack: 300,
    type: 'musico',
    description: 'Pokemon da musica',
    name: 'RaulMon' } ]


```

##04.Altere, inserindo, o pokemon Nerdmon com attack = 49 e com os valores dos outros campos a sua escolha
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
conectou no banco: mongodb://localhost/be-mean-instagram
connection open!
Buscou:  { ok: 1, n: 1 }

```

```
darkSide(mongod-2.4.9) be-mean-instagram> db.pokemons.find({name:'NerdMon'})
{
  "name": "NerdMon",
  "description": "Pokemon da musica",
  "type": "musico",
  "attack": 49,
  "defense": 230,
  "height": 1.2,
  "_id": ObjectId("56eee0f1527cda4b35019961"),
  "__v": 0
}
Fetched 1 record(s) in 2ms

```

##05.Remova todos os pokemons com attack > 50.
```
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:String,
  description:String,
  type:String,
  attack:Number,
  defense:Number,
  height:Number
};

const PokemonSchema = new Schema(_schema);
const pokemon = mongoose.model('pokemons',PokemonSchema);

const query = {attack:{$gt: 50}};

pokemon.remove(query,function(err,data) {
  if(err) return console.log('ERRO: ',err);
  return console.log('Removeu: ',data);
});
```

```
conectou no banco: mongodb://localhost/be-mean-instagram
connection open!
Removeu:  { result: { ok: 1, n: 462 }, connection: null }
```

##COUNT()
```
darkSide(mongod-2.4.9) be-mean-instagram> db.pokemons.count()
610
darkSide(mongod-2.4.9) be-mean-instagram> db.pokemons.count()
148
```