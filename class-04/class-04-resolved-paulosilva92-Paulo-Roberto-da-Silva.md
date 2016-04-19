# Node.js - Aula 04 - Exercício

**user:** https://github.com/paulosilva92

**autor:** Paulo Roberto da Silva

**date:** Sat Mar 05 2016 00:51:06 GMT-0300 (BRT)

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
function name(name) {
    if (typeof(name) !== 'string') {
        var err = new Error('Não é uma String');
        arguments[1](err, null)
    } else {
        arguments[1](null,name);
    }
}

name("paulo", function(err,name){
    if (err) {
        console.log(err);
    } else {
        console.log(name);
    }
});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
function soma(num1, num2 , callback) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        callback(null,num1+num2);   
    } else {
        var err = new Error('Parametros inválidos');
        callback(err, null)
    }
    
};

soma(1,2, function(err,resultado){
    if (err) {
        console.log(err);
    } else {
        console.log(resultado);
    }
});

```

## Criar uma função que calcula a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.

```js
function media(num1, num2 , callback) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        var med = (num1+num2)/2
        callback(null,med); 
    } else {
        var err = new Error('Parametros inválidos');
        callback(err, null)
    }
    
};

media(1,2, function(err,resultado){
    if (err) {
        console.log(err);
    } else {
        console.log(resultado);
    }
});
```

## Explicar a definição de continuação de uma função

Quando estendemos a funcionalidade de uma função para outra função, dizemos que a segunda função é continuação da primeira.