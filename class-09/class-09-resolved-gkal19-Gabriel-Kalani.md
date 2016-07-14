# Node.js - Aula 09 - Exercício  

**user:** [gkal19](https://github.com/gkal19) 

**autor:** Gabriel Kalani

**Data:** 1468455084502

### 1 - Faça uma lista de todas as funções que o modulo assert possui e coloque no md.

* `assert(value[, message])`;  
* `assert.deepEqual(actual, expected[, message])`;  
* `assert.deepStrictEqual(actual, expected[, message])`;  
* `assert.doesNotThrow(block[, error][, message])`;  
* `assert.equal(actual, expected[, message])`;  
* `assert.fail(actual, expected, message, operator)`;  
* `assert.ifError(value)`;  
* `assert.notDeepEqual(actual, expected[, message])`;  
* `assert.notDeepStrictEqual(actual, expected[, message])`;  
* `assert.notEqual(actual, expected[, message])`;  
* `assert.notStrictEqual(actual, expected[, message])`;  
* `assert.ok(value[, message])`;  
* `assert.strictEqual(actual, expected[, message])`;  
* `assert.throws(block[, error][, message])`.

### 2 - Modifique todos os testes que estão usando assert.equal para assert.deepStrictEqual(valor, result, "comentario") faça todos passarem, coloque os testes no md.

> Primeiramente, O teste deve falhar

```
`// add.spec.js
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 2, ['Os números não são iguais!']);
```

```shell
gkal19:~/workspace/dever/nodejs $ mocha add.spec.js

