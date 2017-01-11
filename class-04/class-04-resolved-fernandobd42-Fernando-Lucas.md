# Node.js - Aula 04 - Exercício

# Node.js - Aula 04 - Exercício
**user:** [fernandobd42](https://github.com/fernandobd42)
**autor:** Fernando Lucas
**date:**

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma
```
const name = (nome, callback) => {
  if (typeof nome === 'string') {
    return callback(null, 'O nome é: '+ nome);
  } else {
    let err = new Error("Tipo de dado incorreto, digite uma string por favor.");

    return callback(err, null);
  }
}

const printName = (err, nome) => {
  if (err) {
    console.log(err);
  } else {
    console.log(nome);
  }
};

name('Fernando Lucas', printName); // 'O nome é: Fernando Lucas'
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula
```
const sum = (a, b, callback) => {
  if (typeof a === 'number' && typeof b === 'number') {
    let sum = a + b;
      return callback(null, 'A soma é: '+ sum);
  } else {
    let err = new Error('Tipo de dado incorreto, digite apenas números por favor.');
      return callback(err, null);
  }
}

const printSum = (err, sum) => {
  if (err) {
    console.log(err);
  } else {
    console.log(sum);
  }
}

sum(3,6, printSum); // A soma é: 9
```
## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma
```
const av = (a, b, callback) => {
  if (typeof a === 'number' && typeof b === 'number') {
    let average = (a + b) / 2;
      return callback(null, 'A média é: '+ average);
  } else {
    let err = new Error('Tipo de dado incorreto, digite apenas números por favor.');
      return callback(err, null);
  }
}

const printAv = (err, average) => {
  if (err) {
    console.log(err);
  } else {
    console.log(average);
  }
}

av(3,6, printAv); // A média é: 4.5
```

## Explicar a definição de continuação de uma função
O termo continuação de uma função consiste em passar uma função como parâmetro de outra função, que ao ser invocada dependerá do retorno da função que foi passada como argumento para continuar o processo. Ou seja, a função A que possui o callback (chamada de retornorno) executa as instruções necessárias e passa os argumentos para a função B, que é responsável pelo retorno.
