# Node.js - Aula 04 - Exercício

**user:** [victorvoid](https://github.com/victorvoid)

**autor:** Victor Igor

## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.  

```js  
'use strict'

function printName(name, callback){
  if (typeof name === 'string')
    return callback(null, name);
  let err = new Error('Invalid type argument!!!');
    return callback(err, null);
}
printName('Victor Igor', (err, result)=>{
  if(err) 
    console.log(err);
  else
    console.log(result);
});

```  

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.  

```js  
'use strict'

function sum(n1, n2, callback){
  if (typeof n1 === 'number' && typeof n2 === 'number')
    return callback(null, (n1+n2));
  let err = new Error('Invalid type argument!!!');
  return callback(err, null);
}

sum(2,3,(err, result)=>{
  if(err)
    console.log(err);
  else
    console.log(result);
});
```  

## Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.  

```js  
'use strict'

function avg(n1, n2, callback){
  if(typeof n1 === 'number' && typeof n2 === 'number')
    return callback(null, ((n1+n2)/2));
  let err = new Error('Invalid type argument!!!');
  callback(err, null);
}

avg(4,16,(err, result)=>{
  if(err)
    console.log(err);
  else
    console.log(result);
})

```  

## Explicar a definição de continuação de uma função.  

```   
Ela se baseia em você criar uma função1 que vai ter um objetivo e
nela, vem uma função2 passada por parâmetro para que a funcao2 possa ser chamada ali dentro, assim podendo passar por parâmetro qualquer valor a funcao2, para que a partir dali a funcao2 __continue__.
```  