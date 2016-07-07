# Node.js - Aula 06 - Exercício

**user:**[sostenesfreitas](https://github.com/sostenesfreitas)

*autor:*Sóstenes Freitas de Andrade.


## 1- Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:
* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`
* 1.2.  para Number: `max` e `min`

```
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: {type: String, required: true},
    attack: {type:Number, max: 500, min: 10},
    description: {type:String, maxlength:200, minlenght:5},
    defense: {type:Number, match:/\d/g},
    height: Number,
    cor: {type: String ,enum:['Black','White','Gray']},
    created_at: {type: Date, default: Date.now}

}
const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('Pokemon', pokemonSchema);

const dataCerta = {
    name: "Mewtwo",
    attack: 110,
    description:"Pokemon bixao mesmo",
    defense: 90,
    height: 6.7,
    cor:"Gray"

}

const pokemon = new pokemonModel(dataCerta);

pokemon.save(function(err, data) {
    if (err) return console.log('erro', err);
    console.log('Inseriu', data);

		})

module.exports = pokemonModel;

```
**Resultado**
```
Mongoose default connection open to: mongodb://localhost/be-mean
Mongoose default connection is open
Inseriu { __v: 0,
  name: 'Mewtwo',
  attack: 110,
  description: 'Pokemon bixao mesmo',
  defense: 90,
  height: 6.7,
  cor: 'Gray',
  _id: 57716dd0a59ccb230d981793,
  created_at: 2016-06-27T18:17:52.577Z  }
```
**Dados errados**
```
const dataCerta = {
    name: {pokemon:{name:"Mewtwo"}},
    attack: '110',
    description:"",
    defense: 90,
    height: 6.7,
    cor:"Blue"

}
```
**Resultado**
```
  errors:
   { name:
      { CastError: Cast to String failed for value "[object Object]" at path "name"
        message: 'Cast to String failed for value "[object Object]" at path "name"',
        name: 'CastError',
        kind: 'String',
        value: [Object],
        path: 'name',
        reason: [Object]  },
     cor:
      { ValidatorError: `Blue` is not a valid enum value for path `cor`.
        message: '`Blue` is not a valid enum value for path `cor`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'cor',
        value: 'Blue'}
	}
```
## 2- Cadastre 3 pokemons **de uma só vez**:

```
const tripleBattle =[ {
    name: "Zekrom",
    attack: 150,
    description:"Tipo Dragão Eletrico",
    defense: 120,
    height: 6.2,
    cor:"Black"

},
{
    name: "Reshiram",
    attack:120,
    description:"Tipo Dragão Fogo",
    defense:100,
    height:6.0,
    cor:"White"

},
{
    name: "Kyuren",
    attack:"130",
    description:"Tipo Dragão Gelo",
    defense:90,
    height:10.1,
    cor:"Gray"

}
 ];

 pokemonModel.create(tripleBattle, function(err, data) {
    if (err) return console.log('erro', err);
    console.log('Inseriu', data);
})

```
**Resultado**
```
Inseriu [ { __v: 0,
    name: 'Zekrom',
    attack: 150,
    description: 'Tipo Dragão Eletrico',
    defense: 120,
    height: 6.2,
    cor: 'Black',
    _id: 5771731d9ab572287bc90747,
    created_at: 2016-06-27T18:40:29.270Z  },
  { __v: 0,
    name: 'Reshiram',
    attack: 120,
    description: 'Tipo Dragão Fogo',
    defense: 100,
    height: 6,
    cor: 'White',
    _id: 5771731d9ab572287bc90748,
    created_at: 2016-06-27T18:40:29.276Z  },
  { __v: 0,
    name: 'Kyuren',
    attack: 130,
    description: 'Tipo Dragão Gelo',
    defense: 90,
    height: 10.1,
    cor: 'Gray',
    _id: 5771731d9ab572287bc90749,
    created_at: 2016-06-27T18:40:29.276Z  }  ]

```

## 3- Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```
const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('Pokemon', pokemonSchema);
const query = {$and:[{attack:{$gt:50}},{height:{$gt:0.5}}]};

pokemonModel.find(query, function(err, data) {
    if (err) return console.log('erro', err);
    console.log('Achou!! ', data);

})
```
**Resultado**
```
Achou!!  [ { _id: 57716dd0a59ccb230d981793,
    name: 'Mewtwo',
    attack: 110,
    description: 'Pokemon bixao mesmo',
    defense: 90,
    height: 6.7,
    cor: 'Gray',
    __v: 0,
    created_at: 2016-06-27T18:17:52.577Z  },
  { _id: 5771730ae3f40c8a79921b12,
    name: 'Zekrom',
    attack: 150,
    description: 'Tipo Dragão Eletrico',
    defense: 120,
    height: 6.2,
    cor: 'Black',
    __v: 0,
    created_at: 2016-06-27T18:40:10.092Z  },
  { _id: 5771730ae3f40c8a79921b13,
    name: 'Reshiram',
    attack: 120,
    description: 'Tipo Dragão Fogo',
    defense: 100,
    height: 6,
    cor: 'White',
    __v: 0,
    created_at: 2016-06-27T18:40:10.097Z  },
  { _id: 5771731d9ab572287bc90747,
    name: 'Zekrom',
    attack: 150,
    description: 'Tipo Dragão Eletrico',
    defense: 120,
    height: 6.2,
    cor: 'Black',
    __v: 0,
    created_at: 2016-06-27T18:40:29.270Z  },
  { _id: 5771731d9ab572287bc90748,
    name: 'Reshiram',
    attack: 120,
    description: 'Tipo Dragão Fogo',
    defense: 100,
    height: 6,
    cor: 'White',
    __v: 0,
    created_at: 2016-06-27T18:40:29.276Z  },
  { _id: 5771731d9ab572287bc90749,
    name: 'Kyuren',
    attack: 130,
    description: 'Tipo Dragão Gelo',
    defense: 90,
    height: 10.1,
    cor: 'Gray',
    __v: 0,
    created_at: 2016-06-27T18:40:29.276Z  }  ]

```

## 4 - Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

```
const query = {name: /nerdmon/i}

const mod = {$setOnInsert: {
        name : "Nerdmon",
        description: "Pokemon de boy",
        attack: 350,
        defense : 100,
        height : 1.0,
        cor: "Black"


}}
const options = {upsert: true}


pokemonModel.update(query,mod,options, function(err, data) {
    if (err) return console.log('erro', err);
    console.log('Atualizou ou inseriu?? rsrsrs:  ', data);
})
```
**Resultado**
```
Atualizou ou inseriu?? rsrsrs:   { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 5771779c1a70cbbbf6650e4c  }  ]  }

corsair(mongod-3.2.7) be-mean> db.mypokemons.find({"_id":ObjectId("5771779c1a70cbbbf6650e4c")})
{
  "_id": ObjectId("5771779c1a70cbbbf6650e4c"),
  "name": "Nerdmon",
  "description": "Pokemon de boy",
  "attack": 350,
  "defense": 100,
  "height": 1,
  "cor": "Black"

}
Fetched 1 record(s) in 2ms

```
## 5 - Remova **todos** os Pokemons com `attack` **acima de 50**.

```
const query = {attack:{$gt:50}}
pokemonModel.remove(query, function(err, data) {
    if (err) return console.log('erro', err);
    console.log('Atualizou ou inseriu?? rsrsrs:  ', data);

})
```

**Resultado**
```
Dados {"ok":1,"n":2}
```
