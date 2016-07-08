# Node.js - Aula 04 - Exercício
**user:** [tuchedsf](https://github.com/tuchedsf)

**autor:** Diego Santos Ferreira

**Date:** 1457270740092

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.

```js
function sayName (name, callback){
  if (typeof name !=== 'string'){
    var err = new Error('nome invalido');
    return callback(err, null);
  }
    return callback(null, name);
}

sayName('Diego', function(err,name){
  if (err){
    console.log(err);
  }else{
    console.log(name);
  }
});
```



## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
function calculo (valor1,valor2,callback){

  if (typeof valor1 !== 'number' || typeof valor2 !== 'number'){
    var err = new Error('Valores devem ser numericos');
    return callback(err, null);
  }

  var soma = valor1 + valor2;

    return callback(null, soma);
}

calculo(1,2, function(err,result){
  if (err){
    console.log(err);
  }else{
    console.log(result);
  }
});
```


## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.
```js
function calculoMedia (valor1,valor2,callback){

  if (typeof valor1 !== 'number' || typeof valor2 !== 'number'){
    var err = new Error('Valores devem ser numericos');
    return callback(err, null);
  }

  var media = (valor1 + valor2) /2;

    return callback(null, media);
}

calculoMedia(2,2, function(err,result){
  if (err){
    console.log(err);
  }else{
    console.log(result);
  }
});
```


## Explicar a definição de continuação de uma função.

A continuação de uma função se da quando uma função é passada como parametro para outra função. Quando isso ocorre a função passada como paramtro é processada e retorna o fluxo para a função que realizou a chamada continuar o processamento dando continuidade a mesma.
