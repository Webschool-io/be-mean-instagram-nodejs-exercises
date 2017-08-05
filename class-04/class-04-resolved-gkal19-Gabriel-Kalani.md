# Node.js - Aula 04 - Exercício  
**Autor:** Gabriel Kalani
**Data:** 1454213678365


## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.  

```js  
function name(nome, callback){  
  if (typeof nome === 'string') {  
    return callback(null, nome);  
  } else {  
    const err = new Error("Opa! Parece que você não digitou uma string.");  

    return callback(err, null);  
  }  
}  

name("Gabriel Kalani", (err, nome) => {  
  if (err) {  
    console.log(err);  
  } else {  
    console.log(nome);  
  }  
}); 
```  

Saída que apareceu no Console.

```  
Desktop\Gabriel\workshop-be-mean\nodejs\callbacks>node name.js
Gabriel Kalani
```


## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.  

```js  
function sum (num1, num2, callback) {
  setTimeout(() => {
    if (typeof num1 == "number" && typeof num2 == "number") {
      const result = num1 + num2;
      callback(null, result);
    } else {
      const error = new Error("Ué?! Cadê o número?");
      return callback(error, null);
    }
  }, 30);
}

sum(4, 4, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
```  

Saída:  

```  
Desktop\Gabriel\workshop-be-mean\nodejs\callbacks>node numbers.js
8  
```


## Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.  

```js  
function sum (num1, num2, callback) {
  setTimeout(() => {
    if (typeof num1 == "number" && typeof num2 == "number") {
      const result = (num1 + num2)/ 2;
      callback(null, result);
    } else {
      const error = new Error("Ué?! Cadê o número?");
      return callback(error, null);
    }
  }, 30);
}

sum(4, 4, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
}); 
```  

Saída do Console: 

```  
\Desktop\Gabriel\workshop-be-mean\nodejs\callbacks>node numbers.js
4
```


## Explicar a definição de continuação de uma função.  
Uma `function` que recebe no parâmetro, outra `function` ou dizendo `callback`. 
A função passada como parâmetro vai enviar algo para a outra função para continuar com a execução do código.