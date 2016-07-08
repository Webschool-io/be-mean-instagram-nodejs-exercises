# Node.js - Aula 09 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira

## Parte 1
###1) Faça uma lista de todas as funções que o modulo assert possui e coloque no md.

- assert -> Sinônimo de assert.ok, apenas atesta a existência da variável se é verdadeira.
- assert.deepEqual(atual, esperado, mensagem) -> testa se o valor atual é igual ao valor esperado, e valores primitivos são testados com comparação simples "==".
- assert.deepStrictEqual(atual, esperado, mensagem) -> idêntico ao deepEqual. A única diferença que aqui os valores primitivos são testados com "===", ou seja, além do "valor" também consideram o tipo do valor.
- assert.doesNotThrow(block, error, message) -> verifica se a função passada em "block" não retorna nenhum erro.
- assert.equal(atual, esperado, mensagem) -> verifica se o valor passada como atual é igual ao esperado e em caso de objetos se o objeto atual é igual ao esperado.
- assert.fail(atual, esperado, mensagem, operador) -> O operador serve para separar o elemento atual do esperado, em caso em caso de erro e se a mensagem não estiver preenchida. Caso a mensagem esteja preenchida é exibida a mensagem.
- assert.ifError(value) -> Testa se o valor não é um valor falso e dispara o throws se for verdadeiro.
- assert.notDeepEqual(atual, esperado, mensagem) -> Testa qualquer diferença entre os objetos tanto valor quanto tipo.
- assert.notDeepStrictEqual(atual, esperado, mensagem ) -> Testa se o valor do objeto atual é diferente do esperado porém leva em consideração o tipo de objeto.
- assert.notEqual(atual, esperado, mensagem) -> Testa se o valor do atual é diferente do esperado, leva em consideração o tipo de objeto.
- assert.notStrictEqual(atual, esperado, mensagem) -> Testa se o valor do atual é diferente do esperado, não leva em consideração o tipo de objeto.
- assert.ok(valor, mensagem) -> testa se o valor é verdadeiro.
- assert.strictEqual(atual, esperado, mensagem) -> testa se o valor e tipo do objeto são iguais.
- assert.throws(função[erro], mensagem) -> testa erros em funções.

###2) Modifique todos os testes que estão usando assert.equal para assert.deepStrictEqual(valor, result, "comentario") faça todos passarem, coloque os testes no md. ( primeira parte da aula)

Alteração assert add.spec.js
```js
'use strict';

const assert = require("assert");
const add = require("./assert_add");
//assert.equal(3, add(1,2));
//assert.equal(8, add(1,2,5));

assert.deepStrictEqual(3, add(1,2), "Resultado da soma diferente");
assert.deepStrictEqual(8, add(1,2,5), "Resultado da soma diferente");
```

Resultado:
```
Falha:
MacBook-Air-Diego:9tdd diego$ mocha assert_add_spec.js 
assert.js:89
  throw new assert.AssertionError({
  ^
AssertionError: Resultado da soma diferente


Correção:
➜  test mocha assert_add_spec.js

  2 passing (4ms)
```


babystep.js
```js
'use strict';

const assert = require('assert');
const log =  require('./log');

//assert.equal('Hello World', log('Hello World'));
//assert.equal('final do hello world', log('final do hello world'));

assert.deepStrictEqual('Hello World', log('Hello World'));
assert.deepStrictEqual('final do hello world', log('final do hello world'));
```

Resultado:
```
Erro:
➜  test mocha log_spec.js

assert.js:89
  throw new assert.AssertionError({
  ^
AssertionError: 'Hell World' == 'Hello World'

Correção:
➜  test mocha log_spec.js

  2 passing (4ms)

```

###3) Na calculadora do CHAI crie mais 3 testes, um para divisão, outro para multiplicação e 1 para raiz quadrada, lembrando que não deve-se aceitar divisão por zero.

calc.js
```js
'use strict';

const Calc = {
    sum : (number1, number2) =>{
        return number1 + number2;
    }
    , subtract : (number1, number2) => {
        return number1 - number2;
    }
    , multiply : (number1, number2) => {
        return number1 * number2;
    }
    , divide : (number1, number2) => {
        return number1 / number2;
    }
    , square : (number) => {
        return Math.sqrt(number);
    }
};
module.exports = Calc;
```

