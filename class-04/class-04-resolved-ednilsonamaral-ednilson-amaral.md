# Node.js - Aula 04 - Exercício  
**Autor:** Ednilson Amaral  
**Data:** 1450748289337


## Criar uma função com uma entrada para nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.  

```js  
function meuNome(nome, callback){  
  if (typeof nome === 'string') {  
    return callback(null, nome);  
  } else {  
    var err = new Error("Digite uma string, parça!");  

    return callback(err, null);  
  }  
}  

meuNome("Ednilson Amaral", function (err, nome){  
  if (err) {  
    console.log(err);  
  } else {  
    console.log(nome);  
  }  
});  
```  

Saída:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios-callbacks$ node exercicio_01.js  
Ednilson Amaral  
```


## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.  

```js  
function soma(n1, n2, callback){  
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {  
    var result = n1 + n2;  

    return callback(null, result);  
  } else {  
    var err = new Error("Digite um número, parça!");  

    return callback(err, null);  
  }  
}  

soma(5, 5, function (err, result) {  
  if (err) {  
    console.log(err);  
  } else {  
    console.log(result);  
  }  
});  
```  

Saída:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios-callbacks$ node exercicio_02.js  
10  
```


## Criar uma que calcular a média de dois valores e imprima essa média uma outra função, como continuação da execução da mesma.  

```js  
function soma(n1, n2, callback){  
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {  
    var result = (n1 + n2) / 2;  

    return callback(null, result);  
  } else {  
    var err = new Error("Digite um número, parça!");  

    return callback(err, null);  
  }  
}  

soma(8, 4, function (err, result) {  
  if (err) {  
    console.log(err);  
  } else {  
    console.log(result);  
  }  
});  
```  

Saída:  

```  
ednilson@EDNILSON-NB:/var/www/be-mean-instagram-nodejs/exercicios-callbacks$ node exercicio_03.js  
6  
```


## Explicar a definição de continuação de uma função.  

A continuação de função é quando ao chamar determinada função, chamamos outra função nela como parâmetro. Ou seja, em algum momento, A função passada como parâmetro vai enviar algo para a outra função para continuar com a execução do código.