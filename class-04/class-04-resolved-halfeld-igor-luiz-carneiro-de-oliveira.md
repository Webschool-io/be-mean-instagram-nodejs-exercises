# NodeJS - Aula 02 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1457359592117


## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
'use strict';

function input(name, callback) {
  if (typeof name === 'string') {
    return callback(null, name);
  } else {
    let error = new Error('Pow passa um string aí véi');
    return callback(error, null);
  }
}


input("Igor", (err, name) => {
  if (err) {
    console.log(err);
  } else {
    console.log(name);
  }
});
```
## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
'use strict';

function sum(num1, num2, callback) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    let result = num1 + num2;
    return callback(null, result);
  } else {
    let error = new Error("Passe um numero");
    return callback(error, null);
  }
}

sum(2, 4, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.

```js
'use strict';

function sum(num1, num2, callback) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    let result = (num1 + num2) / 2;
    return callback(null, result);
  } else {
    let error = new Error("Passe um numero");
    return callback(error, null);
  }
}

sum(4, 8, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

```

## Explicar a definição de continuação de uma função.
É simplesmente quando passamos um função como parametro de outra função.
