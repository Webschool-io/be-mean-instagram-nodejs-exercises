# Node.js - Aula 04 - Exercício

**User:** [matheusjkweber](https://github.com/matheusjkweber)

**Autor:** Matheus José Krumenauer Weber

**Date:** 1456691485032

## Criar uma função com uma entrada para o nome e imprimir esta entrada em uma outra função, como continuação da execução da mesma.
  ```js
    function sayName(name, callback){
        if(typeof name === 'string'){
            callback(null, name);
        }else{
            var err = new Error("It is not a string");
            return callback(err, null);
        }
    }

    sayName("Matheus", function(err,name){
        if (err){
            console.log(err);
        }else{
            console.log(name);
        }
    });
```

## Criar uma função que calcula a soma de dois valores e passe o resultado em uma outra função e imprima-o, de acordo com o padrão apresentado em aula.
    ```js
    function sum(num1, num2, callback){
        if(typeof arguments[0] == "number" && typeof arguments[1] == "number"){
            var result = num1 + num2;
            callback(null, result);
        } else{
            var error = new Error("Arguments are not numbers.");
            return callback(error, null)
        }   
    }

    sum(1,2, function(err,result){
        if (err){
            console.log(err);
        }else{
            console.log(result);
        }
    });  
    ```

  

## Criar uma função que calcula a média de dois valores e imprima essa média uma outra função. como continuação da execução da mesma.

    ```js
    function average(num1, num2, callback){
        if(typeof arguments[0] == "number" && typeof arguments[1] == "number"){
            var result = (num1 + num2)/2;
            callback(null, result);
        } else{
            var error = new Error("Arguments are not numbers.");
            return callback(error, null)
        }   
    }


    average(1,2, function(err,result){
        if (err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
    ```

## Explicar a definição de continuação de uma função.

    ```js
    Continuation-passing style é quando um dos argumentos de uma função é outra função que trata da continuação dela. Por exemplo, no average acima o argumento callback foi passado para a segunda função e tratada como erro ou resultado.
    ```
