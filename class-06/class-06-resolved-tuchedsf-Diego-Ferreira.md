# Node.js - Aula 06 - Exercício

**user:** [Diego Ferreira](https://github.com/tuchedsf)

**autor:** Diego Ferreira 

## 1- Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:
* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`
* 1.2.  para Number: `max` e `min`


```js

'use strict';

const mongoose = required('mongoose');

const _schema = {
  name : {type : String, required: true} ,
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required: true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);

const PokemonModel = mongoose.model('pokemons', PokemonSchema);


//cadastro dados corretos
const dadosCorretos = {
  name : "pokebola",
  description: "tipo de pokemon que guarda outros pokemons",
  attack: 40,
  defense : 100,
  height : 0.5,
  cor: "Red"
}

const pokemon = new PokemonModel(dadosCorretos);

pokemon.save(function(err,data){
  if (err) return console.log("Erro de validação: " + err);
  return console.log("Dados ok! Validção OK: " + data);
});
```

// Saida Console
```
Dados ok! Validção OK: { created_at: Tue May 03 2016 21:56:53 GMT-0300 (BRT),
  _id: 572948d5d4c92cc2d56ef17f,
  cor: 'Red',
  height: 5,
  defense: 100,
  attack: 40,
  description: 'tipo de pokemon que guarda outros pokemons',
  name: 'pokebola',
  __v: 0 }
```

```js 
//cadastro dados errados

const dadosErrados = {
  name : "",
  description: "",
  attack: 20,
  defense : "grande",
  height : 0.5,
  cor: "Yellow"
}
const pokemon = new PokemonModel(dadosErrados);

pokemon.save(function(err,data){
  if (err) return console.log("Erro de validação: " + err);
  return console.log("Dados ok! Validção OK: " + data);
});

```

// Saida Console:

```
Erro de validação: 
  ValidationError: 
    CastError: Cast to Number failed for value "grande" at path "defense", 
    `Yellow` is not a valid enum value for path `cor`.,
    Path `attack` (20) is less than minimum allowed value (40)., 
    Path `description` (``) is shorter than the minimum allowed length (5)., 
    Path `name` is required.
```

## 2- Cadastre 3 pokemons **de uma só vez**:
```js

'use strict';

const mongoose = required('mongoose');

const _schema = {
  name : {type : String, required: true} ,
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required: true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);

const PokemonModel = mongoose.model('pokemons', PokemonSchema);

const array = [
  {
    name : "Yoytubemon",
    description: "engana os pokes projetando videos na tela",
    attack: 95,
    defense : 20,
    height : 1,
    cor: "Red"
  },
  {
    name : "Gramosauro",
    description: "Pokemon especialista em grama",
    attack: 40,
    defense : 30,
    height : 0.4,
    cor: "Green"
  },
  {
    name : "SublimeTextmon",
    description: "Pokemon especialista em grama",
    attack: 82,
    defense : 60,
    height : 0.5,
    cor: "Blue"
  }
]

PokemonModel.create(array, function(err,data){
   if (err) return console.log("Erro: " + err);
  return console.log("Dados: " + data);
});
```

// Saida Console:

```
Dados: { created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  _id: 57294bdfb6de032bd6811515,
  cor: 'Red',
  height: 1,
  defense: 20,
  attack: 95,
  description: 'engana os pokes projetando videos na tela',
  name: 'Yoytubemon',
  __v: 0 },{ created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  _id: 57294bdfb6de032bd6811516,
  cor: 'Green',
  height: 0.4,
  defense: 30,
  attack: 40,
  description: 'Pokemon especialista em grama',
  name: 'Gramosauro',
  __v: 0 },{ created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  _id: 57294bdfb6de032bd6811517,
  cor: 'Blue',
  height: 0.5,
  defense: 60,
  attack: 82,
  description: 'Pokemon especialista em grama',
  name: 'SublimeTextmon',
  __v: 0 }
```

## 3- Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

```js

'use strict';

const mongoose = require('mongoose');

const _schema = {
  name : {type : String, required: true} ,
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required: true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);
const PokemonModel = mongoose.model('pokemons', PokemonSchema);
const query = { $and:[ { attack: { $gt: 50 } }, { height: { $gt: 0.5 } } ] }

PokemonModel.find(query,function(err,data){
  if (err) return console.log("Erro " + err);
  return console.log("Dados " + data);
});

``` 

// Saida Console:
```
Dados { created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  __v: 0,
  cor: 'Red',
  height: 1,
  defense: 20,
  attack: 95,
  description: 'engana os pokes projetando videos na tela',
  name: 'Yoytubemon',
  _id: 57294bdfb6de032bd6811515 }
```

## 4 - Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```js
'use strict';

const mongoose = require('mongoose');

const _schema = {
  name : {type : String, required: true} ,
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required: true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);
const PokemonModel = mongoose.model('pokemons', PokemonSchema);
const query = {name: /nerdmon/i}

const mod = {$setOnInsert: {
    name : "Nerdmon",
    description: "Pokemon que altera inserindo",
    attack: 40,
    defense : 40,
    height : 0.7,
    cor: "Blue"
}}
const options = {upsert: true}

PokemonModel.update(query,mod,options,function(err, data){
  if (err) return console.log("Erro " + err);
  return console.log("Alterou: " + data);
});
``` 

// Saida Console:

```
Alterou:  { ok: 1,
nModified: 0,
n: 1,
upserted: [ { index: 0, _id: 57294fe05daea5abb1cb1c4f } ] }


db.pokemons.find({name:/nerdmon/i})
{
  "_id": ObjectId("57294fe05daea5abb1cb1c4f"),
  "name": "Nerdmon",
  "description": "Pokemon que altera inserindo",
  "attack": 40,
  "defense": 40,
  "height": 0.7,
  "cor": "Blue"
}
Fetched 1 record(s) in 50ms

```

## 5 - Remova **todos** os Pokemons com `attack` **acima de 50**.

```js

const mongoose = require('mongoose');

const _schema = {
  name : {type : String, required: true} ,
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required: true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);
const PokemonModel = mongoose.model('pokemons', PokemonSchema);
const query = {attack : {$gt : 50}}

PokemonModel.remove(query,function(err,data){
  if (err) return console.log("Erro " + err);
  return console.log("Dados " + data);
});
```

// Saida Console:

```
Dados {"ok":1,"n":2}
```
