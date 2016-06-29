# Node.js - Aula 09 - Exercício 

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data** 1465802422

### 1 - Faça uma lista de todas as funções que o módulo assert possui e coloque no MD.
---------

 `assert(value[, message])`;
 
 `assert.deepEqual(actual, expected[, message])`; 
 
 `assert.deepStrictEqual(actual, expected[, message])`; 
 
 `assert.doesNotThrow(block[, error][, message])`;  
 
 `assert.equal(actual, expected[, message])`;  
 
 `assert.fail(actual, expected, message, operator)`; 
 
 `assert.ifError(value)`;
 
 `assert.notDeepEqual(actual, expected[, message])`;
 
 `assert.notDeepStrictEqual(actual, expected[, message])`;
 
 `assert.notEqual(actual, expected[, message])`; 
 
 `assert.notStrictEqual(actual, expected[, message])`; 
 
 `assert.ok(value[, message])`;  
 
 `assert.strictEqual(actual, expected[, message])`;
 
 `assert.throws(block[, error][, message])`.

### 2 - Modifique todos os testes que estão sendo usados no `assert.equal` para `assert.deepStrictEqual`(valor, result, 'comentário'), faça todos passarem, coloque os testes no MD.
-----------

#### Teste COM Erro
-----

```js
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 2, ['Opa, parece que os números apresentados não são iguais!']);  
```
#### Resultado
```shell
$ mocha add.spec.js

assert.js:89
  throw new assert.AssertionError({
  ^
AssertionError: Opa, parece que os números apresentados não são iguais!
    at Object.<anonymous> (/home/ubuntu/workspace/dever/nodejs/tdd/add.spec.js:5:8)
    at Module._compile (module.js:435:26)
    at Object.Module._extensions..js (module.js:442:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:313:12)
    at Module.require (module.js:366:17)
    at require (module.js:385:17)
    at /home/ubuntu/.nvm/versions/node/v4.2.4/lib/node_modules/mocha/lib/mocha.js:220:27
    at Array.forEach (native)
    at Mocha.loadFiles (/home/ubuntu/.nvm/versions/node/v4.2.4/lib/node_modules/mocha/lib/mocha.js:217:14)
    at Mocha.run (/home/ubuntu/.nvm/versions/node/v4.2.4/lib/node_modules/mocha/lib/mocha.js:469:10)
    at Object.<anonymous> (/home/ubuntu/.nvm/versions/node/v4.2.4/lib/node_modules/mocha/bin/_mocha:404:18)
    at Module._compile (module.js:435:26)
    at Object.Module._extensions..js (module.js:442:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:313:12)
    at Function.Module.runMain (module.js:467:10)
    at startup (node.js:136:18)
    at node.js:963:3
```

#### Teste SEM Erro
-----

```js
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 3, ['Opa, parece que os números apresentados são iguais!']);  
```
#### Resultado
```shell
$ mocha add.spec.js

0 passing (3ms)
```

### 3 - Na Calculadora do Chai, crie mais 3 testes, um para divisão, outro para multiplicação e um para raiz quadrada, lembrando que não deve aceitar divisão por zero.
> Resolvi usar o expect para testar a exceção da divisão por zero junto com o código para a calculadora.

#### Teste COM Erro
-----
```js
// calc.js
'use strict';  

let sum  = (a,b) => a+b;  
let sub  = (a,b) => a-b;  
let mult = (a,b) => a*b;  
let div  = (a,b) => a === 0 || b === 0 ? 0 : a / b;  
let sqtr = a => Math.sqrt(a);  


module.exports = {  
    sum  : sum,  
    sub  : sub,  
    mult : mult,  
    div  : div,  
    sqtr : sqtr  
};  
```

