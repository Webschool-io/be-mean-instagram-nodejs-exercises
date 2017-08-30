# Node.js - Aula 06 - Exercício

autor: Bruno Lima da Silva

## 1. Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:
### -1.1 para String: enum, match, maxlength e minlength
String enum:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: String,
        enum: 'Valid'
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 'invalid' };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: `invalid` is not a valid enum value for path `n`.
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaString.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: '`invalid` is not a valid enum value for path `n`.',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'enum',
      path: 'n',
      value: 'invalid' } } }
```
String match:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: String,
        match: /^a/
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 'Invalid' };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: Path `n` is invalid (Invalid).
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaString.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: 'Path `n` is invalid (Invalid).',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'regexp',
      path: 'n',
      value: 'Invalid' } } }
```
String maxlength:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: String,
        maxlength: 5
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 'Bruno Lima da Silva' };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: Path `n` (`Bruno Lima da Silva`) is longer than the maximum allowed length (5).
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaString.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: 'Path `n` (`Bruno Lima da Silva`) is longer than the maximum allowed length (5).',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'maxlength',
      path: 'n',
      value: 'Bruno Lima da Silva' } } }
```

String minlength:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: String,
        minlength: 8
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 'Bruno' };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: Path `n` (`Bruno`) is shorter than the minimum allowed length (8).
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaString.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: 'Path `n` (`Bruno`) is shorter than the minimum allowed length (8).',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'minlength',
      path: 'n',
      value: 'Bruno' } } }
```

### -1.2 para Number:max e min
Number max:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: Number,
        max: 10
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 11 };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: Path `n` (11) is more than maximum allowed value (10).
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaNumber.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: 'Path `n` (11) is more than maximum allowed value (10).',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'max',
      path: 'n',
      value: 11 } } }
```

Number min:
```js
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    n: {
        type: Number,
        min: 7
    }
};
const dataSchema = new Schema (_schema);
const data = { n: 5 };
const model = mongoose.model ('pokemons', dataSchema);
const value = new model (data);
value.save ( (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
message: 'pokemons validation failed',
name: 'ValidationError',
errors:
 { n:
    { ValidatorError: Path `n` (5) is less than minimum allowed value (7).
        at MongooseError.ValidatorError (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
        at validate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:704:13)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:742:9
        at Array.forEach (native)
        at SchemaNumber.SchemaType.doValidate (/home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:710:19)
        at /home/fsociety/be-mean-instagram/nodeJS/mongoose-pokemons/node_modules/mongoose/lib/document.js:1354:9
        at _combinedTickCallback (internal/process/next_tick.js:67:7)
        at process._tickCallback (internal/process/next_tick.js:98:9)
        at Module.runMain (module.js:606:11)
        at run (bootstrap_node.js:394:7)
        at startup (bootstrap_node.js:149:9)
        at bootstrap_node.js:509:3
      message: 'Path `n` (5) is less than minimum allowed value (7).',
      name: 'ValidatorError',
      properties: [Object],
      kind: 'min',
      path: 'n',
      value: 5 } } }
```

## 2. Cadastre 3 pokemons de uma só vez. (pesquisar)
```js
const mongoose = require ('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect (dbURI);
const Schema = mongoose.Schema;
const _schema = {
    name: String
};
const pokemonSchema = new Schema (_schema);
const PokemonModel = mongoose.model ('pokemons', pokemonSchema);
const poke = [
    {
        name: 'blsdotrocks'
    },
    {
        name: 'Karoline'
    },
    {
        name: 'Suissa'
    }
];
PokemonModel.create (poke, (err, poke) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', poke);
});
```
Saída
```
➜  mongoose-pokemons node schema09.js
Inseriu: [ { __v: 0, name: 'blsdotrocks', _id: 582ce6bf5db3ae2c9f1faf3e },
  { __v: 0, name: 'Karoline', _id: 582ce6bf5db3ae2c9f1faf3f },
  { __v: 0, name: 'Suissa', _id: 582ce6bf5db3ae2c9f1faf40 } ]
```

## 3. Busque todos os Pokemons com attack > 50 e height > 0.5.
```js
const mongoose = require ('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect (dbURI);
const Schema = mongoose.Schema;
const _schema = {};
const pokemonSchema = new Schema (_schema);
const PokemonModel = mongoose.model ('pokemon', pokemonSchema);
const query = {attack: {$gt: 50}, height: {$gt: "0.5"}};
PokemonModel.find (query, (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Buscou:', data);
});
```

## 4. Altere, inserindo, o Pokemon Nerdmon com attack = 49 e com os valores dos outros campos a sua escolha.
```js
const mongoose = require ('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect (dbURI);
const Schema = mongoose.Schema;
const _schema = {
    name: String,
    created: {type: Date, default: Date.now},
    type: [String],
    attack: Number,
    defense: Number,
    height: String,
    hp: Number,
    Speed: Number
};
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model ('pokemons', pokemonSchema);
const query = {
    name: 'Nerdmon',
    attack: 49
};
PokemonModel.update (query, (err, data) => {
    if (err) return console.log ('ERRO:', err);
    return console.log ('Inseriu:', data);
});
```
Saída
```
Inseriu: { ok: 1, nModified: 1, n: 1 }
```
## 5. Remova todos os Pokemons com attack > 50.
```js
const mongoose = require ('mongoose');
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect (dbURI);
const Schema = mongoose.Schema;
const _schema = {
    name: String,
    created: {type: Date, default: Date.now},
    type: [String],
    attack: Number,
    defense: Number,
    height: String,
    hp: Number,
    Speed: Number
};
const pokemonSchema = new Schema (_schema);
const PokemonModel = mongoose.model ('pokemons', pokemonSchema);
const query = {attack: {$gt: 50}};
PokemonModel.remove (query, (err, data) => {
    if (err) return console.log ('ERRO', err);
    return console.log ('Delete', data);
});
```
Saída
```
result: { ok: 1, n: 461 },
```
