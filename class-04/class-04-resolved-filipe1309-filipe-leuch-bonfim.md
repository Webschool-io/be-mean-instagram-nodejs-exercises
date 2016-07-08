# Node.js - Aula 04 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma
```js
function readName(name, printCallback) {
  if (typeof name == "string") {
    return printCallback(null, name);
  } else {
    var error = new Error("informe uma string!!!");
    return printCallback(error, null);
  }
}


function printCallback(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result)
  }
}

readName("nome_teste", printCallback); // nome_teste
readName(1, printCallback); // [Error: informe uma string!!!]
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula
```js
function sumValues(value1, value2, printCallback) {
 if (typeof value1 == "number" && typeof value2 == "number") {
    var result = value1 + value2;
    return printCallback(null, result);
  } else {
    var error = new Error("informe somente números!!!");
    return printCallback(error, null);
  }
}


function printCallback(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result)
  }
}

sumValues("nome_teste", 2, printCallback); // [Error: informe somente números!!!]
sumValues(1, 2, printCallback); // 3
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma
```js
function average(value1, value2, printCallback) {
 if (typeof value1 == "number" && typeof value2 == "number") {
    var result = (value1 + value2)/2;
    return printCallback(null, result);
  } else {
    var error = new Error("informe somente números!!!");
    return printCallback(error, null);
  }
}


function printCallback(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result)
  }
}

average("nome_teste", 2, printCallback); // [Error: informe somente números!!!]
average(1, 2, printCallback); // 1.5
```

## Explicar a definição de continuação de uma função
Continuação de uma função, também conhecido como `continuation-passing style (CPS)` na programação funcional, é um estilo de programação em quem uma função recebe uma outra função como parâmetro (conhecida como função de **callback**), e ao final de sua execução, a função que foi passada como parâmetro é executada.  