```js
// calc.spec.js
'use strict';  

const expect = require('chai').expect;  
const calc = require('./calc');  

describe('calc', function() {  
    describe('Teste de calculo',  () => {  
        it('Soma de dois números',  () => {  
            expect(calc.sum(2,2)).to.equal(4);  
        });  

        it('Subtração de dois números',  () => {  
            expect(calc.sub(2,5)).to.equal(-3);  
        });  

        it('Multiplicação de dois números',  () => {  
            expect(calc.mult(3,3)).to.equal(9);  
        });  

        it('Divisão de dois números',  () => {  
            expect(calc.div(25,5)).to.equal(5);  
        });  

        it('Divisão de dois números sem 0',  () => {  
            expect(calc.div(15,0)).to.equal(0);  
            expect(calc.div(0,1)).to.equal(0);  
        });  

        it('sqtr of a number',  () => {  
            expect(calc.sqtr(16)).to.equal(3);  
        });  
    });  
});  
```
#### Resultado
```shell
$ mocha add.spec.js
gkal19:~/workspace/dever/nodejs/tdd/chai $ mocha calc.spec.js


  calc
    Teste de calculo
      1) Soma de dois números
      2) Subtração de dois números
      3) Multiplicação de dois números
      4) Divisão de dois números
      ✓ Divisão de dois números sem aceitar 0
      5) sqtr of a number


  1 passing (18ms)
  5 failing

  1) calc Teste de calculo Soma de dois números:

      AssertionError: expected 3 to equal 4
      + expected - actual

      -3
      +4
      
      at Context.<anonymous> (calc.spec.js:9:38)

  2) calc Teste de calculo Subtração de dois números:

      AssertionError: expected -1 to equal -3
      + expected - actual

      --1
      +-3
      
      at Context.<anonymous> (calc.spec.js:13:38)

  3) calc Teste de calculo Multiplicação de dois números:

      AssertionError: expected 6 to equal 9
      + expected - actual

      -6
      +9
      
      at Context.<anonymous> (calc.spec.js:17:39)

  4) calc Teste de calculo Divisão de dois números:

      AssertionError: expected 3 to equal 5
      + expected - actual

      -3
      +5
      
      at Context.<anonymous> (calc.spec.js:21:39)

  5) calc Teste de calculo sqtr of a number:

      AssertionError: expected 4 to equal 3
      + expected - actual

      -4
      +3
      
      at Context.<anonymous> (calc.spec.js:30:38)
0 passing (3ms)
```

#### Teste SEM Erro
-----
```js
// calc.spec.js
'use strict';  

const expect = require('chai').expect;  
const calc = require('./calc');  

describe('calc', function() {  
    describe('Teste de calculo',  () => {  
        it('Soma de dois números',  () => {  
            expect(calc.sum(2,2)).to.equal(4);  
        });  

        it('Subtração de dois números',  () => {  
            expect(calc.sub(2,3)).to.equal(-1);  
        });  

        it('Multiplicação de dois números',  () => {  
            expect(calc.mult(3,3)).to.equal(9);  
        });  

        it('Divisão de dois números',  () => {  
            expect(calc.div(20,5)).to.equal(4);  
        });  

        it('Divisão de dois números sem aceitar 0',  () => {  
            expect(calc.div(16,0)).to.equal(0);  
            expect(calc.div(0,1)).to.equal(0);  
        });  

        it('sqtr of a number',  () => {  
            expect(calc.sqtr(25)).to.equal(5);  
        });  
    });  
});    
```

#### Resultado
```shell
$ mocha calc.spec.js

  calc
    Teste de calculo
      ✓ Soma de dois números
      ✓ Subtração de dois números
      ✓ Multiplicação de dois números
      ✓ Divisão de dois números
      ✓ Divisão de dois números sem aceitar 0
      ✓ sqtr of a number


  6 passing (12ms)
```

> Sim! Os códigos estão sim idênticos aos exemplos que o Professor Pompeu deixou na apostila.

### 4 - Use o exemplo de testes do getter e setter e crie um teste para o method, use o exemplo (lembre-se de usar callback é testar):

