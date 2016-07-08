# Node.js - Aula 04 - Exercício
**User:** [Cerezini](https://github.com/Cerezini)
**Autor:** Mateus Cerezini Gomes

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma

```js
function printName(name, callback) {
  if (typeof name == 'string') {
    callback(name);
  } else {
    callback('Você deve passar uma string');
  }
}

printName('Pedro pão de batata', function(txt) {
  console.log(txt);
});

printName(3, function(txt) {
  console.log(txt);
});
```
```js
Pedro pão de batata
Você deve passar uma string
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula

```js
function sum(num1, num2, callback) {
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    callback(null, num1 + num2);
  } else {
    var err = new Error('Você deve passar dois parêmetros numéricos');
    callback(err, null);
  }
};

sum(9, 9, function(err, value) {
  if (err) {
    console.log(err);
  } else {
    console.log('Soma = ', value);
  }
});

sum('9', 9, function(err, value) {
  if (err) {
    console.log(err);
  } else {
    console.log('Soma = ', value);
  }
});
```

```js
Soma =  18
[Error: Você deve passar dois parêmetros numéricos]
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma

```js
function avg(num1, num2, callback) {
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    callback(null, (num1 + num2)/2);
  } else {
    var err = new Error('Você deve passar dois parêmetros numéricos');
    callback(err, null);
  }
};

avg(3, 9, function(err, value) {
  if (err) {
    console.log(err);
  } else {
    console.log('Média = ', value);
  }
});

avg('9', 9, function(err, value) {
  if (err) {
    console.log(err);
  } else {
    console.log('Média = ', value);
  }
});
```

```js
Média =  6
[Error: Você deve passar dois parêmetros numéricos]
```

## Explicar a definição de continuação de uma função

Significa que a execução de um função é extendida pela execução de outra função, a qual é responsável pelo retorno da função original.
