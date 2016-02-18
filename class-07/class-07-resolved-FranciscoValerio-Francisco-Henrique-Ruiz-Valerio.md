# Node.js - Aula 07 - Exercício

**user:** [FranciscoValerio](https://github.com/FranciscoValerio)

**autor:** Francisco Henrique Ruiz Valério

#1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).#

**arquivo (eventEmitter.js)**
```JS
'use strict';

const EventEmitter = require( 'events' ).EventEmitter;
const util         = require( 'util' );

function Aviso ( data ) {
   this.data = data
   this.on('aviso:init', sendInit);
   this.on('error', sendError);
   EventEmitter.call( this );
}

Aviso.prototype.init = function () {
   if ( this.data.msg ){
      this.emit('aviso:init', this.data);
   } else {
      this.emit('error', new TypeError('Message empty!' ) );
   }
};

util.inherits( Aviso, EventEmitter );

function sendInit( data ) {
   console.log(data.msg);
}

function sendError( err ) {
  throw err;
}

module.exports = Aviso;
```

**arquivo (emitter.js)**
```JS
'use strict';

const Aviso = require( './eventEmitter' );

const aviso = new Aviso({ msg: 'class-07'});

aviso.init();
```

#2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.#

**arquivo (read-dir.js)**
```JS
'use strict';

const fs = require( 'fs' );

function readDirectory(path){
   return new Promise(function(resolve, reject){
      fs.readdir( path, (err, data) => {
        err ? reject( err ) : resolve( data );
      });
   });
}

module.exports = readDirectory;
```

**arquivo (promisse-all)**
```JS
'use strict';

function promiseAll(arr){
   return Promise.all(arr).then( function success(res){
      return res;
   })
   .catch(function error(err){
      throw err;
   });
}

module.exports = promiseAll;
```

**arquivo (app.js)**
```JS
'use strict';
const promiseAll    = require( './promisse-all' );
const readDirectory = require( './read-dir'  );

promiseAll([
   readDirectory( './'  ),
   readDirectory( '../'  ),
])
.then( res => console.log('resposta:', res))
.catch(err => console.error('error:', err));
```

#3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.#

**methods**
> 1 - find().
> 2 - delete().
> 3 - update().

**Exemplo: 1 - find()**
```JS
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/francisco');
const Pokemon = require( './pokemon');

let promise = Pokemon.find({}).exec();
promise.then(success, error);

function success(data){
   console.log('retorno: ', data );
}

function error(err){
   console.error('erro: ', err );
}
```

**Exemplo: 2 - delete()**
```JS
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/francisco');
const Pokemon = require( './pokemon');

let promise = Pokemon.remove({
   _id: '56aa9ca4eabaf61c0fffc3e9'
}).exec();
promise.then(success, error);

function success(data){
   console.log('retorno: ', data );
}

function error(err){
   console.error('erro: ', err );
}
```

**Exemplo: 3 - update()**
```JS
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/francisco');
const Pokemon = require( './pokemon');

const pokemon = {
   name: "Francisco",
   type: "Fire",
   attack: 88,
   defence: 99,
   height: 1.85,
   description: "man"
};

let promise = Pokemon.update({
   _id: '56aa9ca4eabaf61c0fffc3e9'},
   pokemon
).exec();
promise.then(success, error);

function success(data){
   console.log('retorno: ', data );
}

function error(err){
   console.error('erro: ', err );
}
```
