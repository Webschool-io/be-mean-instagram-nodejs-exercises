# Node.js - Aula 04 - Exercício
**User:** charles7421

**Autor:** Charles de Freitas Garcia

**Date:** 03/04/2016

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
function sayMyName(name, callback) {
  if (typeof name === 'string') {
    return  callback(null, name);
  } else {
    var err = new Error('Informe ');
    return callback(err, null);
  }
}

sayMyName("Heisenberg", function(err, name){
  if (err){
    console.log(err); 
  } else {
    console.log(name);
  }

});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
function soma(num1, num2, callback){
  if (typeof num1 == "number" && typeof num2 == "number") {
    var result = num1 + num2;
    callback(null, result);
  } else {
    var err = new Error("Informe um número");
    return callback(err, null);
  }
}

soma(1,1, function(err, result){
  if (err){
    console.log(err); 
  } else {
    console.log(result);
  }
})

```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.

```js
function media(num1, num2, callback){
  if (typeof num1 == "number" && typeof num2 == "number") {
    var result = (num1 + num2) / 2;
    callback(null, result);
  } else {
    var err = new Error("Informe um número");
    return callback(err, null);
  }
}

media(5,10, function(err, result){
  if (err){
    console.log(err); 
  } else {
    console.log(result);
  }
})
```

## Explicar a definição de continuação de uma função.

A continuação de uma função ou CPS (Continuation-Passion style) é quando uma função é passada como parametro na chamada de uma função. Quando isso ocorre é processada e retorna o resultado para a função que realizou a chamada.