chai_calc.js
```js
'use strict';
const Calc = require('../calc.js');
const expect = require('chai').expect;

describe("Calc", ()=> {
    describe("calc sum off two numbers", () =>{
        it("the function return the sum of two numbers", () => {
            const sum = Calc.sum(5,5);
            expect(sum).to.be.a('number');
            expect(sum).to.equal(10);
            expect(Calc).to.have.property('sum');
        });
    });
    describe("calc sub off two numbers", () =>{
        it("the function return the subtract of two numbers", () => {
            const subtract = Calc.subtract(5,5);
            expect(subtract).to.be.a('number');
            expect(subtract).to.equal(0);
            expect(Calc).to.have.property('subtract');
        });
    });
    describe("calc  multiply two numbers", () =>{
        it("the function return the multiply of two numbers", () => {
            const multiply = Calc.multiply(5,5);
            expect(multiply).to.be.a('number');
            expect(multiply).to.equal(25);
            expect(Calc).to.have.property('multiply');
        });
    });
    describe("calc  divide two numbers", () =>{
        const number1 = 5;
        const number2 = 1;
        it("the divisor great then 0", () => {
            expect(number2).to.be.a('number');
            expect(number2).not.to.be.NaN;
            expect(number2).to.be.at.least(1);
        });

        it("the function return the divide of two numbers", () => {
            const divide = Calc.divide(5,5);
            expect(divide).to.be.a('number');
            expect(divide).to.equal(1);
            expect(Calc).to.have.property('divide');
        });
    });
    describe("calc  square two numbers", () =>{
        it("the function return the square of two numbers", () => {
            const square = Calc.square(9);
            expect(square).to.be.a('number');
            expect(square).to.equal(3);
            expect(Calc).to.have.property('square');
        });
    });
});
```

Resultado após declaração dos testes sem implementação
```
mocha chai_ex_01.js 


  Calc
    calc sum off two numbers
      ✓ the function return the sum of two numbers
    calc sub off two numbers
      ✓ the function return the subtract of two numbers
    calc  multiply two numbers
      ✓ the function return the multiply of two numbers
    calc  divide two numbers
      1) the divisor great then 0
      2) the function return the divide of two numbers
    calc  square two numbers
      3) the function return the square of two numbers


  3 passing (27ms)
  3 failing

  1) Calc calc  divide two numbers the divisor great then 0:
     AssertionError: expected 0 to be at least 1
      at Context.<anonymous> (chai_ex_01.js:43:29)

  2) Calc calc  divide two numbers the function return the divide of two numbers:
     TypeError: Calc.divide is not a function
      at Context.<anonymous> (chai_ex_01.js:47:24)

  3) Calc calc  square two numbers the function return the square of two numbers:
     TypeError: Calc.square is not a function
      at Context.<anonymous> (chai_ex_01.js:56:24)
```

Resultado apos implementação dos métodos:
```
mocha chai_ex_01.js 


  Calc
    calc sum off two numbers
      ✓ the function return the sum of two numbers
    calc sub off two numbers
      ✓ the function return the subtract of two numbers
    calc  multiply two numbers
      ✓ the function return the multiply of two numbers
    calc  divide two numbers
      ✓ the divisor great then 0
      ✓ the function return the divide of two numbers
    calc  square two numbers
      ✓ the function return the square of two numbers


  6 passing (21ms)
```


###4) Use o expect para testar a exceção da divisão por zero. (complemento do exercício 3)

Feito no exercício antetior, abaixo apenas o teste criado para barrar divisão por 0.

```
describe("calc  divide two numbers", () =>{
        const number1 = 5;
        const number2 = 0;
        it("the divisor great then 0", () => {
            expect(number2).to.be.a('number');
            expect(number2).not.to.be.NaN;
            expect(number2).to.be.at.least(1);
        });
```


##Parte 02

###1) Use o exemplo de testes do getter e setter e crie um teste para o method. use o exemplo: (https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila%2Fmodule-nodejs%2Fsrc%2Fmongoose-atomic%2Fschema-method.js)

schema.js
```js
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/be-mean-instagram');

const _schema = {
  name:  String
, description: String
, type:   String
, attack:   Number
, defense:   Number
, height:   Number
};

const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function (cb) {
   return this.model('Pokemon').find({ type: this.type }, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports  = Pokemon;
```

schema-method-test.js
```js
'use strict';

const Pokemon = require('../schema-method');
const chai =  require('chai');
const expect = chai.expect;
const util = require('util');


describe('Pokemon methods test', ()=>{

    const Poke = { name: 'Teste', type: 'besta' };

    describe("validate find similar type", ()=> {
        it('lista apenas pokemons types iguais', (done) => {
            let pokeBusca = new Pokemon({name: 'Besta 2', type: 'besta'});
            pokeBusca.findSimilarType((err,data) => {
                expect(err).to.not.exist;
                expect(data).to.be.instanceof(Array);
                data.forEach((pokemon) => expect(pokemon).to.have.property('type').and.equal('besta'));
                done();
            });
        });
    });
});
```

Resultado:
```
mocha schema-method-test.js 


  Pokemon methods test
    validate find similar type
      ✓ lista apenas timos iguais de pokemon


  1 passing (60ms)
```

###2) Use o exemplo de testes do getter e setter, o static, use o exemplo: https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila%2Fmodule-nodejs%2Fsrc%2Fmongoose-atomic%2Fschema-static.js

