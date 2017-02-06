# Node.js - Aula 04 - Exercício

autor: Bruno Lima da Silva

## 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
```js
'use strict';

function callback (err, result) {
	if (err) throw new Error (err);
	console.log ('Meu nome é ', result);
}

function sayName (name, callback) {
	if (typeof name === 'string') return callback (null, name);
	const err = 'Você precisa passar uma STRING para name';
	return callback (err, null);
}
```
## 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
'use strict';

function callback (err, result) {
	if (err) throw new Error (err);
	console.log ('A soma é ', result);
}

function sum (value1, value2, callback) {
	if (typeof value1 === 'number' && typeof value2 === 'number') return callback (null, (value1+value2));
	const err = 'Você precisa informar dois números';
	return callback (err, null);
}
```
## 3. Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.
```js
'use strict';

function callback (err, result) {
	if (err) throw new Error (err);
	console.log ('A média é ', result);
}

function media (value1, value2, callback) {
	if (typeof value1 === 'number' && typeof value2 === 'number') return callback (null, ((value1+value2)/2));
	const err = 'Você precisa informar dois números';
	return callback (err, null);
}
```

## 04.Explicar a definição de continuação de uma função.

