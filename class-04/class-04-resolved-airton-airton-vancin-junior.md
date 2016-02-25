# Node.js - Aula 04 - Exercício
**user:** [airton](https://github.com/airton)<br> 
**autor:** Airton Vancin Junior<br>
**date:** 1456328185817

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma

```js

function sayName (name, callback){
    if (typeof name === 'string') {
        return callback(null, name);
    } else {
        var err = new Error("Error, não é string");
        return callback(err, null);
    }
}

sayName("Airton Vancin", function(err, name){
    if (err) {
        console.log(err);
    } else {
        console.log(name);
    }
});

```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula

```js
function sum (num1, num2, callback) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        var result = num1 + num2;
        callback(null, result);
    } else {
        var error = new Error("Passe um número, por favor!! ");
        return callback(error, null);
    }
}

sum(10, 10, function(err, result){
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma

```js
function sum (num1, num2, callback) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        var result = (num1 + num2) / 2;
        callback(null, result);
    } else {
        var error = new Error("Passe um número, por favor!! ");
        return callback(error, null);
    }
}

sum(50, 100, function(err, result){
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

```

## Explicar a definição de continuação de uma função

Para estendermos a execução de uma função basta que passamos para essa função um outra função com parâmentro.
