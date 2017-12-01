# Node.js - Aula 07 - Exercício
**user:** [carloshoribeiro](https://github.com/carloshoribeiro)  
**autor:** Carlos Henrique Ribeiro

### 1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

#### ex1_init_event.js
```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function CarlitoEmitter(data) {
    this.data = data;
    this.on('init', init);
    EventEmitter.call(this);
}


CarlitoEmitter.prototype.init = function () {
    this.emit('init', this.data);
};

util.inherits(CarlitoEmitter, EventEmitter);


function init (data) {
    console.log('init =>', data.text);
}

module.exports = CarlitoEmitter;
```

#### ex1_init_event_main.js
```js
'use strict';

const CarlitoEmitter = require( './ex1_init_event.js' );
const myCarlitoEmitter = new CarlitoEmitter({ text: 'Carlitos'});

myBazingaEmitter.init();
```

#### Saída
```
$ node ex1_init_event_main.js
init => Carlitos
```


### 2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

#### ex2_readdir_promise.js
```js
'use strict';

const fs =  require('fs');

function readDir(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, res) {
            err ? reject(err) : resolve(res);
        });
    });
}

module.exports = readDir;
```

#### ex2_readdir_promise_main.js
```js
'use strict';

const readDir = require('./ex2_readdir_promise.js');

function myPromiseAll(arr) {
    return Promise.all(arr)
    .then(result => { return result; })
    .catch(err => { throw err; });
}

myPromiseAll([
    readDir('../class07'),
    readDir('../class02')
])
.then(result => console.log(result))
.catch(err => console.log(err));
```

### 3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

#### 3 - sem - `exec()`:
- `find`,
- `create`,
- `remove`


#### 3 - com - `exec()`:
- `find`,
- `findOne`,
- `update`

#### ex3_mongoose_promise.js
```js
'use strict';

// Conexão com o mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-modulo-nodejs-exercises');

// Definição do Schema
const Schema = mongoose.Schema;
const bandsSchema = new Schema({
  name:  String
});

// Definição do Model
const BandsModel = mongoose.model('bands', bandsSchema);

const band1 = {
    name: 'Manonas assassinas'
};

// 3 métodos - sem exec()

const findPromise = BandsModel.find({name: 'Linkin Park'});
findPromise.then(success, error);
// [ { name: 'Linkin Park', _id: 56ff424dcb3f181e1d0ae7a6 } ]

const createPromise = BandsModel.create(band1)
createPromise.then(success , error);
// { _id: 56ff4d03d20057e62669be34, name: 'Manonas assassinas', __v: 0 }

const removePromise = BandsModel.remove({name : band1.name });
removePromise.then(success , error);
// result: { ok: 1, n: 1 }

// 3 métodos - com exec()

const findPromiseExec = BandsModel.find({name: 'Ramones'}).exec();
findPromiseExec.then(success, error);
//[ { name: 'Ramones', _id: 56ff422bcb3f181e1d0ae7a5 } ]

const findOnepromise = BandsModel.findOne({ name: 'Metallica' }).exec();
findOnepromise.then(success , error);
//{ name: 'Metallica', _id: 56ff3ef8cb3f181e1d0ae7a4 }

const updatePromise = BandsModel.update({ name : 'Metallica'}, {name: '+Metallica'}).exec();
updatePromise.then(success , error);
//{ ok: 1, nModified: 1, n: 1 }


function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```
