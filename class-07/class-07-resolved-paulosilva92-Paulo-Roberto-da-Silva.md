# Node.js - Aula 07 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Mon Mar 14 2016 02:12:56 GMT-0300 (BRT)

## Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

```js

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Pokemon(data){
    this.data = data;
    this.on('init:pokemon', avisaInit);
    this.on('error',avisaError);
    EventEmitter.call(this);
};

Pokemon.prototype.init = function(){
    if (this.data.name) {
        this.emit('init:pokemon');
    } else {
        this.emit('error');
    };
};

function avisaInit(){
    console.log('init ativado');
};

function avisaError(){
    console.log('deu erro');
};


util.inherits(Pokemon,EventEmitter);

const data = {name : 'Pikachu'};

const poke = new Pokemon(data);

poke.init();
```

## Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

```js
'use strict';

const fs = require( 'fs' );

function readFiles(path){
   return new Promise(function(resolve, reject){
      fs.readdir( path, (err, data) => {
        err ? reject( err ) : resolve( data );
      });
   });
}

function promiseAll(arr){
   return Promise.all(arr).then( function success(res){
      return res;
   })
   .catch(function error(err){
      throw err;
   });
};

promiseAll([
   readFiles( './'  ),
   readFiles( '../'  ),
])
.then( res => console.log(res))
.catch(err => console.error(err));
```

## Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

#### find()

```js
var promise = Pokemon.find({}).where({ speed : {$gte :  300}}).exec();
promise.then(success, error);

function success(data){
   console.log(data );
}

function error(err){
   console.error(err );
}
```

#### delete()

```js
var promise = Pokemon.remove({
   _id: '56e4edea660f144f23c1ad6c'
}).exec();
promise.then(success, error);

function success(data){
   console.log(, data );
}

function error(err){
   console.error(err );
}
```

#### delete()

```js
let promise = Pokemon.remove({_id :’ '5666ff2a9fa2a10c25d57ef7'’})
promise.then(success , error);

function success(data){
   console.log(, data );
}

function error(err){
   console.error(err );
}
```