schema-static.js
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/be-mean-instagram');

const _schema = {
  name:  String
, description: String
, type:   String
, attack:   Number
, defense:   Number
, height:   Number
};
const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.search = function (name, cb) {
  return this.where('name', new RegExp(name, 'i')).exec(cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;
```

schema-static-test.js 
```js 
'use strict';

const Pokemon = require('../schema-static');
const chai =  require('chai');
const expect = chai.expect;
const util = require('util');

describe('Pokemon static test', ()=>{
    describe("validate find nomes iguais", ()=> {
        it('lista pokemons de mesmo nome', (done) => {
            Pokemon.search('pikachu', function (err, data) {
                expect(err).to.not.exist;
                expect(data).to.be.instanceof(Array);
                data.forEach((pokemon) => expect(pokemon).to.have.property('name').and.equal('Pikachu'));
                done();
            });
        });
    });
});
```


Resultado:
```
mocha schema-static-test.js 


  Pokemon static test
    validate find nomes iguais
      ✓ lista pokemons de mesmo nome


  1 passing (57ms)
```

###3) No controller ainda falta dois métodos para testar, o update e o delete, crie-os e faça os testes, no mesmo arquivo que contem os testes create e retrive.

controller-poke-test.js
```js
'use strict';

const util = require('util');
const chai =  require('chai');
const expect = chai.expect;

const pokeController = require('../controller-pokemon');
const Pokemon = require('../schema-static');

describe("Controller User teste", () => {

const poke = {
    name: 'Novo Poke', type: 'besta', attack: 28, defense: 42, height: 0.87 
};

describe( "Create new pokemon", () => {
        it('expect a new pokemon has created', (done) => {
            pokeController.create(poke, (err,data) => {
                expect(err).to.not.exist;
                expect(data._id).to.exist;
                expect(data.attack).to.be.eq(28);
                expect(data.defense).to.be.eq(42);
                expect(data.height).to.be.eq(0.87);
                expect(data.type).to.be.eq('besta');
                expect(data.name).to.be.eq('Novo Poke');
                done();
            });
        });
    });

    describe( "Find pokemons with type eq besta", () => {
        it('expect a list of pokemons of type besta', (done) => {
            const query = {type: 'besta' };
            pokeController.retrive(query, (err,data) => {
                expect(err).to.not.exist;
                expect(data).to.be.instanceof(Array);
                data.forEach((pokemon) => expect(pokemon).to.have.property('type').and.equal('besta'));
                done();
            });
        });
    });

    const queryUpRm = {name: 'Novo Poke'};

    describe("Update the pokemon ", () => {
        it('expect update the pokemon', (done) => {
            const mod = {attack: 82, defense: 27};
            const options = {};
            pokeController.update(queryUpRm, mod, options, (err,data) => {
                expect(err).to.not.exist;
                expect(data.nModified).to.be.eq(1);
                expect(data.ok).to.be.eq(1);
                done();
            });
        });
    });

    describe('delete the pokemon', () => {
        it('expect delete the pokemon', (done) => {
            pokeController.delete(queryUpRm, (err, data) => {
                expect(err).to.not.exist;
                expect(data.result.ok).to.be.eq(1);
                done();
            });
        });
    });
});
```
`

Resultado após implementação dos testes e antes de implementar o controller.

```
mocha controller-poke-test.js 


  Controller User teste
    Create new pokemon
      ✓ expect a new pokemon has created
    Find pokemons with type eq besta
      ✓ expect a list of pokemons of type besta
    Update the pokemon 
      1) expect update the pokemon
    Delete the pokemon
      2) expect delete the pokemon
26 May 23:31:12 - { ok: 1, n: 1 }


  2 passing (108ms)
  2 failing

  1) Controller User teste Update the pokemon  expect update the pokemon:
     TypeError: pokeController.update is not a function
      at Context.<anonymous> (controller-poke-test.js:59:19)

  2) Controller User teste delete the pokemon expect delete the pokemon:
     TypeError: pokeController.delete is not a function
      at Context.<anonymous> (controller-poke-test.js:71:25)
```

Resultado após a implmentação dos metodos update e delete no controller.
```
mocha controller-poke-test.js 


  Controller User teste
    Create new pokemon
      ✓ expect a new pokemon has created
    Find pokemons with type eq besta
      ✓ expect a list of pokemons of type besta
    Update the pokemon 
      ✓ expect update the pokemon
    delete the pokemon
      ✓ expect delete the pokemon


  4 passing (89ms)
```


###4) Defina TDD em 3 linhas, baseado no que foi dito ate o momento.
TDD é uma metodologia de desenvolvimento baseada em testes. Ou seja, primeiro você constroi os casos de teste a partir da funcionalidade que deseja no sistema em seguida constrói o código para resolver aquele teste e refatora, com intuito de ter uma aplicação sempre testável e com o mínimo de bugs possíveis.
