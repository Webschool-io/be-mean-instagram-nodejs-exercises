# Node.js - Aula 06 - Exercício

**user:** [felipelopesrita](https://github.com/felipelopesrita)

**autor:** Felipe José Lopes Rita


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

**Schema**
```js
const _schema = 
	{ user_name: { type:String, match: /^\w/, maxlength: 15, minlength:2 }
	, status: { type: String, enum: _states }
	}
const userSchema = new Schema(_schema);
```
**Objeto correto**
```js
var userModel = mongoose.model('users', userSchema);
var user      = new userModel(
	{ user_name: 'felipe'
	, status: 'online'
	});
user.save( (err, result)=> {
	if( err ) throw err;
	console.log(result)
} );

/*
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
{ _id: 56e1b5c439bc29cc59722070,
  status: 'online',
  user_name: 'felipe',
  __v: 0 }
  */
```

**Objeto com erros**
```js
var user = new userModel(
	{ user_name: '@'
	, status: 'block'
	});
user.save( (err, result)=> {
	if( err ) console.log(err);
	console.log(result)
} );

/*
{ [ValidationError: users validation failed]
  message: 'users validation failed',
  name: 'ValidationError',
  errors: 
   { status: 
      { [ValidatorError: `block` is not a valid enum value for path `status`.]
        properties: [Object],
        message: '`block` is not a valid enum value for path `status`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'status',
        value: 'block' },
     user_name: 
      { [ValidatorError: Path `user_name` is invalid (@).]
        properties: [Object],
        message: 'Path `user_name` is invalid (@).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'user_name',
        value: '@' } } }
*/
```

* 1.2.  para Number: `max` e `min`

**Schema**
```js
const _schema =
	{ name: String
	, quantity: { type:Number, max: 50, min: 0 }
	}

const productSchema = new Schema(_schema);
```
**Objeto correto**
```js
var produto = new productModel(
	{ name: 'Macarrão'
	, quantity: 20
	});
produto.save( (err, result)=> {
	if( err ) console.log(err);
	console.log(result)
} );
/*
{ _id: 56e1b8e51d75859d5f70883f,
  quantity: 20,
  name: 'Macarrão',
  __v: 0 }
*/
```
**Objeto com erro**
```js
var produto = new productModel(
	{ name: 'Macarrão'
	, quantity: 53
	});
produto.save( (err, result)=> {
	if( err ) console.log(err);
	console.log(result)
} );
/*
{ [ValidationError: products validation failed]
  message: 'products validation failed',
  name: 'ValidationError',
  errors:
   { quantity:
      { [ValidatorError: Path `quantity` (53) is more than maximum allowed value (50).]
        properties: [Object],
        message: 'Path `quantity` (53) is more than maximum allowed value (50).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'quantity',
        value: 53 } } }

*/
```

## Cadastre 3 pokemons **de uma só vez**:
```js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const _schema = 
	{ name: String
	, description: String
	, type: String
	, attack: Number
	, defense: Number
	, height: Number
	}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);
const pokeData = [ { name: 'Blastoise' }, { name: 'Mudkip' }, { name: 'Lucario' } ];

pokemonModel.insertMany(pokeData, (err, result)=>{
	if(err) console.log(err);
	console.log(result);
});
/*
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
[ { _id: 56e1bd8ad3635ad56626018f, name: 'Blastoise' },
  { _id: 56e1bd8ad3635ad566260190, name: 'Mudkip' },
  { _id: 56e1bd8ad3635ad566260191, name: 'Lucario' } ]
*/
```
## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const _schema = 
	{ name: String
	, description: String
	, type: String
	, attack: Number
	, defense: Number
	, height: Number
	}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

var query = { attack: {$gt: 50}, height: {$gt: 0.5} };
pokemonModel.find(query, (err, data)=> {
	if(err) console.log(err);
	console.log(data);
});

/*
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
[ { moves: [ 'desvio', 'Investida' ],
    height: 1.7,
    defense: 78,
    attack: 84,
    description: 'Pokemon mais pica das galáxias',
    name: 'Charizard',
    _id: 56b4237765cd05bf6bff3324 },
  { moves: [ 'desvio', 'Investida' ],
    height: 0.7,
    defense: 40,
    attack: 65,
    description: 'Raposa preta (deve ser do capeta) foda e fofa',
    name: 'Zorua',
    _id: 56b4237765cd05bf6bff3326 },
  { defense: 43,
    moves: [ 'Investida', 'Multiplicar', 'desvio' ],
    height: 0.6,
    attack: 52,
    type: 'fogo',
    description: 'Esse é o cão chupando manga de fofinho',
    name: 'Charmander',
    _id: 56bb4baa43e8eae26e3d71cc } ]
*/
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const _schema = 
	{ name: String
	, description: String
	, type: String
	, attack: Number
	, defense: Number
	, height: Number
	}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

var query = { name: 'Nerdmon' }
  , mod = 
	  { name: 'Nerdmon'
	  , description: 'Pokemon criado no exercício'
	  , type: 'fire'
	  , attack: 49
	  , defense: 80
	  , height: 1.80 
		}
	, opt = { upsert: true };



pokemonModel.update(query, mod, opt, (err, data)=> {
	if(err) console.log(err);
	console.log(data);
});
/*
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
{ ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 56e8af7e024ad117a164b501 } ] }
*/
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.
```js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const _schema = 
	{ name: String
	, description: String
	, type: String
	, attack: Number
	, defense: Number
	, height: Number
	}

const pokemonSchema = new Schema(_schema);
const pokemonModel = mongoose.model('pokemons', pokemonSchema);

var query = { attack: {$gt: 50} };

pokemonModel.remove(query, (err, data)=> {
	if(err) console.log(err);
	console.log(data.resul);
});
/*
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
{ ok: 1, n: 5 }
*/
```
