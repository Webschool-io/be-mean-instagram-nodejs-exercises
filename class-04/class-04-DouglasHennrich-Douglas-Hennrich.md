# Node.js - Aula 04 - Exercício
**User:** [DouglasHennrich](https://github.com/DouglasHennrich)

**Autor:** Douglas Hennrich

**Date:** 1450670429154

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
```js
function sayMyName(name, callback){
  if(typeof name !== 'string'){
    var err = 'O primeiro parâmetro precisa ser uma \'String\'';
    return callback(err, null);
  }

  return callback(null, name);
}

sayMyName('Douglas Hennrich', function(err, result){
  if(err){
    console.log(err);
    return
  }

  console.log(result);
});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
function AplusB(A, B, callback){
  if( typeof A !== 'number' || typeof B !== 'number'){
    var err = 'Os parâmetros precisam ser \'Number\'';
    return callback(err, null);
  }

  var result = A + B;
  return callback(null, result);
}

AplusB(2, 4, function(err, result){
  if(err){
    console.log(err);
    return;
  }

  console.log(result);
});
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.
```js
function media(A, B, callback){
  if( typeof A !== 'number' || typeof B !== 'number'){
    var err = 'Os parâmetros precisam ser \'Number\'';
    return callback(err, null);
  }

  var result = ( A + B )/ 2;
  return callback(null, result);
}

media(2, 6, function(err, result){
  if(err){
    console.log(err);
    return;
  }

  console.log(result);
});
```

## Explicar a definição de continuação de uma função.
É quando passamos uma `function A` como parâmetro para `function B` que em determinado momento, a `function B` vai retornar alguma coisa para a `function A`, dando continuidade no fluxo do código.
