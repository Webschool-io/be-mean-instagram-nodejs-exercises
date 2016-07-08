# Node.js - Aula 04 - Exercício
**user:** [fauker](http://github.com/fauker)
**autor:** LUCAS DA SILVA MOREIRA

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma

```
function sayMyName(nome, callback) {
  if (typeof nome === 'string') {
    return callback(null, nome);
  } else {
    return callback(new Error('O parâmetro passado não é uma String!'), null);
  }
}

sayMyName('Lucas', function(erro, resposta) {
  if (erro) console.log(erro);
  else console.log(resposta);
});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula

```
function sum(num1, num2, callback) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    var result = num1 + num2;
    return callback(null, result);
  } else {
    return callback(new Erro('Somente números são suportados'), null);
  }
}

sum(1, 2, function(error, result) {
  if (error) console.log(error);
  else console.log(result);
});
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma

```
function media(num1, num2, callback) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    var result = num1 + num2 / 2;
    return callback(null, result);
  } else {
    return callback(new Erro('Somente números são suportados'), null);
  }
}

media(1, 2, function(error, result) {
  if (error) console.log(error);
  else console.log(result);
});
```

## Explicar a definição de continuação de uma função

Na programação funcional, **Continuation-passing style** é um estilo de
programação que o controle é passado explicitamente em forma de
continuação.

A função escrita com este padrão tem um argumento extra: uma função que
será a continuação. 
