# Node.js - Aula 07 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## 1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 como base (use ele no prototype).  

`eventEmitter.js`  
```js  
'use strict';  

//chamando os módulos necessários  
const EventEmitter = require('events').EventEmitter;  
const util = require('util');  

//ouvindo  
function HelloWorld(data){  
  this.data = data;  
  this.on('hello:init', showInit);  
  this.on('erro', showError);  

  EventEmitter.call(this);  
}  

//emitindo  
HelloWorld.prototype.init = function() {  
  if (this.data.msg) {  
    this.emit('hello:init', this.data);  
  } else {  
    this.emit('erro', new TypeError('Nenhuma mensagem para mostrar'));  
  }  
};  

//utilizando o util para herança, inserção de objetos, logs, etc  
util.inherits(HelloWorld, EventEmitter);  

//função do showInit;  
function showInit (data){  
  console.log(data.msg);  
}  

//função do showError  
function showError (err){  
  throw err;  
}  

//criando a mensagem para ser mostrada  
const mensagem = new HelloWorld({msg: 'Olá, mundo!'});  
mensagem.init();  
```


Saída no terminal:  
```  
$ node event.js  
Olá, mundo!  
```


## 2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.  

`readFilesPromise.js`  

```js  
'use strict';  

const fs = require('fs');  

function readDir (path) {  
  return new Promise(function (res, rej) {  
    fs.readdir(path, function (err, data) {  
      err ? rej(err) : res(res);  
    });  
  });  
}  

readDir('./exemplos/')  
  .then(function (data) {  
    success(data);  
  })  
  .catch(function (err){  
    error(err);  
  });  

function success (data) {  
  console.log(data);  
}  

function error (err) {  
  console.log(err);  
}  
```


Saída no terminal:  

```  
$ node readFilesPromise.js  
[Function]  
```


Fiz um segundo teste, alterando o caminho desejado, de `./exemplos/` para `./exemploo/`, então obtive o segundo erro, assumindo o estado de *reject*:  

```  
$ node readFilesPromise.js  
{ [Error: ENOENT: no such file or directory, scandir './exemploo/']  
  errno: -2,  
  code: 'ENOENT',  
  syscall: 'scandir',  
  path: './exemploo/' }  
```


## 3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.  

Os *methods* escolhidos foram:  

* `create`;  
* `find`;  
* `update`;  
* `delete`.


`createPromise.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/bancoTeste');  
const Schema = mongoose.Schema;  

const _schema = {  
  nome: {type: String, match: /^./i },    
    idade: {type: Number, min: 1},  
    sexo: {type: String, enum: ['M', 'F']},  
    cidade: {type: String, maxlength: 10},  
    estado: {type: String, minlength: 2}  
}  

const personData = {  
  nome: 'Ednilson Amaral',  
  idade: 24,  
  sexo: 'M',  
  cidade: 'Itapeva',  
  estado: 'SP'  
}  

const personSchema = new Schema(_schema);  
const Person = mongoose.model('Person', personSchema);  

//create  
Person.create(personData).then(success, error);  

function success(data) {  
  console.log('Inseriu: ', data);  
}  

function error (error) {  
  console.log('Erro: ', error);  
}  
```


Saída no Terminal:  

```  
$ node createPromise.js  
Inseriu:  { _id: 56d59b09d95812f013f70a68,  
  estado: 'SP',  
  cidade: 'Itapeva',  
  sexo: 'M',  
  idade: 24,  
  nome: 'Ednilson Amaral',  
  __v: 0 }  
```


`findPromise.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/bancoTeste');  
const Schema = mongoose.Schema;  

const _schema = {  
  nome: {type: String, match: /^./i },  
    idade: {type: Number, min: 1},  
    sexo: {type: String, enum: ['M', 'F']},  
    cidade: {type: String, maxlength: 10},  
    estado: {type: String, minlength: 2}  
}  

const personSchema = new Schema(_schema);  
const Person = mongoose.model('Person', personSchema);  

const personFind = {nome: /ednilson amaral/i};  

//find  
let promise = Person.find(personFind).exec();  
promise.then(success, error);  

function success(data) {  
  console.log('Encontrou: ', data);  
}  

function error (error) {  
  console.log('Erro: ', error);  
}  
```


Saída no terminal:  

```  
$ node findPromise.js  
Encontrou:  [ { __v: 0,  
    estado: 'SP',  
    cidade: 'Itapeva',  
    sexo: 'M',  
    idade: 24,  
    nome: 'Ednilson Amaral',  
    _id: 56d59ae24d6f8ae513f6ff1d },  
  { __v: 0,  
    estado: 'SP',  
    cidade: 'Itapeva',  
    sexo: 'M',  
    idade: 24,  
    nome: 'Ednilson Amaral',  
    _id: 56d59b09d95812f013f70a68 } ]  
```


`updatePromise.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/bancoTeste');  
const Schema = mongoose.Schema;  

const _schema = {  
  nome: {type: String, match: /^./i },    
    idade: {type: Number, min: 1},  
    sexo: {type: String, enum: ['M', 'F']},  
    cidade: {type: String, maxlength: 10},  
    estado: {type: String, minlength: 2}  
}  

const personSchema = new Schema(_schema);  
const Person = mongoose.model('Person', personSchema);  

//update  
const personUpdate = {nome: 'Ed'};  
const personId = {"_id": "56d59ae24d6f8ae513f6ff1d"};  

let promise = Person.update(personId, personUpdate).exec();  
promise.then(success, error);  

function success(data) {  
  console.log('Encontrou: ', data);  
}  

function error (error) {  
  console.log('Erro: ', error);  
}  
```


Saída no terminal:  

```  
$ node updatePromise.js  
Encontrou:  { ok: 1, nModified: 1, n: 1 }  
```


`deletePromise.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/bancoTeste');  
const Schema = mongoose.Schema;  

const _schema = {  
  nome: {type: String, match: /^./i },  
    idade: {type: Number, min: 1},  
    sexo: {type: String, enum: ['M', 'F']},  
    cidade: {type: String, maxlength: 10},  
    estado: {type: String, minlength: 2}  
}  

const personSchema = new Schema(_schema);  
const Person = mongoose.model('Person', personSchema);  

//remove  
const personId = {"_id": "56d59b09d95812f013f70a68"};  

let promise = Person.remove(personId).exec();  
promise.then(success, error);  

function success(data) {  
  console.log('Removeu: ', data);  
}  

function error (error) {  
  console.log('Erro: ', error);  
}  
```


Saída no terminal:  

```  
$ node deletePromise.js  
Removeu:  { result: { ok: 1, n: 1 },  
```