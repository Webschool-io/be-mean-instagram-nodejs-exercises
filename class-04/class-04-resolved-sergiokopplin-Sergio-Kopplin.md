# Node.js - Aula 04 - Exercício
**User:** [sergiokopplin](https://github.com/sergiokopplin)

**Autor:** Sergiokopplin

**Date:** 1450670429154

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
```js
function imprimiNome(name, callback) {
    "use strict";

    if(typeof name === "string"){
        var str = "Seu nome é: " + name;
        return callback(null, str);
    } else {
        var erro = new Error("Você precisa passar uma string com o seu nome.");
        return callback(erro, null);
    }
};

imprimiNome("Sérgio Aragão Kopplin", function(erro, name) {
    "use strict";

    if (erro) {
        console.log(erro);
    } else {
        console.log(name);
    }
});
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
```js
function somaValores(num1, num2, callback) {
    "use strict";

    if(typeof num1 === "number" && typeof num2 === "number"){
        var res = num1 + num2;
        return callback(null, res);
    } else {
        var erro = new Error("Você precisa passar apenas números para a função.");
        return callback(erro, null);
    }
};

somaValores(13, 76, function(erro, name) {
    "use strict";

    if (erro) {
        console.log(erro);
    } else {
        console.log(name);
    }
});
```

## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.
```js
function calculaMedia(num1, num2, callback) {
    "use strict";

    if(typeof num1 === "number" && typeof num2 === "number"){
        var res = ( num1 + num2 ) / 2;
        return callback(null, res);
    } else {
        var erro = new Error("Você precisa passar apenas números para a função.");
        return callback(erro, null);
    }
};

calculaMedia(1, 5, function(erro, name) {
    "use strict";

    if (erro) {
        console.log(erro);
    } else {
        console.log(name);
    }
});
```

## Explicar a definição de continuação de uma função.
A continuação de uma função consiste em chamar otura função como parâmetro dentro de uma função principal. Essa função parâmetro será, em determinado momento, chamada em forma de callback, sendo assim, quando o código executar a primeira função terá como callback o resultado de outra função.
