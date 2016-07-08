# NodeJS - Aula 07 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1458281013095

## Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

```js

'use strict';

const EventEmitter = require('events').EventEmitter,
      util         = require('util');


function Message(data) {
    this.data = data;
    this.on('show', show);
    this.on('error', err);
    EventEmitter.call(this);
}


Message.prototype.init = function() {
    if(this.data) {
        this.emit('show', this.data.name);
    } else {
        this.emit('error', new TypeError('No name'));
    }
}

util.inherits(Message, EventEmitter);


function show(data) {
    console.log(data);
}

function err(error) {
    throw error;
}
const message = new Message({
    name: 'Igor Luíz <Halfeld>'
});

message.init();
```

## Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

```js

'use strict';


const fs = require('fs');


function readDir(path) {
    return new Promise( (resolve, reject) => {
        fs.readdir(path, (err, data) => err ? reject(err) : resolve(data));
    });
}

function readAll(arr) {
    return Promise.all(arr)
            .then(res => { return res })
            .catch(err => { throw err }); 
}

readAll([
    readDir('../event-emitter'),
    readDir('../../class-5')
])
.then(res => console.log(res))
.catch(err => console.log(err));
```


## Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

### Create

#### Código
```js

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peoples');

const Schema = mongoose.Schema;

const _schema = {
    name: String,
    age: Number,
    height: Number
};

const User = mongoose.model('users', _schema);

// Create 

let me = {
    name: "Igor Luíz",
    age: 17,
    height: 1.97
}

User.create(me)
    .then((data) => {
        console.log(`Inseriu isso aí véi: ${data}`);
    })
    .catch(err => {
        throw err ;
    });
```

#### Saída no terminal
```sh
$ node createPromise.js
Inseriu isso aí véi: { _id: 56eb95a5c198f9200bec1134,
  height: 1.97,
  age: 17,
  name: 'Igor Luíz',
  __v: 0 }
```

### Find

#### Código
```js

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peoples');

const Schema = mongoose.Schema;

const _schema = {
    name: String
};

const User = mongoose.model('users', _schema);


// Find

let query = { name: /igor luíz/i }

let result = User.find(query).exec();
result.then((data) => {
        console.log(`Acho isso aí véi: ${data}`);
    }).catch(err => {
        throw err ;
    });
```

#### Saída no terminal

```sh
$ node findPromise.js
Acho isso aí véi: { __v: 0,
  height: 1.97,
  age: 17,
  name: 'Igor Luíz',
  _id: 56eb95a5c198f9200bec1134 }
```


### Update

#### Código
```js

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peoples');

const Schema = mongoose.Schema;

const _schema = {
    name: String
};

const User = mongoose.model('users', _schema);


// Update

let query = { name: /igor luíz/i },
    mod = {name: "Igor Luíz | Halfeld"}

let result = User.update(query, mod).exec();
result.then((data) => {
        console.log(data);
    }).catch(err => {
        throw err ;
    });
```

#### Saída no terminal

```sh
$ node updatePromise.js
{ ok: 1, nModified: 1, n: 1 }
```



### Remove

#### Código
```js

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peoples');

const Schema = mongoose.Schema;

const _schema = {
    name: String
};

const User = mongoose.model('users', _schema);


// Find

let query = {name: /igor luíz | halfeld/i }

let result = User.remove(query).exec();
result.then((data) => {
        console.log(data);
    }).catch(err => {
        throw err ;
    });
```

#### Saída no terminal

```sh
$ node deletePromise.js
{ ok: 1, nModified: 1, n: 1 }
```