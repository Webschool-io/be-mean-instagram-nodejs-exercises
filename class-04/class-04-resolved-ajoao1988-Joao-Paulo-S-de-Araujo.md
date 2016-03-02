# NodeJS - Aula 04 - Exercícios
**User:** [ajoao1988](https://github.com/ajoao88)  
**Autor:** João Paulo S de Araújo  
**Date:** 1456710048954

## 1. Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da mesma.

```js
function imprimirNome(nome,callback){
    if (typeof nome === 'string') {
        return callback(null,nome);
    } else {
        erro = new Error('Nome inválido!');
        return callback(erro,null);
    }
}

imprimirNome('João Paulo', function(err, result){
    if (err) console.log(err);
    else console.log(result);
});
```

## 2. Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

```js
function soma(val1, val2, callback){
    if (typeof val1 === 'number' && typeof val2 === 'number'){
        var resultado = val1 + val2;
        return callback(null,resultado);
    } else {
        var erro = new Error('Valores inválidos');
        return callback(erro, null);
    }
}

soma(12,13,function(err,result){
    if (err) console.log(err);
    else console.log(result);
});
```

## 3. Criar uma que calcular a média de dois valores e imprima essa média em uma outra função, como continuação da execução da mesma.

```js
function calcularMedia(val1, val2, callback){
    if (typeof val1 === 'number' && typeof val2 === 'number'){
        var resultado = (val1 + val2) / 2;
        return callback(null,resultado);
    } else {
        var erro = new Error('Valores inválidos');
        return callback(erro, null);
    }
}

calcularMedia(12,13,function(err,result){
    if (err) console.log(err);
    else console.log(result);
});
```

## 4. Explicar a definição de continuação de uma função.
Continuação de uma função é a técnica de chamar uma função dentro de outra e ter o retorno da função chamada em forma de callback para a função chamadora e assim fazer a continuação do código após a chamada.
