# Node.js - Aula 06 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Sat Mar 12 2016 22:40:30 GMT-0300 (BRT)

## 1. Crie um schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erro de validação padrão, criar especificamente:

### 1.1 para String: enum, match, maxlength e minlength

### 1.2 para Number: max e min 

##### Inserção correta

```js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaObj = {
  string : {
            type : String,
            enum : ['string', 'não string'],
            match : [/string/i, 'Não foi encontrada a palavra string 1'],
            maxlength : [7, 'String muito grande'],
            minlength: [2, 'String muito curta']
            },
  boolean : {
            type : Boolean
            },    
  number : {
            type : Number,
            max : [10, 'Numero muito grande'],
            min : [2, 'Numero muito pequeno']
           },
  array : {
            type : [String]
          },
  date : {
            type : Date
         },
  objectID : {
                type : Schema.Types.ObjectId  
             },
  mixed : {
            type : Schema.Types.Mixed
          }
};


const schemaTest = new Schema(schemaObj);


const Correto = {
    string : 'string',
    boolean : true,
    number : 4,
    array : ['Paulo', 'Silva'],
    date : Date.now(),
    objectID : ['56e4d08d45228b2a7019d969'],
    mixed : [{name : 'obj1'}, {name : 'obj2'}]
};


const Model = mongoose.model('model',schemaTest);

const modelTeste = new Model(Correto);

modelTeste.save((err, data)=>{
   if(err) return console.log('Erro ',err);
   console.log('Foi ',data); 
});
```

##### Resultado

```js
Foi  { array: [ 'Paulo', 'Silva' ],
  _id: 56e4da30cfbc315979eaeed2,
  mixed: [ { name: 'obj1' }, { name: 'obj2' } ],
  objectID: 56e4d08d45228b2a7019d969,
  date: Sun Mar 13 2016 00:10:40 GMT-0300 (BRT),
  number: 4,
  boolean: true,
  string: 'string',
  __v: 0 }
```

##### Inserção com erros

```js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const schemaObj = {
  string : {
            type : String,
            enum : ['string', 'não string'],
            match : [/string/i, 'Não foi encontrada a palavra string 1'],
            maxlength : [7, 'String muito grande'],
            minlength: [2, 'String muito curta']
            },
  boolean : {
            type : Boolean
            },    
  number : {
            type : Number,
            max : [10, 'Numero muito grande'],
            min : [2, 'Numero muito pequeno']
           },
  array : {
            type : [String]
          },
  date : {
            type : Date
         },
  objectID : {
                type : Schema.Types.ObjectId  
             },
  mixed : {
            type : Schema.Types.Mixed
          }
};


const schemaTest = new Schema(schemaObj);

const Incorreto = {
    string : 'stringnumero2',
    boolean : true,
    number : 12,
    array : ['Paulo', 'Silva'],
    date : Date.now(),
    objectID : ['56e4d08d45228b2a7019d969'],
    mixed : [{name : 'obj1'}, {name : 'obj2'}]
};

const Model = mongoose.model('model',schemaTest);

const modelTeste = new Model(Incorreto);

modelTeste.save((err, data)=>{
   if(err) return console.log('Erro ',err);
   console.log('Foi ',data); 
});
```

##### Resultado

```js
Erro  { [ValidationError: model validation failed]
  message: 'model validation failed',
  name: 'ValidationError',
  errors: 
   { number: 
      { [ValidatorError: Numero muito grande]
        properties: [Object],
        message: 'Numero muito grande',
        name: 'ValidatorError',
        kind: 'max',
        path: 'number',
        value: 12 },
     string: 
      { [ValidatorError: `stringnumero2` is not a valid enum value for path `string`.]
        properties: [Object],
        message: '`stringnumero2` is not a valid enum value for path `string`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'string',
        value: 'stringnumero2' } } }
```

## Cadastre 3 pokemons de uma vez só

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: {type : Date, default : Date.now},
    defense: Number,
    height: Number,
    hp: Number,
    name: String,
    speed: Number,
    types: [String]
}

const pokemonSchema = new Schema(_schema);

