# Node.js - Aula 06 - Exercício

**user:** charles7421(https://github.com/charles7421)

**autor:** Charles de Freitas Garcia


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  {
  	type: String, 
  	enum: ['Charles', 'Ana Paula', 'João Lucas', ]
  },
  idade: {
  	type: Number,
  	min: [18, 'Somente maiores de 18 anos'],
  	max: [60, 'Somente menores de 60 anos']
  },
  cpf: {
  	type: String,
  	match: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g
  },
  cep: {
  	type: String,
  	minlength: 8,
  	maxlength: 9
  }
}
const testeSchema = new Schema(_schema);
const TesteModel = mongoose.model('teste', testeSchema);

const data = {
	name: null,
	idade: null,
	cpf: null,
	cep: null
};

const Charles = new TesteModel(data);
Charles.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu: ', data);
})

module.exports = TesteModel;
```

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

	* **Dados ok!**

		```javascript
		const data = {
			name: 'Charles',
			idade: 27,
			cpf: '08145391571',
			cep: '38700-000'
		}

		Inseriu:  { _id: 570853584ae985531647fda8,
		  cep: '38700-000',
		  cpf: '08145391571',
		  idade: 27,
		  name: 'Charles',
		  __v: 0 }

		```

	* **Nome fora do Array "enum"**

		```javascript
		const data = {
			name: 'Israel',
			idade: 27,
			cpf: '08145391571',
			cep: '38700-000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { name: 
		      { [ValidatorError: `Israel` is not a valid enum value for path `name`.]
		        message: '`Israel` is not a valid enum value for path `name`.',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'enum',
		        path: 'name',
		        value: 'Israel' } } }

		```
	* **CPF não batendo com a RegEx imposta no "match"**
		```javascript
		const data = {
			name: 'Ana Paula',
			idade: 27,
			cpf: '081-453-915.71',
			cep: '38700-000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { cpf: 
		      { [ValidatorError: Path `cpf` is invalid (087-549-036-02).]
		        message: 'Path `cpf` is invalid (087-549-036-02).',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'regexp',
		        path: 'cpf',
		        value: '087-549-036-02' } } }

		```
	* **CEP com mais caracteres do que o definido no maxlength**
		```javascript
		const data = {
			name: 'Ana Paula',
			idade: 27,
			cpf: '08145391571',
			cep: '38700--000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { cep: 
		      { [ValidatorError: Path `cep` (`38700--000`) is longer than the maximum allowed length (9).]
		        message: 'Path `cep` (`38700--000`) is longer than the maximum allowed length (9).',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'maxlength',
		        path: 'cep',
		        value: '38700--000' } } }

		```
	* **CEP com menos caracteres do que o definido no minlength**
		```javascript
		const data = {
			name: 'Ana Paula',
			idade: 27,
			cpf: '08145391571',
			cep: '3870000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { cep: 
		      { [ValidatorError: Path `cep` (`3870000`) is shorter than the minimum allowed length (8).]
		        message: 'Path `cep` (`3870000`) is shorter than the minimum allowed length (8).',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'minlength',
		        path: 'cep',
		        value: '3870000' } } }


		```

* 1.2.  para Number: `max` e `min`

	* **Idade menor do que o definido no "min"**
		```javascript
		const data = {
			name: 'Ana Paula',
			idade: 17,
			cpf: '08145391571',
			cep: '38700000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { idade: 
		      { [ValidatorError: Somente maiores de 18 anos]
		        message: 'Somente maiores de 18 anos',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'min',
		        path: 'idade',
		        value: 17 } } }

		```
	* **Idade maior do que o definido no "max"**
		```javascript
		const data = {
			name: 'João Lucas',
			idade: 61,
			cpf: '08145391571',
			cep: '38700000'
		}

		ERRO:  { [ValidationError: teste validation failed]
		  message: 'teste validation failed',
		  name: 'ValidationError',
		  errors: 
		   { idade: 
		      { [ValidatorError: Somente menores de 60 anos]
		        message: 'Somente menores de 60 anos',
		        name: 'ValidatorError',
		        properties: [Object],
		        kind: 'max',
		        path: 'idade',
		        value: 61 } } }

		```


## Cadastre 3 pokemons **de uma só vez**:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  attack: Number,
  created: { type: Date, default: Date.now },
  defense: Number,
  height: String,
  hp: Number,
  name: String,
  speed: Number,
  types: [String]
}

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('poke', PokemonSchema);

const data = {
      attack: 55,
      defense: 40,
      height: "2",
      hp: 100,
      name: "Poke01",
      speed: 45,
      types: ["bug", "poison"]
    }

const data2 = {
      attack: 35,
      defense: 68,
      height: "4",
      hp: 100,
      name: "Poke02",
      speed: 45,
      types: ["ice", "water"]
    }

const data3 = {
      attack: 70,
      defense: 10,
      height: "4",
      hp: 100,
      name: "Poke03",
      speed: 10,
      types: ["normal", "flying"]
    }

var array = [data, data2, data3];
   
const Charles = new PokemonModel(array);
PokemonModel.create(array, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu: ', data);
})

module.exports = PokemonModel;
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  String
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const query = { $and: [ { attack: {$gt: 50} }, { height: {$gt: 0.5} } ] };

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
})
Buscou: []
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  attack: Number,
  created: { type: Date, default: Date.now },
  defense: Number,
  height: String,
  hp: Number,
  name: String,
  speed: Number,
  types: [String]
}

const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);

const query = {name: "Nerdmon"};
const mod = {
	attack: 49,
	defense: 33,
	height: "2",
	hp: 100,
	name: "Smaug",
	speed: 23,
	types: ["dragon"]
};
var options = {upsert: true};

Pokemon.update(query, mod, options, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou: ', data);
});

Alterou:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 57086055363fa7f2af51e135 } ] }
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  attack: Number,
  created: { type: Date, default: Date.now },
  defense: Number,
  height: String,
  hp: Number,
  name: String,
  speed: Number,
  types: [String]
}

const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);

const query = { attack: {$gt: 50} };

Pokemon.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou: ', data);
});


DELETOU: { result: { ok: 1, n: 462 },
  connection: 
   EventEmitter {
     domain: null,
     _events: 
      { close: [Object],
        error: [Object],
        timeout: [Object],
        parseError: [Object],
        connect: [Function] },
     _eventsCount: 5,
     _maxListeners: undefined,
     options: 
      { socketOptions: {},
        auto_reconnect: true,
        host: 'localhost',
        port: 27017,
        cursorFactory: [Object],
        reconnect: true,
        emitError: true,
        size: 5,
        disconnectHandler: [Object],
        bson: {},
        messageHandler: [Function],
        wireProtocolHandler: {} },
     id: 0,
     logger: { className: 'Connection' },
     bson: {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'localhost',
     keepAlive: true,
     keepAliveInitialDelay: 0,
     noDelay: true,
     connectionTimeout: 0,
     socketTimeout: 0,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     cert: null,
     key: null,
     passphrase: null,
     ssl: false,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions: { promoteLongs: true },
     flushing: false,
     queue: [],
     connection: 
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: 'localhost',
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: false,
        destroyed: false,
        bytesRead: 250,
        _bytesDispatched: 231,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        read: [Function],
        _consuming: true },
     writeStream: null,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null } }

```