```js
// schema-method.spec.js
'use strict';  

const expect = require('chai').expect,  
Pokemon = require('./schema-method'),  
util = require('util');  

describe('Testando as Methods', () => {  
  const name = {name: 'Charmander'};  
  const type = {type: 'Fire'};  

  describe('Method: ', () => {  
    it('expect type.type to be eq ', () => {  
      Pokemon.findOne(type, (err, data) => {  
        expect(err).to.not.exist;  
        expect(data.type).to.be.eq(type);  

        done();  
      });  
    });  
  });  
});  
```
#### Resultado
```shell
$ mocha schema-method.spec.js  

  Testando Methods  
    method...  
      ✓ expect type.type to be eq  


  1 passing (30ms) 
```

### 5 - Use o exemplo de testes do getter e setter, o static, use o exemplo (lembre-se de usar callback é testar):
```js
'use strict';  

const expect = require('chai').expect,  
Pokemon = require('./schema-method'),  
util = require('util');

describe('Testando o Static', () => {  
  const name = {name: /Charmander/i};  

  describe('Static... ', () => {  
    it('expect name.name to be eq ', () => {  
      Pokemon.findOne(name, (err, data) => {  
        expect(err).to.not.exist;  
        expect(data.name).to.be.eq(name);  
        done();  
      });  
    });  
  });  
}); 
```
#### Resultado
```shell
$ mocha schema-static.spec.js  


  Testando o Static  
    static...  
      ✓ expect name.name to be eq  


  1 passing (60ms)  
```

### 6 - No controller ainda faltam dois métodos para testar, o update e delete, crie-os e faça os testes, no mesmo aRquivo que contém os testes, create e retrieve.
##### Update
```js
// pokemon-controller.spec.js
'use strict';  

const expect = require('chai').expect;  
const ctrl = require('./pokemon-controller');  

describe('Controller dos Pokémons', () => {  
  describe('Atualizar um Pokémon... ', () => {  
    const description = {description: 'Olá, eu sou Dollynho!'};  
    const attack = {attack: {$gte: 25}};  

    it('Expect atualizou o pokemon ', done => {  
      ctrl.update(description, attack,(err,data) => {  
        expect(err).to.not.exist;  
        expect(data._id).to.exist;  
        expect(data.attack).to.be.eq(attack);  
        expect(data.description).to.be.eq(description);  

        done();  
      });  
    });  
  });  
});  
```
#### Resultado
```js
$ mocha pokemon-controller.spec.js  

  Controller dos Pokémons  
    Atualizar um Pokémon...  
    Alterou: { result: { ok: 1, n: 1},  

    ✓ Expect atualizou o pokemon  


1 passing (56ms) 
```
##### Delete
```js
'use strict';  

const expect = require('chai').expect;  
const ctrl = require('./pokemon-controller');  

describe('Controller dos Pokemons', () => {  
  describe('Deletar um Pokémon... ', () => {  
    const description = {description: 'Olá, eu sou Dollynho!'};  
    const attack = {attack: {$gte: 25}};  

    it('Expect deletou um Pokémon ', done => {  
      ctrl.delete(attack,(err,data) => {  
        expect(err).to.not.exist;  
        expect(data._id).to.exist;  
        expect(data.attack).to.be.eq(attack);  

        done();  
      });  
    });  
  });  
});  
```
#### Resultado
```shell
$ mocha pokemon-controller.spec.js  

  Controller dos Pokemons  
    Deletar um Pokémon...  
    Deletou: { result: { ok: 1, n: 1},  

    ✓ Expect deletou um Pokémon  


1 passing (56ms)  
```

### 7 - Defina TDD em 3 linhas, baseado no que foi dito até o momento.

TDD é o desenvolvimento de softwares orientado a testes. Traduzindo suas siglas, Test Driven Development. O nosso software desenvolvido é baseado em testes que são escritos antes do nosso código de produção!
Basicamente o TDD se baseia em pequenos ciclos de repetições, onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda não temos a implementação da funcionalidade em questão e, em seguida, implementamos a funcionalidade para fazer o teste passar!