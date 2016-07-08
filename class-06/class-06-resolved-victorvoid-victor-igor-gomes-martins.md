# Node.js - Aula 06 - Exercício

**user**: [victorvoid](https://github.com/victorvoid)

**autor**: Victor Igor Gomes Martins

**date**: 1458069633190

## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

1. para String: **enum**, **match**, **matchlength** e **minlength** 

2. para Number: **max** e **min**

```js
/* COM O OBJETO DE DADOS CORRETO */
'use strict';
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const _schema = {
  nome: {
    type: String,
    maxlength: 30,
    minlength: 2
  },
  idade: {
    type: Number, 
    min: 18, 
    max: 60
  }, 
  corFavorita: {
    type: String,
    enum: ['laranja', 'vermelho', 'azul'],
    required: true
  },
  solteiro: Boolean,
  attacks:  Schema.Types.Mixed,
  nomeFamiliares: [String],
  curriculo: {type: String, match: /\.doc$/},
  dtCadastrado: {type: Date, default: Date.now},
}
const pessoaSchema = new Schema(_schema);

/* simbora inserir */
const dados = {
  nome: 'Victor Igor',
  idade: 20,
  corFavorita: 'azul',
  solteiro: 1,
  attacks: 
  [
    { nome: 'Socão',
      poder: 100
    },
    {
      nome: 'Vuadora',
      poder: 99
    }
  ],
  nomeFamiliares: ['Mateus', 'Jorge', 'Maria'],
  curriculo: 'curriculo.doc'
} 
let Model  = mongoose.model('testes', pessoaSchema);
let pes    = new Model(dados);
pes.save(function(err, data){
  if (err) return console.log('Ocorreu um erro =( '+err);
  console.log('Cadastrado com sucesso!!! =D');
});
 
/* COM OBJETO DE DATA INVALIDO: */

'use strict';
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const _schema = {
  nome: {
    type: String,
    maxlength: 30,
    minlength: 2
  },
  idade: {
    type: Number, 
    min: 18, 
    max: 60
  }, 
  corFavorita: {
    type: String,
    enum: ['laranja', 'vermelho', 'azul'],
    required: true
  },
  solteiro: Boolean,
  attacks:  Schema.Types.Mixed,
  nomeFamiliares: [String],
  curriculo: {type: String, match: /\.doc$/},
  dtCadastrado: {type: Date, default: Date.now},
}
const pessoaSchema = new Schema(_schema);

/* simbora inserir */
const dados = {
  nome: 'A',
  idade: 70,
  corFavorita: 'azul',
  solteiro: 1,
  attacks: 
  [
    { nome: 'Socão',
      poder: 100
    },
    {
      nome: 'Vuadora',
      poder: 99
    }
  ],
  nomeFamiliares: ['Mateus', 'Jorge', 'Maria'],
  curriculo: 'curriculo.doc'
} 
let Model  = mongoose.model('testes', pessoaSchema);
let pes    = new Model(dados);
pes.save(function(err, data){
  if (err) return console.log('Ocorreu um erro =( '+err);
  console.log('Cadastrado com sucesso!!! =D');
});



/*out:
 node app.js 
Ocorreu um erro =( ValidationError: Path `idade` (70) is more than maximum allowed value (60)., Path `nome` (`A`) is shorter than the minimum allowed length (2).
Connected by mongodb://localhost/be-mean-instagram
Mongoose open
*/
```
## Cadastre 3 pokemons **de uma só vez**:

```js

'use strict';
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const _schema = {
  name: String,
  description: String,
  type: {
    type: String,
    enum: [
      "Normal",
      "Ghost",
      "Dragon",
      "Electric",
      "Ground",
      "Fighting",
      "Poison",
      "Psychic",
      "Bug",
      "Grass",
      "Steel",
      "Dark",
      "Flying",
      "Fire",
      "Water",
      "Ice",
      "Fairy",
      "Rock"
    ]
  },
  attack: {
    type: Number,
    max: 1000,
    min: 0.1
  },
  defense: {
    type: Number,
    max: 1000,
    min: 0.1
  },
  height: {
    type: Number,
    max: 10,
    min: 0.1
  }
}
let pokemonsSchema = new Schema (_schema);
/*inserindo 3 pokemons de uma só vez */
const data = 
[
  {
  name: "bulbasaur",
  description: "dragaozinho de merda",
  type: "Fire",
  attack: 30,
  defense: 30,
  height: 3.07
  }, 
  {
  name: "Pikachu",
  description: "fofo até de mais *--*",
  type: "Electric",
  attack: 30,
  defense: 30,
  height: 3.07
  },
  {
  name: "Celebi",
  description: "bixo feio",
  type: "Eletric",
  attack: 50,
  defense: 40,
  height: 2
  }
];
let Model = mongoose.model('pokemons', pokemonsSchema);

/* Salvando todos os pokemons de dentro do array data: */
var quantidade = 0;
data.forEach(function(doc){
  let poke = new Model(doc); //criando model para cada um
  poke.save(function(err){
    quantidade++;
    if (err){
      console.log('Ocorreu um erro =( --> ' + err);
    }
    if(quantidade == data.length){
      console.log('Salvo com sucesso *---*');
    }
  });
});

/*out:

node app.js
Connected by mongodb://localhost/be-mean-instagram
Mongoose open
Salvo com sucesso *---*

*/
```
## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = {$and:[{attack:{$gt: 50}},{height: {$gt: 0.5}}]}
const fields = {name: 1, _id: 0}
PokemonModel.find(query, fields, (err, data)=>{
  if (err) 
    return console.log('Ocorreu um erro: '+err);
  if (data.length <= 0) 
    return console.log('Nenhum pokemon encontrado');
  return console.log(data);
});

module.exports = PokemonModel;

/*
out:
node app.js
Connected by mongodb://localhost/be-mean-instagram
Mongoose open
Nenhum pokemon encontrado
 */
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

```
'use strict'

const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const _schema = {
  name: String,
  description: String,
  type: String,
  attack: {
    type: Number,
    min: 5,
    max: 190
  }, 
  defence: {
    type: Number,
    min: 5,
    max: 230
  },
  height: Number
};

const query = {name: 'Nerdmon'};

const mod = {
      $setOnInsert: {
        name: 'Nerdmon',
        description: 'Faz nada',
        type: 'Fire',
        attack: 49,
        defense: 10,
        height: 2
      }
  }
const option = { upsert: true };

const pokemonSchema = new Schema(_schema);
const Model       = mongoose.model('pokemons',pokemonSchema);

Model.update(query, mod, option,(err, data)=>{
  if (err) return console.log('ERRO: '+err);
  return console.log('--> ' + data);
});

```
## Remova **todos** os Pokemons com `attack` **acima de 50**.

```
'use strict'
const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const _schema = {
  name: String,
  description: String,
  type: String,
  attack: {
    type: Number,
    min: 5,
    max: 190
  }, 
  defence: {
    type: Number,
    min: 5,
    max: 230
  },
  height: Number
};

const query = {
  attack: {$gt: 50}
}

const pokemonSchema = new Schema(_schema);
const pokemonModel  = mongoose.model('pokemons', pokemonSchema);

pokemonModel.remove(query, (err, data) => {
  if (err) return console.log('Ocorreu um erro: '+err);
  return console.log('Removeu com sucesso: '+data);
});

/*
OUT:

node app.js
Connected by mongodb://localhost/be-mean-instagram
Mongoose open
Removeu com sucesso: {"ok":1,"n":0}
 */
```