const data = [
    {
    "attack": 52,
    "created": "2013-11-03T15:05:41.271082",
    "defense": 43,
    "height": "6",
    "hp": 39,
    "name": "Charmander",
    "speed": 65,
    "types": [
        "fire"
    ]
    },
    {
    "attack": 64,
    "created": "2013-11-03T15:05:41.273462",
    "defense": 58,
    "height": "11",
    "hp": 58,
    "name": "Charmeleon",
    "speed": 80,
    "types": [
        "fire"
    ]
    },
    {
    "attack": 56,
    "created": "2013-11-03T15:05:41.305777",
    "defense": 35,
    "height": "3",
    "hp": 30,
    "name": "Rattata",
    "speed": 72,
    "types": [
        "normal"
    ]
    }
]

const pokemonModel = mongoose.model('pokemons', pokemonSchema);

pokemonModel.create(data,function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
});
```

##### Resultado

```js
Inseriu:  [ { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'fire' ],
    _id: 56e4e7e2c8f021a80345a462,
    speed: 65,
    name: 'Charmander',
    hp: 39,
    height: 6,
    defense: 43,
    attack: 52,
    __v: 0 },
  { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'fire' ],
    _id: 56e4e7e2c8f021a80345a463,
    speed: 80,
    name: 'Charmeleon',
    hp: 58,
    height: 11,
    defense: 58,
    attack: 64,
    __v: 0 },
  { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'normal' ],
    _id: 56e4e7e2c8f021a80345a464,
    speed: 72,
    name: 'Rattata',
    hp: 30,
    height: 3,
    defense: 35,
    attack: 56,
    __v: 0 } ]
```

## Busque todos os pokemons com attack > 50 e height > 0.5

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: {type : Date, default : Date.now},
    defense: Number,
    height: Number,
    hp: Number,
    name: String,
    speed: Number,
    types: [String]
}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = {$and : [{attack : {$gt : 50}}, {height : {$gt : 0.5}} ] }

pokemonModel.find(query, (err,data)=>{
    if (err) return console.log('ERRO: ', err);
    console.log('Listou: ', data)
});
```

##### Resultado

```js
Listou:  [ { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'fire' ],
    __v: 0,
    speed: 65,
    name: 'Charmander',
    hp: 39,
    height: 6,
    defense: 43,
    attack: 52,
    _id: 56e4e7e2c8f021a80345a462 },
  { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'fire' ],
    __v: 0,
    speed: 80,
    name: 'Charmeleon',
    hp: 58,
    height: 11,
    defense: 58,
    attack: 64,
    _id: 56e4e7e2c8f021a80345a463 },
  { created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    types: [ 'normal' ],
    __v: 0,
    speed: 72,
    name: 'Rattata',
    hp: 30,
    height: 3,
    defense: 35,
    attack: 56,
    _id: 56e4e7e2c8f021a80345a464 } ]
```

## Altere, inserindo, o pokemon Nerdmon com attack = 49 e com os valores dos outros campos a sua escolha

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: {type : Date, default : Date.now},
    defense: Number,
    height: Number,
    hp: Number,
    name: String,
    speed: Number,
    types: [String]
}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

const query  = {name : /nerdmon/i,  attack : 49 };
const nerdmon = { 
    name: 'Nerdmon',
    attack : 49,
    defense : 35,
    height : 10,
    hp : 200,
    speed : 300,
    types : ['fire']
 };
 const options = { upsert : true };
  
 pokemonModel.update(query,nerdmon, options, (err,data)=>{
  if (err) return console.log('ERRO: ', err);
  console.log('Atualizou ou Inseriu: ', data);
 });
```

##### Procurando no mongo pelo id do nerdmon inserido

```js
> db.pokemons.find({_id: ObjectId('56e4edea660f144f23c1ad6c')}).pretty()
{
	"_id" : ObjectId("56e4edea660f144f23c1ad6c"),
	"attack" : 49,
	"types" : [
		"fire"
	],
	"speed" : 300,
	"hp" : 200,
	"height" : 10,
	"defense" : 35,
	"name" : "Nerdmon"
}
``` 

## Remova todos os pokemons com attack > 50

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: {type : Date, default : Date.now},
    defense: Number,
    height: Number,
    hp: Number,
    name: String,
    speed: Number,
    types: [String]
}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = { attack : {$gt : 50} };

pokemonModel.remove(query, (err, data)=>{
    if (err) return console.log('ERRO: ', err);
    console.log('Apagou: ', data)
});
```

##### Resultado

```js
Apagou:  { result: { ok: 1, n: 3 },
```