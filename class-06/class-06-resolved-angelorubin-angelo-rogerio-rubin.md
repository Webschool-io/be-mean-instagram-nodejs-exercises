# Node.js - Aula 06 - Exercícios

**User:** [angelorubin](https://github.com/angelorubin)

**Autor:** Angelo Rogério Rubin

**Date:** 1453886160

## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* para string: enum, match, maxlenght e minlenght

* para Number: min e max

### Código com erros de validação:
	/*
	 * Testing validation of various Schema Types
	 */

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday',
	'friday'];

	// Schema validations
	let _schema = new Schema({
	    vString: { type: String },
	    vStringMatch : {type: String, match: /^(mon|tue|wed|thu|fri)day$/i},
	    vStringEnum: { type: String, enum: weekdays },
	    vStringMinMaxLength: { type: String, minlength: 1, maxlength: 8 },
	    vNumber: { type: Number, min: 13, max: 19 },
	    vBoolean: { type: Boolean },
	    vDate: { type: Date },
	    vObjectId: Schema.Types.ObjectId,
	    vMixed: Schema.Types.Mixed
	});

	let pokeModel = mongoose.model('Pokemons', _schema);

	let poke = new pokeModel;

	// Validating with errors
	poke.vString = {};
	poke.vStringMatch = 'ang';
	poke.vStringEnum = false;
	poke.vStringMinMaxLength = 'dilmassauro';
	poke.vNumber = 'string';
	poke.vBoolean = 'string';
	poke.vDate = {};
	poke.vObjectId = 'only objectId here';

	poke.save( (err, data) => {
	    if (err) {
	        return console.error(err);
	    }
	    console.log('Data entered in the database:' + data);
	});

### Resultados com erros de validação:

	PS C:\Projetos\mongoose-pokemons> node app
	{ [ValidationError: Pokemons validation failed]
	  message: 'Pokemons validation failed',
	  name: 'ValidationError',
	  errors:
	   { vString:
	      { [CastError: Cast to String failed for value "[object Object]" at path "vString"]
	        message: 'Cast to String failed for value "[object Object]" at path "vString"',
	        name: 'CastError',
	        kind: 'String',
	        value: {},
	        path: 'vString',
	        reason: undefined },
	     vNumber:
	      { [CastError: Cast to Number failed for value "string" at path "vNumber"]
	        message: 'Cast to Number failed for value "string" at path "vNumber"',
	        name: 'CastError',
	        kind: 'Number',
	        value: 'string',
	        path: 'vNumber',
	        reason: undefined },
	     vDate:
	      { [CastError: Cast to Date failed for value "[object Object]" at path "vDate"]
	        message: 'Cast to Date failed for value "[object Object]" at path "vDate"',
	        name: 'CastError',
	        kind: 'Date',
	        value: {},
	        path: 'vDate',
	        reason: undefined },
	     vObjectId:
	      { [CastError: Cast to ObjectID failed for value "only objectId here" at path "vObjectId"]
	        message: 'Cast to ObjectID failed for value "only objectId here" at path "vObjectId"',
	        name: 'CastError',
	        kind: 'ObjectID',
	        value: 'only objectId here',
	        path: 'vObjectId',
	        reason: undefined },
	     vStringMatch:
	      { [ValidatorError: Path `vStringMatch` is invalid (ang).]
	        properties: [Object],
	        message: 'Path `vStringMatch` is invalid (ang).',
	        name: 'ValidatorError',
	        kind: 'regexp',
	        path: 'vStringMatch',
	        value: 'ang' },
	     vStringEnum:
	      { [ValidatorError: `false` is not a valid enum value for path `vStringEnum`.]
	        properties: [Object],
	        message: '`false` is not a valid enum value for path `vStringEnum`.',
	        name: 'ValidatorError',
	        kind: 'enum',
	        path: 'vStringEnum',
	        value: 'false' },
	     vStringMinMaxLength:
	      { [ValidatorError: Path `vStringMinMaxLength` (`dilmassauro`) is longer than the maximum allowed length (8).]
	        properties: [Object],
	        message: 'Path `vStringMinMaxLength` (`dilmassauro`) is longer than the maximum allowed length (8).',
	        name: 'ValidatorError',
	        kind: 'maxlength',
	        path: 'vStringMinMaxLength',
	        value: 'dilmassauro' } } }
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open


### Código sem erros de validação:

	/*
	 * Testing validation of various Schema Types
	 */

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday',
	'friday'];

	// Schema validations
	let _schema = new Schema({
	    vString: { type: String },
	    vStringMatch : {type: String, match: /^(mon|tue|wed|thu|fri)day$/i},
	    vStringEnum: { type: String, enum: weekdays },
	    vStringMinMaxLength: { type: String, minlength: 1, maxlength: 8 },
	    vNumber: { type: Number, min: 13, max: 19 },
	    vBoolean: { type: Boolean },
	    vDate: { type: Date },
	    vObjectId: Schema.Types.ObjectId,
	    vMixed: Schema.Types.Mixed
	});

	let pokeModel = mongoose.model('Pokemons', _schema);

	let poke = new pokeModel;

	// Validating without errors
	poke.vString = 'angelomon';
	poke.vStringMatch = 'monday';
	poke.vStringEnum = 'monday';
	poke.vStringMinMaxLength = 'angelo';
	poke.vNumber = 18;
	poke.vBoolean = 1;
	poke.vDate = '2016-01-25 14:42:00';
	poke.vObjectId = '56a61ea0ebd4076c1f656eb3';
	poke.vMixed = 1.7;

	// Validating with errors
	/*
	poke.vString = {};
	poke.vStringMatch = 'ang';
	poke.vStringEnum = false;
	poke.vStringMinMaxLength = 'dilmassauro';
	poke.vNumber = 'string';
	poke.vBoolean = 'string';
	poke.vDate = {};
	poke.vObjectId = 'only objectId here';
	*/

	poke.save( (err, data) => {
	    if (err) {
	        return console.error(err);
	    }
	    console.log('Os dados foram salvos:' + data);
	});

