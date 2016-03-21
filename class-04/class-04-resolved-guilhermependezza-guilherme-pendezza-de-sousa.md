# Node.js - Aula 04 - Exercício

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
R:

function sayName(name, callback){
    typeof name == 'string' ?
        callback(null, name) :
        callback(new Error('Passa uma string aí, seu jegue'), null);
}

sayName('Guilherme', (err, name) => {
    err ?
        console.log(err) :
        console.log(name);
});

sayName(12345, (err, name) => {
    err ?
        console.log(err) :
        console.log(name);
});

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
R: 

function sum(num1, num2, callback){
    typeof num1 == 'number' && typeof num2 == 'number' ?
        callback(null, num1 + num2) :
        callback(new Error('Vai passar algum número ou vai ficar me zuando?'), null);
}

sum(1, 3, (err, result) => {
    err ?
        console.log(err) :
        console.log(result);
});

sum('abc', 'def', (err, result) => {
    err ?
        console.log(err) :
        console.log(result);
});


## Criar uma função que calcula a média de dois valores e imprima essa média em outra função, como continuação da execução da mesma.
R:

function avg(num1, num2, callback){
    typeof num1 == 'number' && typeof num2 == 'number' ?
        callback(null, (num1 + num2) / 2) :
        callback(new Error('Vai passar algum número ou vai ficar me zuando?'), null);
}

avg(1, 3, (err, result) => {
    err ?
        console.log(err) :
        console.log(result);
});

avg('abc', 'def', (err, result) => {
    err ?
        console.log(err) :
        console.log(result);
});

## Explicar a definição de continuação de uma função.

R: O padrão de continuação de funções consiste em passar uma função que continue o processo com o resultado de alguma função. Isso é muito usado no caso de resposta à eventos, onde uma função é passada como parâmetro e é executada no momento do disparo do evento. 

Ex.:
    let data = '';
    res.on('data', chunk => data += chunk);
    
A função anônima "chunk => data += chunk" é passada para execução quando for disparado o evento 'data' da resposta.