assert.js:89
  throw new assert.AssertionError({
  ^
AssertionError: Os números não são iguais!
    at Object.<anonymous> (/home/ubuntu/workspace/dever/nodejs/add.spec.js:5:8)
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

> Agora o teste deve passar

```
// add.spec.js
'use strict';  

const assert = require('assert');  

assert.deepStrictEqual(3, 3, ['Os números não são iguais!']);
```

```shell
gkal19:~/workspace/dever/nodejs $ mocha add.spec.js

  1 passing (3ms)
```

> No exercício abaixo, vou logo falando que os arquivos são quase os mesmos das aulas do professor Pompeu, encontrados no [Link](https://github.com/Webschool-io/be-mean-instagram/tree/master/Apostila/module-nodejs/src/tdd/chai) ao lado.

## Na Calculadora do Chai, crie mais 3 testes, um para divisão, outro para multiplicação e um para raiz quadrada, lembrando que não deve aceitar divisão por zero. 

> Usei o `expect` para testar a exceção da divisão por zero.`

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
	describe('calc testing',  () => {  
		it('sum of two number',  () => {  
			expect(calc.sum(1,1)).to.equal(2);  
		});  

		it('sub of two number',  () => {  
			expect(calc.sub(2,5)).to.equal(-3);  
		});  

		it('mult of two number',  () => {  
			expect(calc.mult(5,5)).to.equal(25);  
		});  

		it('div of two number',  () => {  
			expect(calc.div(15,5)).to.equal(3);  
		});  

		it('div of two number dont aceept div by zero',  () => {  
			expect(calc.div(15,0)).to.equal(0);  
			expect(calc.div(0,1)).to.equal(0);  
		});  

		it('sqtr of a number',  () => {  
			expect(calc.sqtr(16)).to.equal(3);  
		});  
	});  
});  
```

> FALHANDO:

```shell
gkal19:~/workspace/dever/nodejs $ mocha calc.spec.js  

  calc  
    calc testing  
      ✓ sum of two number  
      ✓ sub of two number  
      ✓ mult of two number  
      ✓ div of two number  
      ✓ div of two number dont aceept div by zero  
      1) sqtr of a number  


  5 passing (24ms)  
  1 failing  

  1) calc calc testing sqtr of a number:  

      AssertionError: expected 4 to equal 3  
      + expected - actual  

      -4  
      +3  

      at Context.<anonymous> (calc.spec.js:30:29)  
```

> PASSANDO:

```shell
gkal19:~/workspace/dever/nodejs $ mocha calc.spec.js  

  calc  
    calc testing  
      ✓ sum of two number  
      ✓ sub of two number  
      ✓ mult of two number  
      ✓ div of two number  
      ✓ div of two number dont aceept div by zero  
      ✓ sqtr of a number  

  6 passing (20ms)
```

## Use o exemplo  de testes do *getter* e *setter* e crie um teste para o *method*, use o exemplo (lembre-se de usar callback é testar):  
[LINK](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-method.js)

```js 
// schema-method.spec.js
'use strict';  

const expect = require('chai').expect,  
      Pokemon = require('./schema-method'),  
      util = require('util');  

describe('Testando as Methods', () => {  
  const namePokemonzinho = {name: 'Pikachu'};  
  const type = {type: 'fogo'};  

  describe('method... ', () => {  
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

```shell
gkal19:~/workspace/dever/nodejs mocha schema-method.spec.js  

  Testando Methods  
    method...  
      ✓ expect type.type to be eq  

  1 passing (20ms)  
```

## Use o exemplo  de testes do *getter* e *setter*, o *static*, use o exemplo (lembre-se de usar callback é testar):  
[LINK](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/src/mongoose-atomic/schema-static.js)

```js  
// schema-static.spec.js
'use strict';  

const expect = require('chai').expect,  
      Pokemon = require('./schema-method'),  
      util = require('util');  

describe('Testando Static', () => {  
  const name = {name: /pikachu/i};  

  describe('static... ', () => {  
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

```
gkal19:~/workspace/dever/nodejs mocha schema-static.spec.js  

  Testando Static  
    static...  
      ✓ expect name.name to be eq  

  1 passing (56ms)  
```

## No *controller* ainda faltam dois métodos para testar, o *update* e *delete*, crie-os  e faça os testes, no mesmo aRquivo que contém os testes, *create* e *retrieve*.

```js
// UPDATE
'use strict';  

const expect = require('chai').expect;  
const ctrl = require('./pokemon-controller');  

describe('Controller of Pokemons', () => {  
  describe('Atualizar um Pokémon... ', () => {  
    const description = {description: 'Bem louco'};  
    const attack = {attack: {$gte: 25}};  

    it('expect update a pokemon ', done => {  
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
// OUTPUT UPDATE
  Controller of Pokemons  
    Atualizar um Pokémon...  
Alterou: { result: { ok: 1, n: 1},  

    ✓ expect update a pokemon

1 passing (56ms) 

// DELETE  
'use strict';  

const expect = require('chai').expect;  
const ctrl = require('./pokemon-controller');  

describe('Controller of Pokemons', () => {  
  describe('Deletar um Pokémon... ', () => {  
    const description = {description: 'Fui deletado </3'};  
    const attack = {attack: {$gte: 25}};  

    it('expect delete a pokemon ', done => {  
      ctrl.delete(attack,(err,data) => {  
        expect(err).to.not.exist;  
        expect(data._id).to.exist;  
        expect(data.attack).to.be.eq(attack);  

        done();  
      });  
    });  
  });  
}); 
// OUTPUT DELETE
  Controller of Pokemons  
    Deletar um Pokémon...  
Deletou: { result: { ok: 1, n: 1},  

    ✓ expect delete a pokemon  

1 passing (56ms)  
```

## Defina TDD em 3 linhas, baseado no que foi dito até o momento. 
TDD é o desenvolvimento de softwares orientado a testes, TDD é o Desenvolvimento Orientado por Testes ou para os mais THUG LIFE'S, TEST DRIVEN DEVELOPMENT, TDD é vida, TDD é amor. TDD te ajuda reduzindo o tempo de deploys e correção de bugs. Basicamente ele se baseia em pequenos ciclos de repetições e nós desenvolvemos o nosso software baseado em testes que são escritos antes do nosso código de produção!
- Clico de Desenvolvimento
  + RED
    * Escrevemos esse teste em que inicialmente ele não passa
    
    (Depois disso, adicionamos uma nova funcionalidade do sistema)
    
  + GREEN
    * Fazemos o teste passar nessa etapa
  + REFACTOR
    * Refatoramos o código da nova funcionalidade
    
    (E por fim, escrevemos o próximo Teste)
    
Use TDD e seja feliz :heart:

Fiz um belo Marketing agora.