### Resultado sem erros de validação:

	PS C:\Projetos\mongoose-pokemons> node app
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open
	Data entered in the database:{ 
		_id: 56a65ef5a1628740190dc3a2,
	  	vString: 'angelomon',
	  	vStringMatch: 'monday',
	  	vStringEnum: 'monday',
	  	vStringMinMaxLength: 'angelo',
	  	vNumber: 18,
	  	vBoolean: true,
	  	vDate: Mon Jan 25 2016 14:42:00 GMT-0200 (Horário brasileiro de verão),
	  	vObjectId: 56a61ea0ebd4076c1f656eb3,
	  	vMixed: 1.7,
		__v: 0 
	}

## Cadastre 3 pokemons de uma só vez. (pesquisar).

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	// Schema validations
	const pokeSchema = new Schema({
	    "attack" : Number,
	    "created" : Date,
	    "defense" : Number,
	    "height" : Number,
	    "hp" : Number,
	    "name" : String,
	    "speed" : Number,
	    "types" : Array
	});

	const pokeModel = mongoose.model('pokemons', pokeSchema);

	const pokemons = [
	    {
	        "attack" : 80,
	        "created" : Date.now(),
	        "defense" : 100,
	        "height" : 10,
	        "hp" : 40,
	        "name" : 'Angelomon',
	        "speed" : 200,
	        "types" : ['earth','fire']
	    },
	    {
	        "attack" : 70,
	        "created" : Date.now(),
	        "defense" : 90,
	        "height" : 9,
	        "hp" : 30,
	        "name" : 'Toscomon',
	        "speed" : 100,
	        "types" : ['fire']
	    },
	    {
	        "attack" : 30,
	        "created" : Date.now(),
	        "defense" : 30,
	        "height" : 5,
	        "hp" : 20,
	        "name" : 'Dilmamon',
	        "speed" : 20,
	        "types" : ['water']
	    }
	];

	pokeModel.create(pokemons, (err, data) => {
	    if (err) {
	        console.log(err);
	    }
	    console.log('(' + data.length + ') pokemons foram inseridos no banco de dados com sucesso.');
	});

### Resultado

	PS C:\Projetos\mongoose-pokemons> node app
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open
	(3) pokemons foram inseridos no banco de dados com sucesso.

## Busque todos os Pokemons com attack > 50 e height > 0.5.

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	const _schema = {
	    name: String
	}

	const pokemonSchema = new Schema(_schema);

	const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

	const query = {
	    $and: [ 
	    	{
	    		attack: { $gt: 50 },
	    		height: { $gt: 0.5 }

	    	}
	    ]
	};

	PokemonModel.find(query, (err, data) => {
	    if (err) {
	        return console.log('ERRO: ', err);
	    }
	    return console.log('FOUND:', data);
	});

### Resultado:

	PS C:\Projetos\mongoose-pokemons> node app
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open
	FOUND: [ 
		{ 
			__v: 0,
		    types: [ 'earth', 'fire' ],
		    speed: 200,
		    name: 'Angelomon',
		    hp: 40,
		    height: 10,
		    defense: 100,
		    created: Tue Jan 26 2016 16:34:01 GMT-0200 (Horário brasileiro de verão),
		    attack: 80,
		    _id: 56a7bc19ec645064182251e5 
	    },
	  	{ 
		  	__v: 0,
		    types: [ 'fire' ],
		    speed: 100,
		    name: 'Toscomon',
		    hp: 30,
		    height: 9,
		    defense: 90,
		    created: Tue Jan 26 2016 16:34:01 GMT-0200 (Horário brasileiro de verão),
		    attack: 70,
		    _id: 56a7bc19ec645064182251e6 
		} 
	]	

## Altere, inserindo, o Pokemon Nerdmon com attack = 49 e com os valores dos outros campos a sua escolha.

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	const _schema = {
		"attack" : Number,
	    "created" : Date,
	    "defense" : Number,
	    "height" : Number,
	    "hp" : Number,
	    "name" : String,
	    "speed" : Number,
	    "types" : Array
	};

	const pokemonSchema = new Schema(_schema);

	const pokemonModel = mongoose.model('Pokemon', pokemonSchema);

	const query = { name: 'Angelomon Pro' };

	const update = { 
		"attack" : 49,
	    "created" : Date.now(),
	    "defense" : 200,
	    "height" : 15,
	    "hp" : 80,
	    "name" : 'Nerdmon',
	    "speed" : 300,
	    "types" : ['earth','fire','water']
	};

	pokemonModel.findOneAndUpdate(query, update, (err, data) => {
		if(err){
			return console.log(err);
		}
		console.log('O documento foi alterado com sucesso.');
	});

### Resultado:

	PS C:\Projetos\mongoose-pokemons> node app
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open
	O documento foi alterado com sucesso.

## Remova todos os Pokemons com attack > 50.

	'use strict';

	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	// Schema validations
	let _schema = new Schema({
		attack: Number
	});

	let pokeModel = mongoose.model('Pokemons', _schema);

	const conditions = { attack: { $gt: 50 } };

	pokeModel.remove(conditions, (err) => {
		if(err) {
			console.log(err);
		}
	    console.log('Pokemon(s) removido(s) com sucesso.');
	});

### Resultado:

	PS C:\Projetos\mongoose-pokemons> node app
	Connected: mongodb://127.0.0.1:27017/be-mean-pokemons
	Mongoose default connection is open
	Pokemon(s) removido(s) com sucesso.
