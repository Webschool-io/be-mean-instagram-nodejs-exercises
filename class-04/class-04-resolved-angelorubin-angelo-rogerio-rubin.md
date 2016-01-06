# Node.js - Aula 04 - Parte 1 - Exercício

**User:** [angelorubin](https://github.com/angelorubin)

**Autor:** Angelo Rogério Rubin

**Date:** 1451048271400

## Criar uma função com uma entrada para o nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
  
    'use strict';

    function firstName(firstName, callback) {
        if(typeof firstName === 'string') {
            return callback(firstName, null);
        }
        else {
            var error = new Error('Digite seu primeiro nome.');
            return callback(error, null);
        }
    }

    firstName(2, (error, firstName) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log(firstName);
        }
    });


## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.

    'use strict';

    function addTwoNumbers(num1, num2, callback){
        if( typeof num1 !== 'number' || typeof num2 !== 'number'){
            let error = new Error('São permitidos apenas números');
            return callback(error, null);
        }

        let result = num1 + num2;
        return callback(null, result);
    }

    addTwoNumbers(20, 1.78, (error, result) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(result);
    });
    

## Criar uma função que calcula a média de dois valores e imprima essa média uma outra função. como continuação da execução da mesma.

    'use strict';

    function media(val1, val2, callback) {
        if( typeof val1 != 'number' || typeof val2 != 'number'){
            var error = new Error('São permitidos apenas números.');
            return callback(error, null);
        }
        var result = ( val1 + val2 )/ 2;
        return callback(null, result);
    }

    media(2, 1.45, (error, result) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(result);
    });

## Explicar a definição de continuação de uma função.

Na programação funcional, continuation-passing style (CPS) é um estilo de programação em que o controle é passado explicitamente na forma de uma continuação. 

Uma função escrita em continuation-passing style recebe um argumento extra: uma "continuação" explícita, ou seja, uma função de um argumento.

Os exemplos desenvolvidos acima demonstram claramente o uso de continuation-passing style.